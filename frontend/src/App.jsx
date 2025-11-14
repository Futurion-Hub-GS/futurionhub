import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./routes/LoginPage";
import HomePage from "./routes/Home";
import TrilhasPage from "./routes/Trilhas";
import BemEstarPage from "./routes/BemEstar";
import PerfilPage from "./routes/Perfil"

export default function App() {
  const [trilhas, setTrilhas] = useState([
    { nome: "Trilha 1", progresso: 0 },
    { nome: "Trilha 2", progresso: 50 },
  ]);

  const [logado, setLogado] = useState(false);

  return (
    <BrowserRouter>
      <MainRoutes
        trilhas={trilhas}
        setTrilhas={setTrilhas}
        logado={logado}
        setLogado={setLogado}
      />
    </BrowserRouter>
  );
}

function MainRoutes({ trilhas, setTrilhas, logado, setLogado }) {
  const navigate = useNavigate();

  const onNavigate = (rota) => {
    navigate("/" + rota);
  };

  const onLogout = () => {
    setLogado(false);
    navigate("/");
  };

  const onLoginSuccess = () => {
    setLogado(true);
    navigate("/home");
  };

  return (
    <Routes>
      {/* LOGIN COMO PRIMEIRA PÁGINA */}
      <Route path="/" element={<LoginPage onLoginSuccess={onLoginSuccess} />} />

      {/* ROTAS PROTEGIDAS */}
      {logado && (
        <>
          <Route
            path="/home"
            element={
              <HomePage
                trilhas={trilhas}
                onNavigate={onNavigate}
                onLogout={onLogout}
              />
            }
          />

          <Route
            path="/trilhas"
            element={
              <TrilhasPage
                trilhas={trilhas}
                setTrilhas={setTrilhas}
                onNavigate={onNavigate}
                onLogout={onLogout}
              />
            }
          />

          <Route
            path="/bem-estar"
            element={<BemEstarPage onNavigate={onNavigate} onLogout={onLogout} />}
          />

          <Route
            path="/perfil"
            element={<PerfilPage onNavigate={onNavigate} onLogout={onLogout} />}
          />
        </>
      )}

      {/* fallback */}
      <Route
        path="*"
        element={
          logado ? (
            <HomePage
              trilhas={trilhas}
              onNavigate={onNavigate}
              onLogout={onLogout}
            />
          ) : (
            <LoginPage onLoginSuccess={onLoginSuccess} />
          )
        }
      />
    </Routes>
  );
}
