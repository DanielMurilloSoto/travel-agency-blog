export default function Home() {
  return (
    // main = contenedor principal
    // p-8 → padding (espacio interno) de 8 unidades
    // min-h-screen → altura mínima = toda la pantalla
    // bg-gray-100 → fondo gris claro
    <main className="p-8 min-h-screen bg-gray-100">
      
      {/* TÍTULO PRINCIPAL */}
      
      {/* 
        text-4xl → tamaño de texto grande
        font-bold → texto en negrita
        text-center → centrar texto
        mb-8 → margen inferior (espacio abajo)
      */}
      <h1 className="text-4xl font-bold text-center mb-8">
        🌎 Agencia de Viajes
      </h1>

      {/* CONTENEDOR DE TARJETAS */}

      {/*
        grid → activa sistema de columnas (grid layout)
        grid-cols-1 → 1 columna en pantallas pequeñas
        md:grid-cols-3 → en pantallas medianas (tablet/pc) usa 3 columnas
        gap-6 → espacio entre cada tarjeta
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* TARJETA 1 */}

        {/*
          bg-white → fondo blanco
          rounded-xl → bordes redondeados grandes
          shadow-md → sombra (efecto de tarjeta)
          p-4 → padding interno
        */}
        <div className="bg-white rounded-xl shadow-md p-4">
          
          {/*
            text-xl → tamaño de texto mediano-grande
            font-semibold → semi-negrita
          */}
          <h2 className="text-xl font-semibold">París</h2>

          {/* texto normal */}
          <p>La ciudad del amor 🇫🇷</p>

          {/*
            font-bold → texto en negrita
            mt-2 → margen arriba
          */}
          <p className="font-bold mt-2">$1200</p>
        </div>

        {/* TARJETA 2 */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-xl font-semibold">Cancún</h2>
          <p>Playas paradisíacas 🏝️</p>
          <p className="font-bold mt-2">$900</p>
        </div>

        {/* TARJETA 3 */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-xl font-semibold">Roma</h2>
          <p>Historia y cultura 🇮🇹</p>
          <p className="font-bold mt-2">$1100</p>
        </div>

      </div>

    </main>
  );
}