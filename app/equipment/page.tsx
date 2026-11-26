import { createClient } from "@libsql/client";
import type { Equipment } from "@/app/lib/definitions";
import Card from "@/app/equipment/ui/card";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const result = await client.execute("SELECT * FROM equipment ORDER BY id;");

const equipmentData: { rows: Equipment[] } = {
  rows: result.rows.map((row, index): Equipment => {
    const { id, name, category, vitality, strength, magic } = row;

    if (
      typeof id !== "string" ||
      typeof name !== "string" ||
      typeof category !== "string" ||
      typeof vitality !== "number" ||
      !Number.isFinite(vitality) ||
      typeof strength !== "number" ||
      !Number.isFinite(strength) ||
      typeof magic !== "number" ||
      !Number.isFinite(magic)
    ) {
      throw new Error(`Invalid equipment data at row ${index + 1}`);
    }

    return { id, name, category, vitality, strength, magic };
  }),
};

export default function Page() {
  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
        Equipment collection
      </h1>
      <div className="text-white">{equipmentData.rows.length} objects</div>
      <div className="border-t-2 mt-2 border-[#536457]">&nbsp;</div>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {equipmentData.rows.map((item) => (
          <li key={item.id}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
