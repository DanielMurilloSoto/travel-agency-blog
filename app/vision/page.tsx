import Link from "next/link";

export default function vision() {
  return (
<>
    <nav className="flex justify-center gap-6 mb-6 bg-white p-4 shadow">
        <Link href="/">Inicio</Link>
        <Link href="/about">Quiénes somos</Link>
        <Link href="/vision">Visión y Metas</Link>
      </nav>


    <main className="p-8">
      <h1 className="text-3xl font-bold">Visión y Metas</h1>
      <p>Nuestra meta es conectar personas con destinos increíbles.</p>
    </main>
</>
  );
}