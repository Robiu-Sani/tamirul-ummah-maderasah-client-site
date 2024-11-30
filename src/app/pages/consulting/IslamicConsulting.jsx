import { FaRegHandshake } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";

export default function IslamicConsulting() {
  return (
    <div className="w-full bg-green-100 py-14 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-green-600 p-6 text-center text-white">
          <h1 className="text-2xl font-bold">
            পরামর্শের গুরুত্ব এবং ইসলামিক দৃষ্টিভঙ্গি
          </h1>
          <p className="text-sm mt-2">
            আল্লাহর সন্তুষ্টি অর্জনের জন্য সঠিক পরামর্শ গ্রহণ করা জরুরি।
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col gap-8">
          {/* Card 1 */}
          <div className="flex items-center gap-6">
            <FaRegHandshake className="text-green-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold text-green-700">
                পারস্পরিক সহযোগিতা
              </h2>
              <p className="text-gray-700 mt-2">
                ইসলাম আমাদেরকে পারস্পরিক সহযোগিতার উপর গুরুত্ব দিতে বলে। পরামর্শ
                হল একটি মাধ্যম যা আমাদের জীবনকে আরও সহজ করে।
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-6">
            <BsFillChatDotsFill className="text-green-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold text-green-700">
                জ্ঞান ও পরামর্শ
              </h2>
              <p className="text-gray-700 mt-2">
                নবী করিম (সাঃ) বলেছেন, “পরামর্শ হল ঈমানদারদের মধ্যে একটি
                গুরুত্বপূর্ণ গুণ। সঠিক সিদ্ধান্ত গ্রহণের জন্য এটি অপরিহার্য।”
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-6">
            <AiOutlineFieldTime className="text-green-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold text-green-700">
                সময়ের সঠিক ব্যবহার
              </h2>
              <p className="text-gray-700 mt-2">
                সময় একটি মূল্যবান সম্পদ। সঠিক পরামর্শ গ্রহণের মাধ্যমে আমরা
                সময়ের সর্বোত্তম ব্যবহার নিশ্চিত করতে পারি।
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-green-200 p-6 text-center">
          <p className="text-green-700 font-medium">
            আপনার যেকোনো সমস্যা সমাধানে আমাদের সাথে পরামর্শ করুন। আল্লাহর রহমতে
            সঠিক দিকনির্দেশনা পেতে সাহায্য করি।
          </p>
        </div>
      </div>
    </div>
  );
}
