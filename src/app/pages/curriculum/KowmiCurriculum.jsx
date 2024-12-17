const KowmiCurriculum = () => {
  const stages = [
    {
      title: "নূরানী (প্রাথমিক স্তর)",
      description:
        "কুরআন তেলাওয়াত শেখার ভিত্তি এবং আরবি হরফ ও শব্দ চেনানো হয়।",
      duration: "২ বছর",
    },
    {
      title: "হিফজুল কুরআন (কুরআন মুখস্থ)",
      description:
        "সম্পূর্ণ কুরআন মুখস্থ করা হয় এবং তাজবিদের সাথে সঠিক তেলাওয়াত শেখানো হয়।",
      duration: "৩-৫ বছর",
    },
    {
      title: "ইবতেদায়ি (প্রাথমিক শিক্ষা)",
      description:
        "ফিকহ, আকাইদ, নাহু-সরফ, আরবি ব্যাকরণ ও বুনিয়াদি ইসলামী জ্ঞান শেখানো হয়।",
      duration: "৫ বছর",
    },
    {
      title: "মুতাওয়াসসিতাহ (মাধ্যমিক শিক্ষা)",
      description:
        "আরবি ভাষা, হাদিস, তাফসির, ইসলামী সাহিত্য এবং ফিকহের গভীরতর জ্ঞান প্রদান।",
      duration: "২ বছর",
    },
    {
      title: "সানাবিয়া উলিয়া (উচ্চ মাধ্যমিক)",
      description:
        "হাদিস, ফিকহ, ইসলামী যুক্তিবিদ্যা এবং সাহিত্য বিষয়ে বিশেষায়িত জ্ঞান অর্জন।",
      duration: "২ বছর",
    },
    {
      title: "ফাযিল (স্নাতক)",
      description:
        "দাওরা হাদিস পর্যায়ে সিহাহ সিত্তাহ (ছয়টি প্রধান হাদিসের গ্রন্থ) পাঠ এবং গবেষণা।",
      duration: "২ বছর",
    },
    {
      title: "কামিল (স্নাতকোত্তর)",
      description:
        "ইসলামী ফিকহে তাখাসসুস, তাফসির, হাদিস এবং গবেষণার মাধ্যমে বিশেষজ্ঞ হওয়া।",
      duration: "২ বছর",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700">
            কওমি মাদ্রাসা কারিকুলাম
          </h1>
          <p className="text-gray-600 mt-2">
            কওমি মাদ্রাসার শিক্ষার স্তরসমূহ এবং তাদের সময়কাল
          </p>
        </div>

        {/* Curriculum Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Title */}
              <h2 className="text-2xl font-semibold text-green-600 mb-3">
                {stage.title}
              </h2>
              {/* Description */}
              <p className="text-gray-700 mb-4">{stage.description}</p>
              {/* Duration */}
              <div className="text-sm font-medium text-green-500">
                সময়কাল: {stage.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KowmiCurriculum;
