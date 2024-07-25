import { Button } from "@/components/ui/button";
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const items = await db.query.testing.findMany();

  return (
    <main className="min-h-screen p-16">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl">Find Conference</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
    </main>
  );
}
