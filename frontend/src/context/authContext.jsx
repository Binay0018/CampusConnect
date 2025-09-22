import { createContext, useState } from "react";

// Create Context
export const AuthContext = createContext();

// AuthProvider wraps the whole app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { id, name, role }

  // Fake login function
  const login = (role) => {
    const fakeUser = { id: Date.now(), name: role, role: role };
    setUser(fakeUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
