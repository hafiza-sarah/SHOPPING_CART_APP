// import { Router } from "express";
// import { prisma } from "../lib/prisma.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const router = Router();

// // Unified Sign Up & Sign In Route
// router.post("/auth", async (req, res) => {
//   try {
//     const { email, password, name, googleId, githubId } = req.body;
   
//     console.log(req.body)
//     // Check if the user exists
//     let user = await prisma.user.findUnique({ where: { email } });

//     // If user exists, handle sign-in
//     if (user) {
//       // Social login case
//       if (googleId || githubId) {
//         return res.status(200).json({ success: true, message: "User authenticated", user });
//       }

//       // Manual sign-in case
//       if (!password) return res.status(400).json({ success: false, message: "Password required" });

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(401).json({ success: false, message: "Invalid credentials" });

//       // Generate JWT Token
//       const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });

//       return res.status(200).json({ success: true, message: "Login successful", token, user });
//     }

//     // If user does not exist, handle sign-up
//     const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
//     user = await prisma.user.create({
//       data: {
//         email,
//         name,
//         password: hashedPassword,
//         googleId,
//         githubId,
//       },
//     });

//     // Generate JWT Token for new users
//     const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     return res.status(201).json({ success: true, message: "User created", token, user });
//   } catch (error) {
//     console.error("Auth error:", error);
//     return res.status(500).json({ success: false, message: "Authentication failed" });
//   }
// });

// export default router;














import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const router = Router();

// Unified Sign Up & Sign In Route (Social Login Only)
router.post("/auth", async (req, res) => {
  try {
    const { email, name, googleId, githubId } = req.body;
    
    if (!email || (!googleId && !githubId)) {
      return res.status(400).json({ success: false, message: "Invalid request" });
    }

    // Check if user exists
    let user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      return res.status(200).json({ success: true, message: "User authenticated", user });
    }

    // Create new user
    user = await prisma.user.create({
      data: { email, name, googleId, githubId },
    });

    return res.status(201).json({ success: true, message: "User created", user });
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(500).json({ success: false, message: "Authentication failed" });
  }
});

export default router;
