import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvaide";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const { logInUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleLogin().then((result) => {
      console.log(result.user);

      Swal.fire({
        title: "Welcome!",
        html: `<b>${result.user.displayName}</b>, you're logged in with Google!`,
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Go to Home",
      });

      navigate("/");
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        navigate("/"); // redirect after login

        // JWT token:
        const user = { email: email };
        axios
          .post(`https://server-mu-ten-68.vercel.app/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((err) => {
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
          <a href="/register" className="text-blue-500 hover:underline ml-1">
            Register here
          </a>
        </p>

        {/* goggle login */}
        <p className="divider"> OR </p>
        <div>
          <button className="btn" onClick={handleGoogle}>
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
