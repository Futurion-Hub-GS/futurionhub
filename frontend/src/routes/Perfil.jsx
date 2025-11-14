import NavLayout from "../components/Nav";

export default function PerfilPage({ trilhas, onNavigate, onLogout, username }) {

  // -------------------------
  // 1. Dados do gráfico
  // -------------------------
  const colaboradoresPorMes = [50, 70, 60, 40, 28];

  const totalColaboradores = colaboradoresPorMes.reduce((a, b) => a + b, 0);

  // -------------------------
  // 2. Trilhas
  // -------------------------
  const totalTrilhas = trilhas.length;

  const trilhasCompletas = trilhas.filter(t => t.progresso === 100).length;

  const taxaConclusao =
    totalTrilhas > 0
      ? Math.round((trilhasCompletas / totalTrilhas) * 100)
      : 0;

  return (
    <NavLayout
      title="Painel Corporativo"
      username={username}          
      active="Perfil"
      onNavigate={onNavigate}
      onLogout={onLogout}
    >
      <div className="w-full max-w-6xl flex flex-col gap-6">

        {/* ----------- CARDS SUPERIORES ----------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-sm text-gray-500 mb-1">Colaboradores Ativos</h3>
            <p className="text-3xl font-bold text-gray-800">{totalColaboradores}</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-sm text-gray-500 mb-1">Trilhas Ativas</h3>
            <p className="text-3xl font-bold text-gray-800">{totalTrilhas}</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-sm text-gray-500 mb-1">Taxa de Conclusão</h3>
            <p className="text-3xl font-bold text-gray-800">{taxaConclusao}%</p>
          </div>

        </div>

        <div className="bg-white shadow rounded-xl p-6 min-h-[280px]">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">
            Colaboradores Ativos por Mês
          </h3>

          <div className="w-full h-[450px] flex items-end justify-between px-6 text-gray-400">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
          </div>
        </div>

        <button className="bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition-all">
          Gerar Relatório
        </button>

      </div>
    </NavLayout>
  );
}
