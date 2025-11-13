import { Home, Layers, Smile, User, LogOut } from "lucide-react";


export default function HomePage({ trilhas, onNavigate, onLogout }) {
  // Calcula a média do progresso das trilhas
  const mediaProgresso =
    trilhas.length > 0
      ? trilhas.reduce((acc, t) => acc + t.progresso, 0) / trilhas.length
      : 0;


  const menuItems = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "Trilhas", icon: <Layers size={18} /> },
    { name: "Bem-estar", icon: <Smile size={18} /> },
    { name: "Perfil", icon: <User size={18} /> },
  ];


  return (
    <div className="flex h-screen">
      {/* MENU LATERAL */}
      <aside className="w-56 bg-blue-900 flex flex-col justify-between text-white">
        <div>
          <div className="flex items-center justify-center p-4 border-b border-blue-700">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"
              alt="Logo"
              className="h-8"
            />
          </div>


          <nav className="mt-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.name)}
                className={`flex items-center gap-3 w-full px-5 py-2 text-sm font-medium transition-all ${
                  item.name === "Home"
                    ? "bg-white text-blue-900 rounded-l-full"
                    : "hover:bg-blue-800"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>
        </div>


        {/* BOTÃO SAIR */}
        <button
          onClick={onLogout}
          className="flex items-center justify-center gap-2 text-white text-sm font-medium px-4 py-3 border-t border-blue-800 hover:bg-red-600 transition-all"
        >
          <LogOut size={18} /> Sair
        </button>
      </aside>


      {/* CONTEÚDO PRINCIPAL */}
      <div className="flex-1 flex flex-col">
        {/* CABEÇALHO SUPERIOR */}
        <header className="bg-blue-900 text-white py-3 px-6 flex justify-between items-center">
          <h1 className="text-lg font-semibold">FUTURION HUB</h1>
          <span>Bem-vindo, Aprendiz!</span>
        </header>


        {/* ÁREA CENTRAL */}
        <main className="flex-1 bg-gray-50 flex flex-col items-center justify-center p-10">
          <div className="bg-white rounded-2xl shadow-md w-full max-w-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Bem-vindo, Aprendiz!
            </h2>
            <p className="text-gray-600 mb-6">
              Aqui você encontrará trilhas de aprendizado personalizadas e
              recursos para seu desenvolvimento profissional.
            </p>


            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Progresso Geral das Trilhas
              </h3>


              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Média de progresso</span>
                <span>{mediaProgresso.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className="bg-blue-700 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${mediaProgresso}%` }}
                ></div>
              </div>
            </div>
          </div>


          {/* BOTÕES INFERIORES */}
          <div className="flex gap-6 mt-10">
            <button
              onClick={() => onNavigate("Trilhas")}
              className="bg-blue-900 text-white px-8 py-4 rounded-xl shadow hover:bg-blue-800 transition-all"
            >
              Trilhas
            </button>
            <button
              onClick={() => onNavigate("Bem-estar")}
              className="bg-blue-900 text-white px-8 py-4 rounded-xl shadow hover:bg-blue-800 transition-all"
            >
              Bem-estar
            </button>
            <button
              onClick={() => onNavigate("Perfil")}
              className="bg-blue-900 text-white px-8 py-4 rounded-xl shadow hover:bg-blue-800 transition-all"
            >
              Painel
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
