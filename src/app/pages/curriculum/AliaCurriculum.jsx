const AliaCurriculum = () => {
  const curriculum = [
    {
      title: "ইবতেদায়ী (প্রাথমিক)",
      description:
        "ইবতেদায়ী স্তরটি প্রাথমিক শিক্ষা নিশ্চিত করে এবং আরবি, বাংলা, গণিতসহ অন্যান্য প্রাথমিক বিষয় শেখানো হয়।",
      duration: "৫ বছর",
    },
    {
      title: "দাখিল",
      description:
        "দাখিল স্তরে ধর্মীয় শিক্ষা এবং সাধারণ শিক্ষার সমন্বয়ে মাধ্যমিক স্তরের পাঠ্যক্রম পড়ানো হয়।",
      duration: "৫ বছর",
    },
    {
      title: "আলিম",
      description:
        "আলিম স্তরে উচ্চমাধ্যমিক স্তরের শিক্ষা দেওয়া হয়। ধর্মীয় জ্ঞানের পাশাপাশি বিজ্ঞানের বিষয়গুলো শেখানো হয়।",
      duration: "২ বছর",
    },
    {
      title: "ফাজিল",
      description:
        "ফাজিল হল স্নাতক স্তর। এখানে শিক্ষার্থীরা ধর্মীয় এবং আধুনিক শিক্ষায় পারদর্শিতা অর্জন করেন।",
      duration: "৩ বছর",
    },
    {
      title: "কামিল",
      description:
        "কামিল হল স্নাতকোত্তর স্তর। এটি মাদ্রাসা শিক্ষার সর্বোচ্চ স্তর হিসেবে বিবেচিত হয়।",
      duration: "২ বছর",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-600">আলিয়া কারিকুলাম</h1>
          <p className="text-gray-600 mt-2">
            মাদ্রাসা শিক্ষার বিভিন্ন স্তরসমূহ এবং তাদের বিস্তারিত বিবরণ
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculum.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="mt-auto">
                <span className="text-sm font-medium text-green-500">
                  সময়কাল: {item.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AliaCurriculum;
