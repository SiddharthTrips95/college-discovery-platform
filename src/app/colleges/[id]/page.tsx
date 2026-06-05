interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getCollege(id: string) {
  const res = await fetch(`http://localhost:3000/api/colleges/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function CollegePage({ params }: PageProps) {
  const { id } = await params;

  const college = await getCollege(id);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{college.name}</h1>

      <div className="space-y-3">
        <p>📍 {college.city}</p>

        <p>🏷️ {college.type}</p>

        <p>⭐ {college.rating}</p>

        <p>💼 {college.placements}%</p>

        <p>💰 ₹{college.fees.toLocaleString()}</p>

        <p className="mt-6">{college.description}</p>
      </div>
    </div>
  );
}
