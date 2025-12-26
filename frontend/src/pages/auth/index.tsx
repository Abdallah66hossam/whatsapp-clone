import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Welcome from "./Welcome";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth() {
  const [view, setView] = useState("welcome");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (phone && password) {
      alert(`Sign in with: ${phone}`);
    }
  };

  const handleSignUp = () => {
    if (name && phone && password) {
      alert(`Sign up with: ${name}, ${phone}`);
    }
  };
  return (
    <div className="min-h-screen bg-[#111b21] p-4 flex items-center justify-center">
      {/* Header */}
      <div className="flex items-center mb-8 mt-4 absolute left-4 top-4">
        <button
          onClick={() => setView("welcome")}
          className="text-gray-400 hover:text-white"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-white text-xl font-light ml-4">Create Account</h2>
      </div>
      {/* Tabs */}
      {view === "welcome" && <Welcome setView={setView} />}
      {view === "signin" && (
        <SignIn
          setView={setView}
          phone={phone}
          password={password}
          handleSignIn={handleSignIn}
          setPassword={setPassword}
          setPhone={setPhone}
        />
      )}
      {view === "signup" && (
        <SignUp
          setView={setView}
          name={name}
          phone={phone}
          password={password}
          handleSignUp={handleSignUp}
          setName={setName}
          setPassword={setPassword}
          setPhone={setPhone}
        />
      )}
    </div>
  );
}
