import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function LandingPage() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const features = [
    { title: "Student Feed", description: "Share posts, notes, and check lost & found items.", icon: "📝" },
    { title: "Faculty Panel", description: "Upload notes and announcements for students.", icon: "📚" },
    { title: "Admin Control", description: "Manage users, alumni, posts, and site settings.", icon: "⚙️" },
    { title: "Alumni Section", description: "Connect with past students and network easily.", icon: "🎓" },
    { title: "Notifications", description: "Stay updated with announcements and posts.", icon: "🔔" },
  ];

  return (
    <div className={`min-h-screen transition-colors 
      ${theme === "light" ? "bg-gradient-to-br from-blue-100 to-blue-50 text-gray-900" : "bg-gray-900 text-white"}`}>
      
      {/* Header */}
      <header className="text-center py-16 px-6">
        <h1 className={`text-5xl font-bold mb-4 drop-shadow-lg ${theme === "light" ? "text-blue-800" : "text-blue-300"}`}>
          Campus Connect 🚀
        </h1>
        <p className={`text-xl max-w-xl mx-auto ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
          A platform for students, faculty, and alumni to connect, share, and grow together.
        </p>
      </header>

      {/* Login Cards */}
      <section className="px-6 py-12">
        <h2 className={`text-3xl font-semibold text-center mb-8 ${theme === "light" ? "text-blue-700" : "text-blue-300"}`}>
          Login As
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card title="Student" description="Access feed, notes, and lost & found." buttonText="Login as Student" onClick={() => navigate("/login/student")} />
          <Card title="Faculty" description="Upload notes and announcements." buttonText="Login as Faculty" onClick={() => navigate("/login/faculty")} />
          <Card title="Admin" description="Manage users, posts, and alumni." buttonText="Login as Admin" onClick={() => navigate("/login/admin")} />
        </div>
      </section>

      {/* Features Section */}
      <section className={`px-6 py-16 transition-colors ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"}`}>
        <h2 className={`text-3xl font-bold text-center mb-12 ${theme === "light" ? "text-blue-800" : "text-blue-300"}`}>
          Features of Campus Connect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto text-center">
         {features.map((feature, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-lg hover:scale-105 transform transition
              ${theme === "light" ? "bg-blue-50 text-gray-900" : "bg-gray-700 text-white"}`}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
              {feature.description}
            </p>
          </div>
        ))}

        </div>
      </section>

      {/* Footer */}
      <footer className={`text-center py-8 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
        © 2025 Campus Connect. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
