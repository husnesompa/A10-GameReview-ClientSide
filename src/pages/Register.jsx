import { useContext } from "react";
import { AuthContext } from '../Providers/AuthProvider';
// import { toast } from "react-toastify";


const Register = () => {
  const { createNewUser } = useContext(AuthContext);

  const handleRegister = e => {
    
    e.preventDefault();

    const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log("Allah", name, email, photo, password);
        createNewUser(email, password)
            .then(result => {
                // const user = result.user;
                // setUser(user);
                // e.target.reset();
                // navigate("/");
                console.log(result.user);
                const createAt = result?.user?.metadata?.creationTime;
                const newUser = {name, email, createAt};
                //save new user info to the Database 
                fetch('http://localhost:5000/users',{
                  method: 'POST',
                  headers: {
                    'content-type':'application/json'
                  },
                  body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data =>{
                  console.log('user created to db', data);
                })
            })
            .catch((error) => {
                // toast.error(`Error: ${error.message}`);
                console.log(`Error: ${error.message}`);
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
          Register
        </h2>
        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name" name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-100"
            />
          </div>

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

          {/* Photo URL */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo URL
            </label>
            <input
              type="text" name="photo"
              placeholder="Photo URL"
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
