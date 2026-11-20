import AuthLayout from "../components/AuthLayout";

export default function Home() {
  return (
    <AuthLayout heading="Welcome to Home Page" sideText="Explore the app">
      <p className="mt-4 text-gray-500">This is the public home page.</p>
    </AuthLayout>
  );
}
