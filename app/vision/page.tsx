import Link from "next/link";

export default function vision() {
  return (
<>
<nav className="flex justify-center gap-8 bg-white p-4 shadow-md sticky top-0 z-10">
  <Link href="/" className="hover:text-blue-600">Inicio</Link>
  <Link href="/about" className="hover:text-blue-600">Quiénes somos</Link>
  <Link href="/vision" className="hover:text-blue-600">Visión y Metas</Link>
</nav>


 <main>

      {/* HERO */}
      <section className="h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/image/mountain.jpg')" }}
      >
        <h1 className="text-white text-4xl font-bold bg-black/50 px-6 py-2 rounded">
          Conócenos
        </h1>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-10 text-center px-6">
        <p className="max-w-3xl mx-auto text-gray-700">
          Contamos con profesionales altamente capacitados que buscan brindar 
          soluciones innovadoras en turismo, garantizando experiencias únicas.
        </p>
      </section>

      {/* MISION Y VISION */}
      <section className="grid md:grid-cols-2">

        {/* MISIÓN */}
        <div 
          className="h-64 bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/image/mision.jpg')" }}
        >
          <div className="bg-black/50 p-6 text-center">
            <h2 className="text-2xl font-bold">Misión</h2>
            <p className="mt-2">
              Brindar experiencias de viaje únicas con calidad y seguridad.
            </p>
          </div>
        </div>

        {/* VISIÓN */}
        <div 
          className="h-64 bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/image/vision.webp')" }}
        >
          <div className="bg-black/50 p-6 text-center">
            <h2 className="text-2xl font-bold">Visión</h2>
            <p className="mt-2">
              Ser líderes en turismo digital a nivel internacional.
            </p>
          </div>
        </div>

      </section>

    </main>
</>
  );
}