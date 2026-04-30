import Link from "next/link";



export default function Home() {
  return (
    <>
<nav className="flex justify-center gap-8 bg-white p-4 shadow-md sticky top-0 z-10">
  <Link href="/" className="hover:text-blue-600">Inicio</Link>
  <Link href="/about" className="hover:text-blue-600">Quiénes somos</Link>
  <Link href="/vision" className="hover:text-blue-600">Visión y Metas</Link>
</nav>

<main className="min-h-screen bg-gray-100 flex justify-center p-10">
  <div className="w-full max-w-5xl">
      
      <h1 className="text-4xl font-bold text-center mb-8">
        🌎 Agencia de Viajes
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* PARIS */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <img src="/image/paris.jpg" className="w-full h-60 object-cover"/>

        <div className="p-5">
          <h2 className="text-xl font-semibold">París</h2>
            <p className="text-sm text-gray-500">Francia 🇫🇷</p>

              <p className="mt-2 text-gray-700">
                Descubre la magia de la ciudad del amor. Visita la Torre Eiffel, el Museo del Louvre 
                y disfruta de su exquisita gastronomía en un ambiente romántico único.
              </p>

            <p className="font-bold mt-3 text-blue-600">$1200</p>
          </div>
      </div>

        {/* CANCUN */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <img src="/image/cancun.jpg" className="w-full h-60 object-cover"/>

        <div className="p-5">
          <h2 className="text-xl font-semibold">Cancún</h2>
            <p className="text-sm text-gray-500">México 🏝️</p>

              <p className="mt-2 text-gray-700">
               Relájate en playas de arena blanca y aguas cristalinas. Ideal para vacaciones 
                de lujo, actividades acuáticas y vida nocturna vibrante.
              </p>

            <p className="font-bold mt-3 text-blue-600">$1200</p>
          </div>
      </div>

        {/* ROMA */}

      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <img src="/image/roma.jpg" className="w-full h-60 object-cover"/>

        <div className="p-5">
          <h2 className="text-xl font-semibold">Roma</h2>
            <p className="text-sm text-gray-500">Italia 🇮🇹</p>

              <p className="mt-2 text-gray-700">
                Viaja en el tiempo recorriendo el Coliseo, el Vaticano y las calles llenas de historia. 
                Perfecto para amantes de la cultura y la arquitectura clásica.
              </p>

            <p className="font-bold mt-3 text-blue-600">$1200</p>
          </div>
      </div>


        {/* DISNEY */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <img src="/image/disneylandia.jpg" className="w-full h-60 object-cover"/>

        <div className="p-5">
          <h2 className="text-xl font-semibold">Disneyland</h2>
            <p className="text-sm text-gray-500">California, USA 🎡</p>

              <p className="mt-2 text-gray-700">
                Vive la experiencia mágica en el parque más famoso del mundo. Diversión para todas 
                las edades con atracciones, espectáculos y personajes icónicos.
              </p>

            <p className="font-bold mt-3 text-blue-600">$1200</p>
          </div>
      </div>

        {/* SIX FLAGS */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <img src="/image/sixflags.webp" className="w-full h-60 object-cover"/>

        <div className="p-5">
          <h2 className="text-xl font-semibold">Six Flags</h2>
            <p className="text-sm text-gray-500">Montañas rusas 🎢</p>

              <p className="mt-2 text-gray-700">
                Siente la adrenalina en uno de los parques con más montañas rusas del mundo. 
                Perfecto para los amantes de la emoción extrema.
              </p>

            <p className="font-bold mt-3 text-blue-600">$1200</p>
          </div>
      </div>

        {/* TORRES DEL PAINE */}

              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <img src="/image/Torresdelpaine.jpg" className="w-full h-60 object-cover"/>

        <div className="p-5">
          <h2 className="text-xl font-semibold">Torres del Paine</h2>
            <p className="text-sm text-gray-500">Chile 🌄</p>

              <p className="mt-2 text-gray-700">
                Explora uno de los paisajes naturales más impresionantes del mundo. Ideal para 
                senderismo, fotografía y conexión con la naturaleza.
              </p>


            <p className="font-bold mt-3 text-blue-600">$1200</p>
          </div>
      </div>

      </div>
  </div>
</main>
    </>
  );
}