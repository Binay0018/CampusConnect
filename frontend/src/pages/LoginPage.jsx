import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useThemeClass } from "../hooks/useThemeClass";

function LoginPage() {
  const { role } = useParams();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const pageClass = useThemeClass("bg-gray-100 text-gray-900", "bg-gray-800 text-white");
  const formClass = useThemeClass("bg-white text-gray-900", "bg-gray-700 text-white");
  const inputClass = useThemeClass("bg-white text-gray-900 border-gray-300", "bg-gray-600 text-white border-gray-500");
  const buttonClass = useThemeClass("bg-blue-600 text-white hover:bg-blue-700", "bg-blue-500 text-white hover:bg-blue-600");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(role);
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className={`${pageClass} min-h-screen flex flex-col items-center justify-center transition-colors`}>
      <h1 className="text-3xl font-bold mb-6">Login as {role.toUpperCase()}</h1>

      <form
        onSubmit={handleSubmit}
        className={`${formClass} p-6 rounded-lg shadow-lg w-80 transition-colors`}
      >
        <input
          type="email"
          placeholder="Email"
          className={`${inputClass} w-full mb-4 p-2 rounded transition-colors`}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={`${inputClass} w-full mb-4 p-2 rounded transition-colors`}
          required
        />
        <button className={`${buttonClass} w-full p-2 rounded transition-colors`}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
