import { useState, useEffect } from "react";
import Nav from "../components/Nav";

export default function BemEstarPage({ username, onNavigate, onLogout }) {
  const [humor, setHumor] = useState(null);
  const [historico, setHistorico] = useState([]);

  const opcoes = [
    { id: "bem", label: "Bem", emoji: "😊" },
    { id: "neutro", label: "Neutro", emoji: "😐" },
    { id: "mal", label: "Mal", emoji: "😞" },
  ];

  // MENSAGENS DINÂMICAS
  const mensagens = {
    bem: "Continue focado, você está indo muito bem! 😀",
    neutro: "Dê uma pausa quando precisar. Você está fazendo o seu melhor. 🙂",
    mal: "Tire um minuto para respirar. Você merece cuidado. 💛",
  };

  // CARREGA O HISTÓRICO AO ABRIR A PÁGINA
  useEffect(() => {
    const salvo = localStorage.getItem("historicoBemEstar");
    if (salvo) {
      setHistorico(JSON.parse(salvo));
    }
  }, []);

  // SALVA O HISTÓRICO SEMPRE QUE ELE MUDA
  useEffect(() => {
    localStorage.setItem("historicoBemEstar", JSON.stringify(historico));
  }, [historico]);

  // REGISTRA O CHECK-IN
  const iniciar = () => {
    if (!humor) return;

    const entrada = {
      humor: humor.label,
      emoji: humor.emoji,
      data: new Date().toLocaleDateString("pt-BR"),
      hora: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setHistorico((prev) => [entrada, ...prev]);
  };

  return (
    <Nav
      title="Check-in de Bem-estar"
      username={username}
      onNavigate={onNavigate}
      onLogout={onLogout}
    >
      <div className="w-full max-w-3xl space-y-8">

        {/* TÍTULO */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Check-in de Bem-estar
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mt-1">
            Como você se sente hoje?
          </p>
        </div>

        {/* OPÇÕES */}
        <div className="flex gap-4 justify-center">
          {opcoes.map((o) => (
            <button
              key={o.id}
              onClick={() => setHumor(o)}
              className={`flex flex-col items-center gap-2 px-8 py-6 rounded-xl border
                transition-all cursor-pointer
                ${
                  humor?.id === o.id
                    ? "bg-blue-100 border-blue-500 dark:bg-blue-900"
                    : "bg-gray-100 border-gray-300 dark:bg-gray-800"
                }
              `}
            >
              <div className="text-4xl">{o.emoji}</div>
              <span className="text-sm font-medium">{o.label}</span>
            </button>
          ))}
        </div>

        {/* BOTÃO INICIAR */}
        <button
          disabled={!humor}
          onClick={iniciar}
          className={`w-full py-3 rounded-lg font-medium transition-all
            ${
              humor
                ? "bg-blue-700 text-white hover:bg-blue-800"
                : "bg-gray-300 dark:bg-gray-700 dark:text-gray-500 text-gray-500 cursor-not-allowed"
            }
          `}
        >
          Iniciar
        </button>

        {/* MENSAGEM DINÂMICA */}
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
          {humor ? mensagens[humor.id] : "Faça uma pequena pausa de 10 minutos."}
        </p>

        {/* HISTÓRICO */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Histórico de Check-ins
          </h2>

          <div className="mt-4 space-y-3">
            {historico.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">
                Seus check-ins aparecerão aqui para ajudar a rastrear seu bem-estar
                ao longo do tempo.
              </p>
            ) : (
              historico.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm"
                >
                  <span className="text-3xl">{item.emoji}</span>

                  <div className="text-right">
                    <p className="font-medium">{item.humor}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.data} — {item.hora}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Nav>
  );
}
