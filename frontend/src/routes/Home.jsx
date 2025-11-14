import NavLayout from "../components/Nav"

export default function HomePage({ trilhas, onNavigate, onLogout }) {
  const mediaProgresso =
    trilhas.length > 0
      ? trilhas.reduce((acc, t) => acc + t.progresso, 0) / trilhas.length
      : 0;

  return (
    <NavLayout
      title="FUTURION HUB"
      username="Bem-vindo, Aprendiz!"
      active="Home"
      onNavigate={onNavigate}
      onLogout={onLogout}
    >
      <div className="bg-white rounded-2xl shadow-md w-full max-w-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Bem-vindo, Aprendiz!
        </h2>
        <p className="text-gray-600 mb-6">
          Aqui você encontrará trilhas de aprendizado personalizadas e recursos
          para seu desenvolvimento profissional.
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
    </NavLayout>
  );
}
