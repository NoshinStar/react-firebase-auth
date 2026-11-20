export default function AuthLayout({
  heading,
  sideText = "Login your Account to get full User Experience",
  children,
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
        <div className="hidden w-1/2 flex-col items-center justify-center bg-indigo-500 p-10 text-white md:flex">
          <div className="flex h-44 w-44 items-center justify-center rounded-full bg-indigo-900">
            <div className="h-16 w-16 rounded-full bg-yellow-400" />
          </div>
          <p className="mt-8 text-center text-sm">{sideText}</p>
        </div>
        <div className="w-full bg-white p-10 md:w-1/2">
          <h1 className="text-2xl font-bold text-indigo-900">
            Hello!
            <br />
            Good Morning
          </h1>
          <h2 className="mt-8 text-lg text-gray-700">{heading}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}
