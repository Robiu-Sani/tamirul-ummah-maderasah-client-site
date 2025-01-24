import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Map() {
  return (
    <div className="flex flex-col items-center justify-center bg-green-50 pt-10 -mb-40 px-5">
      <div className="w-full sm:min-w-[640px] md:min-w-[768px] lg:w-[1000px] rounded-lg overflow-hidden border border-green-500 mx-auto">
        {/* Campus Info Section */}
        <div className="bg-green-100 shadow-lg rounded-t-lg p-6 w-full  border-b border-green-500 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2" /> মেইন ক্যাম্পাস
          </h2>
          <p className="text-gray-700 text-lg mb-2 font-medium">
            ইনসাফ গার্ডেন সিটি, দৌলতপুর, কোটবাড়ি রোড, আদর্শ সদর, কুমিল্লা
          </p>
          <p className="text-gray-700 text-lg flex items-center justify-center font-medium">
            <FaPhoneAlt className="mr-2 text-green-600" /> +880 1716453952
          </p>
        </div>

        {/* Map Section */}
        <div className=" w-full ">
          <div className="relative overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.823203487193!2d91.15945485136484!3d23.448881610699075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547ee86acf89cf%3A0x2d8ca31466ad1214!2z4Kak4Ka-4Kau4Ka_4Kaw4KeB4KayIOCmieCmruCnjeCmruCmvuCmueCnjSDgpq7gpr7gpqbgp43gprDgpr7gprjgpr7gprk!5e0!3m2!1sbn!2sbd!4v1737728086612!5m2!1sbn!2sbd"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 md:h-[450px] border-4 border-green-200 "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
