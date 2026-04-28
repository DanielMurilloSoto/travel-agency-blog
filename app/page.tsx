import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>🌎 Agencia de Viajes</h1>

      <nav>
        <Link href="/blog">Ir al Blog</Link>
      </nav>
    </main>
  );
}