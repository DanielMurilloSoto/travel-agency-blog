export default function Home() {
  return (
    <main className="p-8 min-h-screen bg-gray-100">
      
      {/* Título */}
      <h1 className="text-4xl font-bold text-center mb-8">
        🌎 Agencia de Viajes
      </h1>

      {/* Contenedor de cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-xl font-semibold">París</h2>
          <p>La ciudad del amor 🇫🇷</p>
          <p className="font-bold mt-2">$1200</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-xl font-semibold">Cancún</h2>
          <p>Playas paradisíacas 🏝️</p>
          <p className="font-bold mt-2">$900</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-xl font-semibold">Roma</h2>
          <p>Historia y cultura 🇮🇹</p>
          <p className="font-bold mt-2">$1100</p>
        </div>

      </div>

    </main>
  );
}