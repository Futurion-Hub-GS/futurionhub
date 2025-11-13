import { useState } from "react";
import { Home, Layers, Smile, User, LogOut } from "lucide-react";


export default function TrilhasPage({ trilhas, setTrilhas, onNavigate, onLogout }) {
  const [active, setActive] = useState("Trilhas");


  const menuItems = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "Trilhas", icon: <Layers size={18} /> },
    { name: "Bem-estar", icon: <Smile size={18} /> },
    { name: "Perfil", icon: <User size={18} /> },
  ];


  const iniciarTrilha = (index) => {
    const novas = [...trilhas];
    novas[index].progresso = 10;
    setTrilhas(novas);
  };


  const atualizarProgresso = (index, novoValor) => {
    const valor = Math.min(Math.max(Number(novoValor), 0), 100);
    const novas = [...trilhas];
    novas[index].progresso = valor;
    setTrilhas(novas);
  };


  return (
    <div className="flex h-screen bg-gray-100">
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
                onClick={() => {
                  setActive(item.name);
                  onNavigate(item.name);
                }}
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


        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-gray-600 text-sm font-medium px-4 py-3 border-t hover:bg-red-50 hover:text-red-600 transition-all"
        >
          <LogOut size={18} /> Sair
        </button>
      </aside>


      <main className="flex-1 flex flex-col">
        <header className="bg-blue-700 text-white py-4 flex justify-center items-center font-semibold text-lg shadow">
          <h1>Trilhas Personalizadas</h1>
        </header>


        <div className="flex-1 p-8 space-y-4">
          {trilhas.map((trilha, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-xl p-6 flex flex-col space-y-3"
            >
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>{trilha.nome}</span>
                <span>{trilha.progresso}%</span>
              </div>


              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className="bg-blue-700 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${trilha.progresso}%` }}
                ></div>
              </div>


              <div className="flex gap-3 mt-2">
                {trilha.progresso === 0 ? (
                  <button
                    onClick={() => iniciarTrilha(index)}
                    className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-md transition-all"
                  >
                    Iniciar
                  </button>
                ) : (
                  <>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-md transition-all">
                      Continuar
                    </button>
                    <AtualizarProgresso
                      trilha={trilha}
                      onUpdate={(valor) => atualizarProgresso(index, valor)}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


function AtualizarProgresso({ trilha, onUpdate }) {
  const [editando, setEditando] = useState(false);
  const [novoValor, setNovoValor] = useState(trilha.progresso);


  const handleUpdate = () => {
    onUpdate(novoValor);
    setEditando(false);
  };


  return (
    <div>
      {editando ? (
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={novoValor}
            onChange={(e) => setNovoValor(e.target.value)}
            min="0"
            max="100"
            className="border border-gray-300 rounded-md px-2 py-1 w-20 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-medium px-3 py-1 rounded-md"
          >
            Salvar
          </button>
          <button
            onClick={() => setEditando(false)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs font-medium px-3 py-1 rounded-md"
          >
            Cancelar
          </button>
        </div>
      ) : (
        <button
          onClick={() => setEditando(true)}
          className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-md transition-all"
        >
          Atualizar
        </button>
      )}
    </div>
  );
}
