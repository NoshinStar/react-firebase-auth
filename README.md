ID: C243417
# React Routing and Firebase Authentication

A small React app with many pages, a navbar, Firebase login, and protected routes.

Course: Tools & Technologies for Internet Programming

## Features

- Register with email and password
- Login and logout with Firebase Authentication
- Protected pages (Dashboard and Profile) that only logged-in users can open
- Logged-out users are sent to the Login page
- User stays logged in after page refresh
- Navbar changes based on login status

## Tech Used

- React (Vite)
- React Router
- Firebase Authentication
- Tailwind CSS

## Pages

| Page | Route | Access |
|---|---|---|
| Home | `/` | Public |
| Login | `/login` | Public |
| Register | `/register` | Public |
| Dashboard | `/dashboard` | Protected |
| Profile | `/profile` | Protected |

## Project Structure

```
src/
  components/
    AuthLayout.jsx
    Navbar.jsx
    ProtectedRoute.jsx
  context/
    AuthContext.jsx
  pages/
    Home.jsx
    Login.jsx
    Register.jsx
    Dashboard.jsx
    Profile.jsx
  App.jsx
  firebase.js
  index.css
  main.jsx
```

## How to Run

1. Clone the repo and open the folder:

   ```bash
   git clone https://github.com/NoshinStar/react-firebase-auth.git
   cd react-firebase-auth
   ```

2. Install the packages:

   ```bash
   npm install
   ```

3. Set up Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com) and create a project.
   - Open **Authentication > Sign-in method** and turn on **Email/Password**.
   - Add a web app in **Project settings** and copy the config.

4. Create a `.env` file in the project root and paste your Firebase values:

   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

   The `.env` file is not on GitHub, so you must create it yourself.

5. Start the app:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in the browser.

## How It Works

- **Routing:** `BrowserRouter` is in `main.jsx`. Each `Route` in `App.jsx` connects a URL to a page. `Link` changes pages without reloading, and `useNavigate` moves the user from code.
- **Authentication:** `firebase.js` connects the app to Firebase. The app uses `createUserWithEmailAndPassword` to register, `signInWithEmailAndPassword` to log in, and `signOut` to log out.
- **Auth state:** `AuthContext` keeps the current user. `onAuthStateChanged` listens to Firebase and updates the user when someone logs in or out.
- **Stay logged in:** Firebase saves the login in the browser. A `loading` state makes the app wait for Firebase before showing pages, so the user is not sent to Login by mistake after a refresh.
- **Protected routes:** `ProtectedRoute` shows the page if there is a user. If not, it sends the user to `/login` with `<Navigate to="/login" replace />`.

## Notes

- The Firebase keys are in `.env` and `.gitignore` keeps that file out of GitHub.
- ESLint shows one `react-refresh` error in `AuthContext.jsx` because the file exports both the provider and the `useAuth` hook. The app works fine.