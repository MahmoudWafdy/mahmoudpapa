import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../FireBase";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Update the user profile with the name
      await updateProfile(user, {
        displayName: name,
      });
      // Store the user's name in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
      });

      alert(`User created successfully, Welcome ${name}`);
      navigate("/login");
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };
  return (
    <div className="grid grid-cols-1 my-10 md:grid-cols-3 md:gap-8">
      <div className="col-span-2 relative">
        <img
          src="/images/sign.jpeg"
          className="absolute top-0 -left-5 h-full object-cover object-center w-full"
        ></img>
      </div>
      <div className="flex flex-col gap-2 md:py-16 md:min-h-[510px]">
        <h2 className="font-normal text-2xl md:text-3xl">Create an account</h2>
        <p className="">Enter your details below</p>
        <form className="flex flex-col gap-3 mt-3 ">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-2 outline-none border-b border-solid border-slate-400 sm-md:max-w-[300px]"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or Phone number"
            className="py-2 outline-none border-b border-solid border-slate-400 sm-md:max-w-[300px]"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="py-2 outline-none border-b border-solid border-slate-400 sm-md:max-w-[300px]"
          ></input>
        </form>
        <button
          className="bg-secondary py-2 rounded sm-md:max-w-[300px] text-white"
          onClick={handleSubmit}
        >
          Create Acount
        </button>
        <button className="sm-md:max-w-[300px] py-2 rounded flex justify-center items-center gap-3 border border-slate-400">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6682_3336)">
              <path
                d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                fill="#4285F4"
              />
              <path
                d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
                fill="#34A853"
              />
              <path
                d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
                fill="#FBBC04"
              />
              <path
                d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_6682_3336">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          Sign Up with google
        </button>
        <div className="flex gap-2 justify-center items-center">
          <p>Already have account?</p>
          <Link to={"/logIn"} className="underline">
            Log in
          </Link>
        </div>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
export default SignUp;
