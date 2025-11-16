import { useEffect, useState } from "react";

export default function Profissionais() {
  const [lista, setLista] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtroArea, setFiltroArea] = useState("Todos");
  const [filtroLocal, setFiltroLocal] = useState("Todos");
  const [filtroTec, setFiltroTec] = useState("Todos");

  // NOVOS STATES DO MODAL
  const [selecionado, setSelecionado] = useState(null);
  const [recomendado, setRecomendado] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/profissionais")
      .then((res) => res.json())
      .then((data) => {
        setLista(data.profissionais);
      })
      .catch((err) => console.error("Erro ao carregar profissionais:", err));
  }, []);

  const filtrados = lista.filter((p) => {
    const textoMatch =
      p.name.toLowerCase().includes(busca.toLowerCase()) ||
      p.title.toLowerCase().includes(busca.toLowerCase());

    const areaOK = filtroArea === "Todos" || p.area === filtroArea;
    const localOK =
      filtroLocal === "Todos" || p.location.includes(filtroLocal);
    const tecOK = filtroTec === "Todos" || p.skills.includes(filtroTec);

    return textoMatch && areaOK && localOK && tecOK;
  });

  return (
    <div className="p-10 w-full">
      <h1 className="text-4xl font-bold">Diretório de Profissionais</h1>
      <p className="text-gray-600 mt-1">
        Encontre {lista.length} profissionais especializados
      </p>

      {/* Campo de busca */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Buscar por nome, cargo, skill..."
          className="w-full border rounded-xl px-4 py-3 shadow-sm"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div>
          <label className="text-sm font-semibold">Área</label>
          <select
            className="w-full border rounded-xl px-3 py-2"
            value={filtroArea}
            onChange={(e) => setFiltroArea(e.target.value)}
          >
            <option>Todos</option>
            <option>Engenharia</option>
            <option>Design</option>
            <option>Backend</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold">Localidade</label>
          <select
            className="w-full border rounded-xl px-3 py-2"
            value={filtroLocal}
            onChange={(e) => setFiltroLocal(e.target.value)}
          >
            <option>Todos</option>
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
            <option>Belo Horizonte</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold">Tecnologia</label>
          <select
            className="w-full border rounded-xl px-3 py-2"
            value={filtroTec}
            onChange={(e) => setFiltroTec(e.target.value)}
          >
            <option>Todos</option>
            <option>Full Stack</option>
            <option>UX/UI</option>
            <option>Backend</option>
          </select>
        </div>
      </div>

      {/* Quantidade */}
      <p className="mt-6 text-gray-700">
        Mostrando {filtrados.length} de {lista.length} profissionais
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filtrados.map((p) => (
          <div
            key={p.id}
            className="
                bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
                transform transition duration-300 
                hover:scale-[1.03] hover:shadow-xl
            "
            onClick={() => {
                setSelecionado(p);
                setRecomendado(false);
            }}
            >

            <img src={p.photo} className="h-44 w-full object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{p.name}</h2>

              <p className="text-blue-700 font-medium">{p.title}</p>

              <p className="text-gray-600 text-sm">{p.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selecionado && (
        <div
          className="
            fixed inset-0 
            bg-transparent 
            backdrop-blur-sm 
            flex items-center justify-center 
            z-50
        "
        onClick={() => setSelecionado(null)}
                >
          <div
            className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-2xl relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Foto */}
            <img
              src={selecionado.photo}
              className="w-40 h-40 rounded-xl object-cover mx-auto"
            />

            {/* Nome e informações */}
            <h2 className="text-3xl font-bold text-center mt-4">
              {selecionado.name}
            </h2>

            <p className="text-blue-700 text-lg font-medium text-center">
              {selecionado.title}
            </p>

            <p className="text-gray-600 text-center mt-1">
              {selecionado.location}
            </p>

            {/* Bio */}
            <p className="text-gray-700 text-center mt-4 px-4">
              {selecionado.bio}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {selecionado.skills?.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Botões */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                onClick={() => {
                  alert("Mensagem enviada! ✔");
                }}
              >
                Enviar Mensagem
              </button>

              <button
                className={`px-6 py-3 rounded-xl transition ${
                  recomendado
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setRecomendado(!recomendado)}
              >
                {recomendado ? "Recomendado ✔" : "Recomendar"}
              </button>
            </div>

            {/* Botão fechar */}
            <button
              onClick={() => setSelecionado(null)}
              className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
