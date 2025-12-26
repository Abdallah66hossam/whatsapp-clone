import { MessageCircle } from "lucide-react";

const Welcome = ({ setView }: { setView: (view: string) => void }) => {
  return (
    <div className="w-md mx-auto">
      <div className="flex justify-center mb-8">
        <div className="w-20 h-20 bg-[#25d366] rounded-full flex items-center justify-center">
          <MessageCircle size={40} className="text-white" />
        </div>
      </div>
      <h1 className="text-white text-3xl font-light text-center mb-2">
        WhatsApp
      </h1>
      <p className="text-gray-400 text-center mb-12 px-8">
        Simple. Secure. Reliable messaging.
      </p>

      <div className="space-y-4">
        <button
          onClick={() => setView("signin")}
          className="w-full bg-[#25d366] text-white py-3 rounded-full font-medium hover:bg-[#20bd5a] transition-colors"
        >
          Sign In
        </button>
        <button
          onClick={() => setView("signup")}
          className="w-full bg-transparent border-2 border-[#25d366] text-[#25d366] py-3 rounded-full font-medium hover:bg-[#25d366] hover:text-white transition-colors"
        >
          Create Account
        </button>
      </div>

      <p className="text-gray-500 text-xs text-center mt-12 px-8">
        By continuing, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  );
};

export default Welcome;
