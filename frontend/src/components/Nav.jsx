import { Home, Layers, Smile, User, LogOut } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Nav({
  title,
  username,
  onNavigate,
  onLogout,
  children,
}) {
  const location = useLocation();

  const current = location.pathname.replace("/", "");

  const menuItems = [
    { name: "Home", icon: <Home size={18} />, route: "home" },
    { name: "Trilhas", icon: <Layers size={18} />, route: "trilhas" },
    { name: "Bem-estar", icon: <Smile size={18} />, route: "bem-estar" },
    { name: "Perfil", icon: <User size={18} />, route: "perfil" },
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
                onClick={() => onNavigate(item.route)}
                className={`flex items-center gap-3 w-full px-5 py-2 text-sm font-medium transition-all ${
                  current === item.route
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

        <button
          onClick={onLogout}
          className="flex items-center justify-center gap-2 text-white text-sm font-medium px-4 py-3 border-t border-blue-800 hover:bg-red-600 transition-all"
        >
          <LogOut size={18} /> Sair
        </button>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="flex-1 flex flex-col">
        <header className="bg-blue-900 text-white py-3 px-6 flex justify-between items-center">
          <h1 className="text-lg font-semibold">{title}</h1>
          <span>{username}</span>
        </header>

        <main className="flex-1 bg-gray-50 p-10 flex flex-col items-center">
          {children}
        </main>
      </div>
    </div>
  );
}
