import { useContext } from "react";
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const photo = e.target.photo.value.trim();
    const password = e.target.password.value.trim();

    // Password Validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    // Proceed with user creation
    createNewUser(email, password)
      .then((result) => {
        // console.log(result.user);
        const createAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, photo, createAt };

        // Save new user info to the Database
        fetch('https://a10-assignment-game-review-application-server-side.vercel.app/users', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log('User saved to DB:', data);
            toast.success("Registration successful!");
            navigate('/login');
          });
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
        console.error(`Error: ${error.message}`);
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-gray-900 bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/medium-shot-robot-kid-hugging_23-2150900513.jpg?t=st=1737903683~exp=1737907283~hmac=996dfb6d2a77388a7687b1070a854aa3736dc73235702a79e8616eb2374aa2bf&w=740')`,
      }}
    >
      <div className="bg-white bg-opacity-90 shadow-md rounded-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-red-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
