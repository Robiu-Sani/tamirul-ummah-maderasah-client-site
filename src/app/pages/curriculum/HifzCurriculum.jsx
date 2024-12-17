const HifzCurriculum = () => {
  const stages = [
    {
      title: "প্রাথমিক স্তর",
      description:
        "এই স্তরে শিক্ষার্থীদের কুরআন শুদ্ধভাবে তিলাওয়াত শেখানো হয় এবং আরবি হরফ চেনানো হয়।",
      duration: "১ বছর",
    },
    {
      title: "মধ্যম স্তর",
      description:
        "শিক্ষার্থীরা ছোট ছোট সূরা মুখস্থ করে এবং কুরআনের একাধিক পারা হিফজ শুরু করে।",
      duration: "২ বছর",
    },
    {
      title: "উচ্চ স্তর",
      description:
        "শিক্ষার্থীরা সম্পূর্ণ কুরআন হিফজ সম্পন্ন করে এবং তাজবিদ ও তিলাওয়াতের উন্নতি সাধন করে।",
      duration: "৩-৪ বছর",
    },
    {
      title: "মুরাজাআ (পুনরাবৃত্তি)",
      description:
        "এই পর্যায়ে সম্পূর্ণ মুখস্থ কুরআন পুনরাবৃত্তি করা হয় এবং স্মৃতিশক্তি মজবুত করা হয়।",
      duration: "আজীবন অধ্যবসায়",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-600">হিফজ কারিকুলাম</h1>
          <p className="text-gray-600 mt-2">
            কুরআন হিফজের ধাপসমূহ এবং তাদের বিস্তারিত ব্যাখ্যা
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Title */}
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                {stage.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 mb-4">{stage.description}</p>

              {/* Duration */}
              <div className="mt-auto">
                <span className="text-sm font-medium text-green-500">
                  সময়কাল: {stage.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HifzCurriculum;
