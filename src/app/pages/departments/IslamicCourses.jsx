import {
  FaBookOpen,
  FaSchool,
  FaCertificate,
  FaHourglassHalf,
} from "react-icons/fa";

export default function IslamicCourses() {
  const courses = [
    {
      id: 2,
      title: "আলিয়া",
      description: "ইসলামী শিক্ষা অর্জনের জন্য একটি সুনির্দিষ্ট কোর্স।",
      icon: <FaSchool size={40} className="text-blue-500" />,
    },
    {
      id: 1,
      title: "হিফজ",
      description: "কুরআন মুখস্থ করার জন্য বিশেষ প্রোগ্রাম।",
      icon: <FaBookOpen size={40} className="text-green-500" />,
    },

    {
      id: 3,
      title: "তাকসিসি",
      description: "উন্নত ইসলামী গবেষণার জন্য প্রস্তাবিত প্রোগ্রাম।",
      icon: <FaCertificate size={40} className="text-yellow-500" />,
    },
    {
      id: 4,
      title: "কওমি (শীঘ্রই আসছে)",
      description: "কওমি মাদ্রাসার জন্য নতুন প্রস্তাবিত কোর্স।",
      icon: <FaHourglassHalf size={40} className="text-gray-500" />,
    },
  ];

  return (
    <div className=" py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            >
              <div className="mb-4">{course.icon}</div>
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
