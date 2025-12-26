import { Lock, MessageCircle, Phone, User } from "lucide-react";

const SignUp = ({
  setView,
  name,
  phone,
  password,
  handleSignUp,
  setName,
  setPhone,
  setPassword,
}: {
  setView: (view: string) => void;
  name: string;
  phone: string;
  password: string;
  handleSignUp: () => void;
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  setPassword: (password: string) => void;
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full mx-auto">
      {/* Logo */}
      <div className="w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center mb-8">
        <MessageCircle size={32} className="text-white" />
      </div>

      <p className="text-gray-400 text-center mb-8 px-4">
        Create your account to get started with WhatsApp
      </p>

      {/* Input Fields */}
      <div className="w-full space-y-6">
        <div className="relative">
          <User
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full bg-[#1e2a32] text-white py-4 pl-12 pr-4 rounded-lg border border-gray-700 focus:border-[#25d366] focus:outline-none"
          />
        </div>

        <div className="relative">
          <Phone
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="w-full bg-[#1e2a32] text-white py-4 pl-12 pr-4 rounded-lg border border-gray-700 focus:border-[#25d366] focus:outline-none"
          />
        </div>

        <div className="relative">
          <Lock
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-[#1e2a32] text-white py-4 pl-12 pr-4 rounded-lg border border-gray-700 focus:border-[#25d366] focus:outline-none"
          />
        </div>

        <button
          onClick={handleSignUp}
          className="w-full bg-[#25d366] text-white py-4 rounded-full font-medium hover:bg-[#20bd5a] transition-colors mt-8"
        >
          Create Account
        </button>
      </div>

      <p className="text-gray-500 text-sm text-center mt-6">
        Already have an account?{" "}
        <button
          onClick={() => setView("signin")}
          className="text-[#25d366] hover:underline"
        >
          Sign In
        </button>
      </p>
    </div>
  );
};

export default SignUp;
