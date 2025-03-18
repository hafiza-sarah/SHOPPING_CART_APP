// import { Router } from "express";
// import stripe from "../lib/stripe.js";
// const router = Router();
// import cors from "cors";

// router.use(cors());

// router.post("/checkout", async (req, res) => {
//   const reqBody = await req.body;
//   console.log(reqBody)
//   const { item, email } = await reqBody;

//   try {
//     const extractingItems = await item.map((product) => ({
//       quantity: product?.quantity,
//       price_data: {
//         currency: "usd",
//         unit_amount: Math.round(product.price * 100),
//         product_data: {
//           name: product?.title,
//           description: product?.description,
//           images: [product?.image],
//         },
//       },
//     }));
//     const origin = process.env.ORIGIN;

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: extractingItems,
//       mode: "payment",
//       success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${origin}/cart`,
//       customer_email: email,
//     });
//     return res.status(200).send({
//       success: true,
//       message: "Payment session created successfully",
//       url: session?.url,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     return res.status(500).send({
//       success: false,
//       message: "Payment failed",
//     });
//   }
// });

// export default router;



























// import { Router } from "express";
// import stripe from "../lib/stripe.js";
// import prisma from "../lib/prisma.js"; // ✅ Correct
// import cors from "cors";

// const router = Router();
// router.use(cors());

// router.post("/checkout", async (req, res) => {
//   try {
//     const { item, email } = req.body;
    
//     // Find the user (or create if first-time checkout)
//     let user = await prisma.user.findUnique({ where: { email } });
//     if (!user) {
//       user = await prisma.user.create({ data: { email } });
//     }

//     // Map products to Stripe format
//     const extractingItems = item.map((product) => ({
//       quantity: product.quantity,
//       price_data: {
//         currency: "usd",
//         unit_amount: Math.round(product.price * 100),
//         product_data: {
//           name: product.title,
//           description: product.description,
//           images: [product.image],
//         },
//       },
//     }));

//     const origin = process.env.ORIGIN;
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: extractingItems,
//       mode: "payment",
//       success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${origin}/cart`,
//       customer_email: email,
//     });

//     // Store payment session
//     await prisma.payment.create({
//       data: {
//         sessionId: session.id,
//         userId: user.id,
//         productIds: item.map((product) => product.id), // Store product IDs as an array
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Payment session created successfully",
//       url: session.url,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Payment failed",
//     });
//   }
// });

// export default router;




























































import { Router } from "express";
import stripe from "../lib/stripe.js";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = Router();
router.use(cors());

const sendPaymentConfirmationEmail = async (email, items, amount) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: process.env.SENDER_EMAIL, // Brevo SMTP email
        pass: process.env.BREVO_API_KEY, // Brevo API Key
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Payment Confirmation - Order Received!",
      html: `
        <h2>Thank You for Your Purchase! 🎉</h2>
        <p>Your payment of <b>$${amount / 100}</b> was successful.</p>
        <h3>Order Summary:</h3>
        <ul>
          ${items
            .map(
              (product) =>
                `<li><b>${product.product_data.name}</b> - $${(
                  product.price_data.unit_amount / 100
                ).toFixed(2)} x ${product.quantity}</li>`
            )
            .join("")}
        </ul>
        <p>We appreciate your business! If you have any questions, contact us.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Payment confirmation email sent successfully!");
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};

router.post("/checkout", async (req, res) => {
  const reqBody = await req.body;
  console.log(reqBody);
  const { item, email } = await reqBody;

  try {
    const extractingItems = item.map((product) => ({
      quantity: product?.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(product.price * 100),
        product_data: {
          name: product?.title,
          description: product?.description,
          images: [product?.image],
        },
      },
    }));
    
    const totalAmount = extractingItems.reduce(
      (sum, product) => sum + product.price_data.unit_amount * product.quantity,
      0
    );

    const origin = process.env.ORIGIN;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      customer_email: email,
    });

    // 📧 Send payment confirmation email
    await sendPaymentConfirmationEmail(email, extractingItems, totalAmount);

    return res.status(200).send({
      success: true,
      message: "Payment session created successfully",
      url: session?.url,
    });
  } catch (error) {
    console.error("❌ Error:", error);
    return res.status(500).send({
      success: false,
      message: "Payment failed",
    });
  }
});

export default router;
