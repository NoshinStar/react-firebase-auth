import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="flex h-16 items-center gap-6 px-8 text-white">
      <Link to="/" className="font-bold">
        MyApp
      </Link>
      <Link to="/" className="hover:underline">
        Home
      </Link>
      {user ? (
        <>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="ml-auto rounded-lg bg-white px-4 py-1.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="ml-auto hover:underline">
            Login
          </Link>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </>
      )}
    </nav>
  );
}
