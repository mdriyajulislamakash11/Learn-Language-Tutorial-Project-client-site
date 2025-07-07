import { useContext, useState } from 'react';
import { signInWithEmailAndPassword, } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvaide';


const Login = () => {
  const [error, setError] = useState("");
  const {logInUser} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser( email, password)
      .then(result => {
        console.log(result.user);
        setError("");
        navigate("/"); // redirect after login
      })
      .catch(err => {
        console.error(err.message);
        setError("Invalid email or password");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

          <p className="text-sm text-center mt-4">
          Don't have an account?
          <a href="/register" className="text-blue-500 hover:underline ml-1">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
