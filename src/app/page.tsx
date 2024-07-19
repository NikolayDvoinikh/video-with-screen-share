import { db } from "@/db";

export default async function Home() {
  const items = await db.query.testing.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        {items.map((item, i) => (
          <div>
            <h1>{item.name}</h1>
            <h2>id - {item.id}</h2>
            <h3>{i}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
