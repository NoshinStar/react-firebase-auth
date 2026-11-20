import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../AuthContext";
import AuthLayout from "../AuthLayout";

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <AuthLayout heading="Your Profile" sideText="Manage your account">
      <p className="mt-4 text-gray-500">Email:</p>
      <p className="font-semibold text-indigo-700">{user.email}</p>
      <button
        onClick={handleLogout}
        className="mt-8 w-full rounded-lg bg-indigo-600 py-2.5 font-semibold text-white hover:bg-indigo-700"
      >
        Logout
      </button>
    </AuthLayout>
  );
}