import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import LoginPage from "./routes/LoginPage"
import HomePage from "./routes/Home";
import TrilhasPage from "./routes/Trilhas";
import BemEstarPage from "./routes/BemEstar";
import PerfilPage from "./routes/Perfil";

export default function App() {
  const [logado, setLogado] = useState(false);
  const [usuarioEmail, setUsuarioEmail] = useState("");
  // const [logado, setLogado] = useState(false);

  const [trilhas, setTrilhas] = useState([
    { nome: "React Avançado", progresso: 75 },
    { nome: "TypeScript Mastery", progresso: 50 },
    { nome: "Node.js Backend", progresso: 30 },
  ]);

  return (
    <BrowserRouter>
      <RoutedPages
        logado={logado}
        setLogado={setLogado}
        trilhas={trilhas}
        setTrilhas={setTrilhas}
      />
    </BrowserRouter>
  );
}

function RoutedPages({ logado, setLogado, trilhas, setTrilhas }) {
  const navigate = useNavigate();

  const onNavigate = (nome) => {
    const rota = nome.toLowerCase().replace("é", "e").replace(" ", "-");
    navigate("/" + rota);
  };

  const onLogout = () => {
    setLogado(false);
    navigate("/");
  };

  return (
    <Routes>
      {/* LOGIN */}
      <Route
        path="/"
        element={
          logado ? (
            <Navigate to="/home" />
          ) : (
            <LoginPage onLoginSuccess={() => setLogado(true)} />
             
          )
        }
      />

      {/* HOME */}
      <Route
        path="/home"
        element={
          logado ? (
            <HomePage
              trilhas={trilhas}
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
          logado ? (
            <TrilhasPage
              trilhas={trilhas}
              setTrilhas={setTrilhas}
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
          logado ? (
            <BemEstarPage
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
          logado ? (
            <PerfilPage
              trilhas={trilhas}
              onNavigate={onNavigate}
              onLogout={onLogout}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      {/* ROTA DESCONHECIDA */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
