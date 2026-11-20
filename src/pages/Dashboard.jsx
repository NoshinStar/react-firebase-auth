import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/AuthLayout";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <AuthLayout
      heading="Welcome to Dashboard"
      sideText="Your personal dashboard"
    >
      <p className="mt-4 text-gray-500">Logged in as:</p>
      <p className="font-semibold text-indigo-700">{user.email}</p>
    </AuthLayout>
  );
}
