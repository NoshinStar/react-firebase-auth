import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import AuthLayout from "../components/AuthLayout";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout heading="Create your account">
      <form onSubmit={handleRegister} className="mt-6 space-y-6">
        <div>
          <label className="text-sm text-gray-500">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border-b border-gray-300 py-2 outline-none focus:border-indigo-600"
          />
        </div>
        <div>
          <label className="text-sm text-gray-500">
            Password (min 6 chars)
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border-b border-gray-300 py-2 outline-none focus:border-indigo-600"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 py-2.5 font-semibold text-white hover:bg-indigo-700"
        >
          Register
        </button>
        <p className="text-center text-sm">
          <Link to="/login" className="text-indigo-600 hover:underline">
            Already have an account? Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
