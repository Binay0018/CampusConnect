import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import ThemeToggle from "./ThemeToggle";
import { useThemeClass } from "../hooks/useThemeClass";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navClass = useThemeClass("bg-blue-600 text-white", "bg-gray-900 text-white");

  return (
    <nav className={`${navClass} p-4 flex justify-between items-center shadow-md transition-colors`}>
      <h1 className="font-bold text-lg">Campus Connect</h1>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        {user ? (
          <div className="flex items-center gap-4">
            <span>Welcome {user.name} ({user.role})</span>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
