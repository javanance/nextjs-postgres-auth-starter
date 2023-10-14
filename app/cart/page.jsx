import { sql } from "@vercel/postgres";

export default async function Cart() {
  const { rows } = await sql`SELECT * FROM pets`;

  return (
    <>
      <h1>pets</h1>
      <div>
        {rows.map((row) => (
          <div key={row.id}>
            {row.name} {"_"}
            {row.email} {"_"}
          </div>
        ))}
      </div>
    </>
  );
}
