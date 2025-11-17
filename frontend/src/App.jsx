import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import LoginPage from "./routes/LoginPage";
import HomePage from "./routes/Home";
import TrilhasPage from "./routes/Trilhas";
import BemEstarPage from "./routes/BemEstar";
import PerfilPage from "./routes/Perfil";
import Profissionais from "./routes/Profissionais";

import Footer from "./components/Footer";

export default function App() {
  const [usuario, setUsuario] = useState(null); // <-- AGORA É O USUÁRIO COMPLETO

  const [trilhas, setTrilhas] = useState([
    { nome: "React Avançado", progresso: 75 },
    { nome: "TypeScript Mastery", progresso: 50 },
    { nome: "Node.js Backend", progresso: 30 },
  ]);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">

        <div className="flex-1">
          <RoutedPages
            usuario={usuario}
            setUsuario={setUsuario}
            trilhas={trilhas}
            setTrilhas={setTrilhas}
          />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

/* ------------------------------
    TODAS AS ROTAS DO SISTEMA
-------------------------------- */
function RoutedPages({ usuario, setUsuario, trilhas, setTrilhas }) {
  const navigate = useNavigate();

  const onNavigate = (nome) => {
    const rota = nome.toLowerCase().replace("é", "e").replace(" ", "-");
    navigate("/" + rota);
  };

  const onLogout = () => {
    setUsuario(null);
    navigate("/");
  };

  return (
    <Routes>

      {/* LOGIN */}
      <Route
        path="/"
        element={
          usuario ? (
            <Navigate to="/home" />
          ) : (
            <LoginPage onLoginSuccess={(user) => setUsuario(user)} />
          )
        }
      />

      {/* HOME */}
      <Route
        path="/home"
        element={
          usuario ? (
            <HomePage
              trilhas={trilhas}
              username={usuario.nome}
              onNavigate={onNavigate}
              onLogout={onLogout}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      {/* TRILHAS */}
      <Route
        path="/trilhas"
        element={
          usuario ? (
            <TrilhasPage
              trilhas={trilhas}
              setTrilhas={setTrilhas}
              username={usuario.nome}
              onNavigate={onNavigate}
              onLogout={onLogout}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      {/* BEM ESTAR */}
      <Route
        path="/bem-estar"
        element={
          usuario ? (
            <BemEstarPage
              username={usuario.nome}
              onNavigate={onNavigate}
              onLogout={onLogout}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      {/* PERFIL */}
      <Route
        path="/perfil"
        element={
          usuario ? (
            <PerfilPage
              trilhas={trilhas}
              username={usuario.nome}
              onNavigate={onNavigate}
              onLogout={onLogout}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      {/* PROFISSIONAIS */}
      <Route
        path="/profissionais"
        element={
          usuario ? (
            <Profissionais
              username={usuario.nome}
              onNavigate={onNavigate}
              onLogout={onLogout}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      {/* ROTA PADRÃO */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
