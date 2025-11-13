import { useState } from "react";
import { Home, Layers, Smile, User, LogOut } from "lucide-react";

export default function HomePage({ onLogout }) {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "Trilhas", icon: <Layers size={18} /> },
    { name: "Bem-estar", icon: <Smile size={18} /> },
    { name: "Perfil", icon: <User size={18} /> },
  ];

  const trilhas = [
    { nome: "Trilha 1", progresso: 0 },
    { nome: "Trilha 2", progresso: 0 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* MENU LATERAL */}
      <aside className="w-56 bg-white border-r flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center p-4 border-b">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"
              alt="Logo"
              className="h-8"
            />
          </div>

          <nav className="mt-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-2 w-full px-4 py-2 text-sm font-medium transition-all ${
                  active === item.name
                    ? "bg-blue-700 text-white rounded-r-full"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Botão SAIR funcional */}
        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-gray-600 text-sm font-medium px-4 py-3 border-t hover:bg-red-50 hover:text-red-600 transition-all"
        >
          <LogOut size={18} /> Sair
        </button>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 flex flex-col">
        {/* TOPO CENTRALIZADO */}
        <header className="bg-blue-700 text-white py-4 flex justify-center items-center font-semibold text-lg shadow">
          <h1>Bem-vindo, Aprendiz!</h1>
        </header>

        {/* CONTEÚDO */}
        <div className="flex-1 p-8 space-y-6">
          {/* Caixa de boas-vindas */}
          <div className="bg-white shadow-sm rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Bem-vindo, Aprendiz!
            </h2>
            <p className="text-gray-600 mt-1">
              Aqui você encontrará trilhas de aprendizado personalizadas e
              recursos para seu desenvolvimento profissional.
            </p>
          </div>

          {/* Progresso nas trilhas */}
          <div className="bg-white shadow-sm rounded-xl p-6">
            <h3 className="text-gray-800 font-semibold mb-4">
              Progresso nas Trilhas
            </h3>
            <div className="space-y-4">
              {trilhas.map((trilha, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium text-gray-700">
                    <span>{trilha.nome}</span>
                    <span>{trilha.progresso}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full mt-1">
                    <div
                      className="bg-blue-700 h-3 rounded-full"
                      style={{ width: `${trilha.progresso}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CARDS DE ACESSO RÁPIDO */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-700 text-white rounded-xl p-6 text-center hover:bg-blue-800 transition-all cursor-pointer">
              <Layers className="mx-auto mb-2" />
              <span className="font-semibold">Trilhas</span>
            </div>

            <div className="bg-blue-700 text-white rounded-xl p-6 text-center hover:bg-blue-800 transition-all cursor-pointer">
              <Smile className="mx-auto mb-2" />
              <span className="font-semibold">Bem-estar</span>
            </div>

            <div className="bg-blue-700 text-white rounded-xl p-6 text-center hover:bg-blue-800 transition-all cursor-pointer">
              <User className="mx-auto mb-2" />
              <span className="font-semibold">Painel</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
