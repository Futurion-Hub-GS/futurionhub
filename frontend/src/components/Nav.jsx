import { Home, Layers, Smile, User, LogOut, Users, Moon, Sun } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import futurionHub from "../assets/futurionhub_logo.png";

export default function Nav({
  title,
  username,
  onNavigate,
  onLogout,
  children,
}) {
  const location = useLocation();
  const current = location.pathname.replace("/", "");

  // --- DARK MODE ---
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);
    localStorage.setItem("darkMode", newValue);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // --- MENU ---
  const menuItems = [
    { name: "Home", icon: <Home size={18} />, route: "home" },
    { name: "Trilhas", icon: <Layers size={18} />, route: "trilhas" },
    { name: "Bem-estar", icon: <Smile size={18} />, route: "bem-estar" },
    { name: "Profissionais", icon: <Users size={18} />, route: "profissionais" },

    {
      name: (
        <span className="truncate overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px]">
          {username}
        </span>
      ),
      icon: <User size={18} className="flex-shrink-0" />,
      route: "perfil",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* SIDEBAR */}
      <aside className="w-56 bg-blue-900 dark:bg-blue-950 flex flex-col justify-between text-white min-h-screen">
        <div>
          <div className="flex items-center justify-center p-4 border-b border-blue-700 dark:border-blue-800">
            <img
              src={futurionHub}
              alt="Logo"
              className="h-16 flex"
            />
          </div>

          <nav className="mt-4 space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => onNavigate(item.route)}
                className={`flex items-center gap-3 w-full px-5 py-2 text-sm font-medium transition-all ${
                  current === item.route
                    ? "bg-white text-blue-900 rounded-l-full dark:bg-gray-200"
                    : "hover:bg-blue-800 dark:hover:bg-blue-900"
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

      {/* CONTEÚDO */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="bg-blue-900 dark:bg-blue-950 text-white py-3 px-6 flex justify-between items-center transition-colors">
          <h1 className="text-lg font-semibold">{title}</h1>

          {/* DARK MODE + EMAIL */}
          <div className="flex items-center gap-4 max-w-[220px]">

            {/* BOTÃO DARK MODE */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-blue-800 dark:hover:bg-blue-900 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* EMAIL */}
            <div className="flex items-center gap-2 max-w-[150px]">
              <User size={20} className="flex-shrink-0" />

              <span className="truncate overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                {username}
              </span>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1 bg-gray-50 dark:bg-gray-900 p-10 flex flex-col items-center transition-colors">
          {children}
        </main>
      </div>
    </div>
  );
}
