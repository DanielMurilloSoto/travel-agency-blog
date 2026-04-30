import Link from "next/link";



export default function Home() {
  return (
    <>
      <nav className="flex justify-center gap-6 mb-6 bg-white p-4 shadow">
        <Link href="/">Inicio</Link>
        <Link href="/about">Quiénes somos</Link>
        <Link href="/vision">Visión y Metas</Link>
      </nav>

    <main className="p-8 min-h-screen bg-gray-100">
      
      <h1 className="text-4xl font-bold text-center mb-8">
        🌎 Agencia de Viajes
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* PARIS */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="/image/paris.jpg" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">París</h2>
            <p>Francia 🇫🇷</p>
          </div>
        </div>

        {/* CANCUN */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="/image/cancun.jpg" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Cancún</h2>
            <p>México 🏝️</p>
          </div>
        </div>

        {/* ROMA */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="/image/roma.jpg" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Roma</h2>
            <p>Italia 🇮🇹</p>
          </div>
        </div>

        {/* DISNEY */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="/image/disneylandia.jpg" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Disneyland</h2>
            <p>California, USA 🎡</p>
          </div>
        </div>

        {/* SIX FLAGS */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="/image/sixflags.webp" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Six Flags</h2>
            <p>Montañas rusas 🎢</p>
          </div>
        </div>

        {/* TORRES DEL PAINE */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="/image/Torresdelpaine.jpg" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Torres del Paine</h2>
            <p>Chile 🌄</p>
          </div>
        </div>

      </div>

    </main>
    </>
  );
}