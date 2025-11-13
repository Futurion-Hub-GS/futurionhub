import { useState } from "react";
import LoginPage from "./routes/LoginPage";


function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="min-h-screen">
      {isLogged ? (
        <HomePage onLogout={() => setIsLogged(false)} />
      ) : (
        <LoginPage onLoginSuccess={() => setIsLogged(true)} />
      )}
    </div>
  );
}

export default App;
