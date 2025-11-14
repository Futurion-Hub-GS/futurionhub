import { useState } from "react";
import NavLayout from "../components/Nav";

export default function TrilhasPage({ trilhas, setTrilhas, onNavigate, onLogout }) {
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
    <NavLayout
      title="Trilhas Personalizadas"
      active="Trilhas"
      onNavigate={onNavigate}
      onLogout={onLogout}
    >
      <div className="flex-1 w-full max-w-3xl space-y-6">

        {trilhas.map((trilha, index) => (
          <div key={index} className="bg-white shadow-sm rounded-xl p-6">
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>{trilha.nome}</span>
              <span>{trilha.progresso}%</span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
              <div
                className="bg-blue-700 h-3 rounded-full transition-all duration-500"
                style={{ width: `${trilha.progresso}%` }}
              ></div>
            </div>

            <div className="flex gap-3 mt-3">
              {trilha.progresso === 0 ? (
                <button
                  onClick={() => iniciarTrilha(index)}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm"
                >
                  Iniciar
                </button>
              ) : (
                <>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm">
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
    </NavLayout>
  );
}

function AtualizarProgresso({ trilha, onUpdate }) {
  const [editando, setEditando] = useState(false);
  const [novoValor, setNovoValor] = useState(trilha.progresso);

  const handleUpdate = () => {
    onUpdate(novoValor);
    setEditando(false);
  };

  return editando ? (
    <div className="flex items-center gap-2">
      <input
        type="number"
        value={novoValor}
        onChange={(e) => setNovoValor(e.target.value)}
        className="border px-2 py-1 rounded w-20 text-sm"
      />
      <button onClick={handleUpdate} className="bg-blue-700 text-white px-3 py-1 rounded text-xs">
        Salvar
      </button>
      <button onClick={() => setEditando(false)} className="bg-gray-300 px-3 py-1 rounded text-xs">
        Cancelar
      </button>
    </div>
  ) : (
    <button onClick={() => setEditando(true)} className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
      Atualizar
    </button>
  );
}
