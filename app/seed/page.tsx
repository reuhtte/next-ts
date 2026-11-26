import { createClient } from "@libsql/client";
import { NextResponse } from "next/server";
import { Equipment } from "../lib/definitions";
import { equipmentData } from "../lib/placeholder-data";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const POST = async () => {
  const equipmentTableExists = await client.execute(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='equipment';",
  );

  if (!equipmentTableExists.rows.length) {
    await client.execute(
      "CREATE TABLE IF NOT EXISTS equipment (id TEXT PRIMARY KEY, name TEXT, category TEXT, vitality INTEGER, strength INTEGER, magic INTEGER);",
    );
  }

  const existingData = await client.execute(
    "SELECT COUNT(*) as count FROM equipment;",
  );

  const existingCount = Number(existingData.rows[0]?.count ?? 0);
  if (existingCount > 0) {
    await client.execute("DELETE FROM equipment;");
  }

  await client.batch(
    equipmentData.map((item: Equipment) => ({
      sql: "INSERT INTO equipment (id, name, category, vitality, strength, magic) VALUES (?, ?, ?, ?, ?, ?);",
      args: [
        item.id,
        item.name,
        item.category,
        item.vitality,
        item.strength,
        item.magic,
      ],
    })),
    "write",
  );

  return NextResponse.json({ message: "Seed data inserted successfully" });
};

POST();

export default function Page() {
  return <p>Seed page</p>;
}
