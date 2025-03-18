import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, githubProvider } from "../../../../firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "@/redux/bazarSlice";
import { useNavigate } from "react-router";
import { FaGithub } from "react-icons/fa";
const GithubLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGithubLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log(result, "result", "booooooooooooooom");

      if (result && result?.user) {
        const data = result?.user?.providerData[0];
        if (data) {
          dispatch(addUser(data));
        }
      } else {
        dispatch(removeUser());
      }
    } catch (error) {
      console.error("Github login error", error);
    } finally {
      setIsLoading(false);
      navigate("/");
    }
  };

  return (
    <button
      disabled={isLoading}
      className="border w-full text-sm flex items-center justify-center gap-2 py-2 rounded-md bg-white font-semibold hover:bg-gray-100 hoverEffect"
      onClick={handleGithubLogin}
    >
      <FaGithub className="size-6" />
      <span>Sign in with Github</span>
    </button>
  );
};

export default GithubLogin;





















// import { 
//   signInWithPopup, 
//   fetchSignInMethodsForEmail, 
//   linkWithCredential, 
//   GoogleAuthProvider, 
//   GithubAuthProvider 
// } from "firebase/auth";
// import { useState } from "react";
// import { auth, githubProvider } from "../../../../firebase";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "@/redux/bazarSlice";
// import { useNavigate } from "react-router";
// import { FaGithub } from "react-icons/fa";

// const GithubLogin = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleGithubLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setIsLoading(true);
  
//     try {
//       const result = await signInWithPopup(auth, githubProvider);
//       console.log("✅ GitHub Login Success:", result);
  
//       if (result.user) {
//         const userData = result.user.providerData[0];
//         dispatch(addUser(userData));
//       } else {
//         dispatch(removeUser());
//       }
  
//     } catch (error: any) {
//       console.error("❌ GitHub login error:", error);
  
//       if (error.code === "auth/account-exists-with-different-credential") {
//         // 🛑 Yeh error tab aayega jab email kisi aur provider se linked hai
//         const existingEmail = error.customData.email;
//         const pendingCredential = error.credential; // Store the GitHub credential
  
//         if (existingEmail) {
//           // 🔍 Check karo pehle se kaunsa provider linked hai
//           const methods = await fetchSignInMethodsForEmail(auth, existingEmail);
  
//           if (methods.includes("google.com")) {
//             // 🚀 Google se login karwao
//             const googleProvider = new GoogleAuthProvider();
//             const googleSignInResult = await signInWithPopup(auth, googleProvider);
  
//             // 🔗 Ab GitHub ko Google ke saath link kar do
//             await linkWithCredential(googleSignInResult.user, pendingCredential);
//             console.log("✅ GitHub account successfully linked to Google!");
  
//             dispatch(addUser(googleSignInResult.user.providerData[0]));
//           }
//         }
//       }
//     } finally {
//       setIsLoading(false);
//       navigate("/");
//     }
//   };
  
//   return (
//     <button
//       disabled={isLoading}
//       className="border w-full text-sm flex items-center justify-center gap-2 py-2 rounded-md bg-white font-semibold hover:bg-gray-100 hoverEffect"
//       onClick={handleGithubLogin}
//     >
//       <FaGithub className="size-6" />
//       <span>Sign in with Github</span>
//     </button>
//   );
// };

// export default GithubLogin;
