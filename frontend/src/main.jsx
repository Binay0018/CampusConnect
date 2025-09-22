import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import { ThemeProvider } from "./context/themeContext"; // ✅ import the provider
import './index.css';
import { store } from "./Store/Store";
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <AuthProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AuthProvider>
  </Provider>
);
