import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LogIn = () => {
  const { signInUser, setUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";
  const from = location.state?.from?.pathname || "/";
  const handleLogIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Allah", email, password);

    // signInUser(email, password)
    //   .then(result => {
    //     const user = result.user;
    //     setUser(user);
    //     console.log(user);
    //     const lastSignInTime = result?.user?.metadata?.lastSignInTime;
    //     const logInInfo = { email, lastSignInTime };

    //     return fetch(`http://localhost:5000/users/`, {
    //       method: 'PATCH',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(logInInfo),
    //     });
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log("Sign-in info:", data);

    //     // Show SweetAlert notification
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Login Successful!',
    //       text: 'Welcome back! Redirecting you to the dashboard.',
    //       timer: 2000, // Optional: Auto close after 2 seconds
    //       timerProgressBar: true,
    //       showConfirmButton: false,
    //     });

    //     // Redirect after SweetAlert
    //     setTimeout(() => {
    //       navigate(from, { replace: true });
    //     }, 2000); // Delay redirection to allow SweetAlert to show
    //   })
    //   .catch(error => {
    //     console.error(`Error: ${error.message}`);
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Login Failed!',
    //       text: `Error: ${error.message}`,
    //     });
    //   });
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
    console.error(`Error: ${error.message}`);
    Swal.fire({
      icon: 'error',
      title: 'Login Failed!',
      text: `Error: ${error.message}`,
    });
  });



  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-gray-900 bg-center"
      style={{
        backgroundImage: `url('https://via.placeholder.com/1920x1080')`, // Replace with your preferred background image
      }}
    >
      <div className="bg-white bg-opacity-90 shadow-md rounded-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Log In
        </h2>
        <form onSubmit={handleLogIn}>


          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email" name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-100"
            />
          </div>


          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password" name="password"
              placeholder="Your Password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Log In
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/register" className="text-red-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;