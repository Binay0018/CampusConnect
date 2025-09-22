import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

function Dashboard() {
  // Get user and theme from Redux state
  const user = useSelector((state) => state.auth.user);
  const theme = useSelector((state) => state.theme.theme);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-bold text-red-600">
          You must be logged in to view the dashboard.
        </h2>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors 
      ${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"}`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Welcome Section */}
      <div className="p-10">
        <h1
          className={`text-3xl font-bold mb-4 ${
            theme === "light" ? "text-gray-900" : "text-gray-100"
          }`}
        >
          Dashboard
        </h1>
        <p
          className={`text-lg mb-6 ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          Welcome, <span className="font-semibold">{user.name}</span>!
        </p>
        <p
          className={`text-md mb-6 ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          Role: {user.role}
        </p>

        {/* Role-Based Sections */}
        {user.role === "student" && (
          <div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                theme === "light" ? "text-gray-900" : "text-gray-100"
              }`}
            >
              Student Panel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className={`p-6 rounded-lg shadow-md transition-colors ${
                  theme === "light"
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">Feed</h3>
                <p>View posts shared by students and faculty.</p>
              </div>
              <div
                className={`p-6 rounded-lg shadow-md transition-colors ${
                  theme === "light"
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">Notes</h3>
                <p>Access study materials uploaded by teachers.</p>
              </div>
              <div
                className={`p-6 rounded-lg shadow-md transition-colors ${
                  theme === "light"
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">Lost & Found</h3>
                <p>Check lost items and report found items.</p>
              </div>
            </div>
          </div>
        )}

        {user.role === "faculty" && (
          <div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                theme === "light" ? "text-gray-900" : "text-gray-100"
              }`}
            >
              Faculty Panel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`p-6 rounded-lg shadow-md transition-colors ${
                  theme === "light"
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">Upload Notes</h3>
                <p>Upload study materials for students.</p>
              </div>
              <div
                className={`p-6 rounded-lg shadow-md transition-colors ${
                  theme === "light"
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">Announcements</h3>
                <p>Share updates or news with students.</p>
              </div>
            </div>
          </div>
        )}

        {user.role === "admin" && (
          <div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                theme === "light" ? "text-gray-900" : "text-gray-100"
              }`}
            >
              Admin Panel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`p-6 rounded-lg shadow-md transition-colors ${
                  theme === "light"
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">Manage Users</h3>
                <p>Add, edit, or delete student and faculty accounts.</p>
              </div>
              <div
                className={`p-6 rounded-lg shadow-md transition-colors ${
                  theme === "light"
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">Manage Content</h3>
                <p>Monitor posts, notes, and alumni submissions.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
