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
            <div className="flex items-start justify-center">
                {niches.map((niche, index) => (
                    <div key={index} className="bg-slate-600 rounded-lg px-12 py-4 mx-4 my-2">
                        <div className="text-white font-bold text-2xl">{niche.title}</div>
                        <div className="text-white font-medium text-sm">{niche.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
