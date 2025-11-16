import { useEffect, useState } from "react";



export default function Profissionais() {

  const [lista, setLista] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtroArea, setFiltroArea] = useState("Todos");
  const [filtroLocal, setFiltroLocal] = useState("Todos");
  const [filtroTec, setFiltroTec] = useState("Todos");

  useEffect(() => {
    fetch("http://localhost:3001/profissionais")
  .then(res => res.json())
  .then(data => setProfissionais(data))
  .catch(err => console.error("Erro ao carregar profissionais:", err));
  }, []);

  const filtrados = lista.filter(p => {
    const textoMatch =
      p.nome.toLowerCase().includes(busca.toLowerCase()) ||
      p.cargo.toLowerCase().includes(busca.toLowerCase());

    const areaOK = filtroArea === "Todos" || p.area === filtroArea;
    const localOK = filtroLocal === "Todos" || p.cidade === filtroLocal;
    const tecOK = filtroTec === "Todos" || p.tecnologia === filtroTec;

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
          onChange={e => setBusca(e.target.value)}
        />
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

        <div>
          <label className="text-sm font-semibold">Área</label>
          <select
            className="w-full border rounded-xl px-3 py-2"
            value={filtroArea}
            onChange={e => setFiltroArea(e.target.value)}
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
            onChange={e => setFiltroLocal(e.target.value)}
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
            onChange={e => setFiltroTec(e.target.value)}
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

        {filtrados.map(p => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img src={p.foto} className="h-44 w-full object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{p.nome}</h2>

              <p className="text-blue-700 font-medium">{p.cargo}</p>

              <p className="text-gray-600 text-sm">
                {p.cidade}, {p.estado}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
