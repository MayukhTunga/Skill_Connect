export default function Topniche() {
  const niches = [
    { title: "Music", description: "Learn Music from scratch" },
    { title: "Cooking", description: "Learn Cooking from scratch" },
    { title: "Web", description: "Learn Web from scratch" },
    { title: "Finance", description: "Learn Finance from scratch" },
    { title: "ML", description: "Learn ML from scratch" },
  ];

  return (
    <div>
      <h1 className="text-white text-4xl font-bold my-8 ">
        Top <span className="text-purple-600">Niches</span> in 2024
      </h1>
      <div className="flex items-start justify-center my-8">
        {niches.map((niche, index) => (
          <div
            key={index}
            className="bg-slate-200 rounded-lg px-12 py-4 mx-4 my-2 cursor-pointer hover:bg-white outline hover:outline-offset-2 hover:outline-purple-700"
          >
            <div className="text-purple-600 font-bold text-2xl hover:text-purple-700">
              {niche.title}
            </div>
            <div className="text-purple-600 font-medium text-sm hover:text-purple-700">
              {niche.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
