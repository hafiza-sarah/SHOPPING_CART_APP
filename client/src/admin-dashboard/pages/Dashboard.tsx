// import { useEffect, useState } from "react";
// import { fetchProducts } from "../api/index";

// const Dashboard = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       const data = await fetchProducts();
//       setProducts(data);
//     };
//     getProducts();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map(({ title, isNew, oldPrice, price, description, category, image, rating }) => (
//           <div key={title} className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform">
//             <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
//             <h2 className="text-lg font-semibold">{title}</h2>
//             <p className="text-gray-500 text-sm">{category}</p>
//             <p className="text-gray-700 text-sm line-clamp-2">{description}</p>
//             <div className="flex justify-between items-center mt-2">
//               <div>
//                 {isNew && <span className="text-green-600 font-semibold">New</span>}
//                 <p className="text-sm line-through text-gray-400">${oldPrice}</p>
//                 <p className="text-lg font-bold text-blue-600">${price}</p>
//               </div>
//               <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-lg">⭐ {rating}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


































import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Navigate } from "react-router";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // 🔹 Fetch user role from Firestore
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setRole(userSnap.data().role); // 🔹 Get the role
        } else {
          // Optionally, handle the case where user data is not found
          // Example: Set a default role or redirect to another page
          setRole("user"); // Set default role to 'user'
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/login" replace />; // 🔹 Redirect if not logged in

  if (role !== "admin") return <Navigate to="/" replace />; // 🔹 Redirect non-admins

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      {/* Admin Content */}
    </div>
  );
};

export default Dashboard;
