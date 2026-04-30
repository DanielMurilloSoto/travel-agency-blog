import Link from "next/link";

export default function About() {
  return (
<>
<nav className="flex justify-center gap-8 bg-white p-4 shadow-md sticky top-0 z-10">
  <Link href="/" className="hover:text-blue-600">Inicio</Link>
  <Link href="/about" className="hover:text-blue-600">Quiénes somos</Link>
  <Link href="/vision" className="hover:text-blue-600">Visión y Metas</Link>
</nav>

    <main className="bg-gray-100">

      {/* HERO */}
      <section className="bg-white py-16 flex justify-center">
        <div className="max-w-5xl flex flex-col md:flex-row items-center gap-10 px-6">

          {/* TEXTO */}
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Sobre Nosotros
            </h1>

            <p className="text-gray-600">
              Somos una agencia de viajes enfocada en crear experiencias únicas 
              alrededor del mundo. Diseñamos cada viaje pensando en la comodidad, 
              aventura y satisfacción de nuestros clientes.
            </p>
          </div>

          {/* IMAGEN */}
          <img 
            src="/image/team.webp" 
            className="w-full md:w-1/2 rounded-xl shadow-md"
          />

        </div>
      </section>

      {/* INFO */}
      <section className="py-12 flex justify-center">
        <div className="max-w-3xl text-center px-6">

          <p className="text-gray-700">
            Nuestro equipo está compuesto por expertos en turismo que buscan 
            ofrecer la mejor calidad de servicio, garantizando seguridad, 
            comodidad y experiencias inolvidables.
          </p>

        </div>
      </section>

    </main>

</>
  );
}