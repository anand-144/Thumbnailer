import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";


const Login = () => {
  const [state, setState] = useState("login"); // login | register
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  /* Restore remembered email ONLY for login */
  useEffect(() => {
    if (state === "login") {
      const savedEmail = localStorage.getItem("rememberedEmail");
      setFormData({
        name: "",
        email: savedEmail || "",
        password: "",
      });
      setRememberMe(!!savedEmail);
    } else {
      setFormData({ name: "", email: "", password: "" });
      setRememberMe(false);
    }
    setShowPassword(false);
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (state === "register" && !formData.name.trim()) {
      alert("Name is required");
      return;
    }

    if (!formData.email || !formData.password) {
      alert("Email & Password are required");
      return;
    }

    setLoading(true);

    // LOGIN
    if (state === "login") {
      const loginPayload = {
        email: formData.email,
        password: formData.password,
        rememberMe,
      };

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", formData.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      setTimeout(() => {
        console.log("LOGIN PAYLOAD:", loginPayload);
        setLoading(false);
      }, 1500);
    }

    // REGISTER
    if (state === "register") {
      const registerPayload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      setTimeout(() => {
        console.log("REGISTER PAYLOAD:", registerPayload);
        setLoading(false);
      }, 1500);
    }
  };

  const handleGoogleAuth = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      console.log("GOOGLE AUTH MODE:", state);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-red-500/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-10 text-center shadow-xl"
      >
        <h1 className="text-white text-3xl font-semibold">
          {state === "login" ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          {state === "login"
            ? "Login to continue"
            : "Sign up to get started"}
        </p>

        {/* Name */}
        {state === "register" && (
          <div className="mt-6 flex items-center h-12 rounded-full bg-white/5 ring-1 ring-white/10 focus-within:ring-rose-500/60 px-5">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent text-rose-500 font-medium placeholder-white/60 outline-none"
            />
          </div>
        )}

        {/* Email */}
        <div className="mt-4 flex items-center h-12 rounded-full bg-white/5 ring-1 ring-white/10 focus-within:ring-rose-500/60 px-5">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent text-rose-600 font-medium placeholder-white/60 outline-none"
          />
        </div>

        {/* Password */}
        <div className="mt-4 flex items-center h-12 rounded-full bg-white/5 ring-1 ring-white/10 focus-within:ring-rose-500/60 px-5">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-transparent text-rose-600 font-medium placeholder-white/60 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="ml-2 text-rose-500 hover:text-rose-300 transition"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Remember + Forgot */}
        {state === "login" && (
          <div className="mt-4 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-rose-500"
              />
              Remember me
            </label>

            <button type="button" className="text-rose-500 hover:underline">
              Forgot password?
            </button>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`mt-6 w-full h-11 rounded-full text-white font-medium flex items-center justify-center transition
            ${
              loading
                ? "bg-rose-400 cursor-not-allowed"
                : "bg-rose-600 hover:bg-red-500"
            }`}
        >
          {loading ? "Processing..." : state === "login" ? "Login" : "Create account"}
        </button>

        {/* Google */}
        <button
          type="button"
          onClick={handleGoogleAuth}
          disabled={loading}
          className="mt-6 w-full h-11 rounded-full bg-white text-gray-800 font-medium hover:bg-gray-100 transition disabled:opacity-60"
        >
          {state === "login" ? "Continue with Google" : "Sign up with Google"}
        </button>

        {/* Toggle */}
        <p
          onClick={() => !loading && setState(state === "login" ? "register" : "login")}
          className="mt-6 text-sm text-gray-400 cursor-pointer"
        >
          {state === "login"
            ? "Don’t have an account?"
            : "Already have an account?"}
          <span className="ml-1 text-rose-400 hover:underline">
            {state === "login" ? "Sign up" : "Login"}
          </span>
        </p>
      </form>  
    </section>
  );
};

export default Login;
