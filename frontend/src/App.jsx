import { useState } from "react";
import LoginPage from "./routes/LoginPage";
import HomePage from "./routes/Home";
import TrilhasPage from "./routes/Trilhas";


export default function App() {
  // controla qual tela está visível: "Login" | "Home" | "Trilhas"
  const [page, setPage] = useState("Login");


  // estado global das trilhas (compartilhado entre páginas)
  const [trilhas, setTrilhas] = useState([
    { nome: "React Avançado", progresso: 75 },
    { nome: "TypeScript Mastery", progresso: 50 },
    { nome: "Node.js Backend", progresso: 30 },
  ]);


  const handleLoginSuccess = () => {
    setPage("Home");
  };


  const handleLogout = () => {
    setPage("Login");
  };


  return (
    <>
      {page === "Login" && (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}


      {page === "Home" && (
        <HomePage
          trilhas={trilhas}
          onNavigate={(p) => setPage(p)}
          onLogout={handleLogout}
        />
      )}


      {page === "Trilhas" && (
        <TrilhasPage
          trilhas={trilhas}
          setTrilhas={setTrilhas}
          onNavigate={(p) => setPage(p)}
          onLogout={handleLogout}
        />
      )}
    </>
  );
}
