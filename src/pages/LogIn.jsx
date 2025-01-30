import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LogIn = () => {
  const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";
  const from = location.state?.from?.pathname || "/";
  const handleLogIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Allah", email, password);

    signInUser(email, password)
      .then(result => {
        const user = result.user;
        const lastSignInTime = user?.metadata?.lastSignInTime;
        const logInInfo = { email, lastSignInTime };

        return fetch(`http://localhost:5000/users/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logInInfo),
        }).then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        }).then(data => {
          console.log("Sign-in info:", data);
          setUser(user);
          return user; // Return user for chaining
        });
      })
      .then(user => {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back! Redirecting you to the dashboard.',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch(error => {
        // console.error(`Error: ${error.message}`);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          // text: `Error: ${error.message}`,
          text: 'Email & Password does not match !.',
        });
      });



  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        // console.log(result.user);
        navigate('/');
      })
    // .catch(error => console.log('ERROR', error.message));
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/medium-shot-robot-kid-hugging_23-2150900513.jpg?t=st=1737903683~exp=1737907283~hmac=996dfb6d2a77388a7687b1070a854aa3736dc73235702a79e8616eb2374aa2bf&w=740')`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative bg-white bg-opacity-90 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Log In
        </h2>

        <form onSubmit={handleLogIn} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-200"
            />
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-all"
          >
            Log In
          </button>
        </form>

        {/* Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 mt-4 bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-all"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-700 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-red-600 font-semibold hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>

  );
};

export default LogIn;