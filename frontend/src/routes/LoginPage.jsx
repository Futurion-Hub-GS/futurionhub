import { useState } from "react";
 
export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Simulação de login (substitua por autenticação real)
    if (email && senha) {
      onLoginSuccess(email);
    } else {
      alert("Preencha todos os campos!");
    }
  };
 
  const handleResetSubmit = (e) => {
    e.preventDefault();
    alert(`Um link de redefinição foi enviado para ${resetEmail}`);
    setShowReset(false);
  };
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Login Box */}
      <div className="bg-white shadow-md rounded-2xl p-8 w-[360px] text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"
            alt="Logo Futurion Hub"
            className="h-12 w-12 object-contain"
          />
        </div>
 
        {/* Título */}
        <h1 className="text-xl font-bold text-gray-800">FUTURION HUB</h1>
        <h2 className="text-lg font-semibold text-gray-700 mt-4 mb-6">Entrar</h2>
 
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div>
            <label className="text-sm font-medium text-gray-600">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E-mail"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
 
          <div>
            <label className="text-sm font-medium text-gray-600">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              placeholder="Senha"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
 
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition-all"
          >
            Entrar
          </button>
        </form>
 
        <p
          className="text-sm text-gray-500 mt-4 hover:underline cursor-pointer"
          onClick={() => setShowReset(true)}
        >
          Esqueceu a senha?
        </p>
      </div>
 
      {/* Modal de Redefinição */}
      {showReset && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white shadow-lg rounded-2xl p-6 w-[320px]">
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
              Redefinir Senha
            </h2>
 
            <form onSubmit={handleResetSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
                placeholder="Digite seu e-mail"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
 
              <button
                type="submit"
                className="bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-all"
              >
                Enviar link
              </button>
            </form>
 
            <p
              className="text-sm text-gray-500 text-center mt-3 hover:underline cursor-pointer"
              onClick={() => setShowReset(false)}
            >
              Voltar ao login
            </p>
          </div>
        </div>
      )}
    </div>
  );
}