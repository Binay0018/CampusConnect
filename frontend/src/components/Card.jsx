import { useThemeClass } from "../hooks/useThemeClass";

function Card({ title, description, buttonText, onClick }) {
  const cardClass = useThemeClass("bg-white border-gray-200", "bg-gray-700 border-gray-600");

  return (
    <div className={`${cardClass} p-6 rounded-xl shadow-lg border transition-colors`}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <button
        onClick={onClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
