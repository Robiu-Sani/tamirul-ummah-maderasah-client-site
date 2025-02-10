import Image from "next/image";

export default function StaffCard({ staff }) {
  const { staffImage, staffName } = staff || {};

  // if (!staffImage || !staffName) {
  //   return null; // Avoid rendering invalid data
  // }

  return (
    <div className="w-full flex flex-col justify-between items-center border rounded-md bg-white shadow-md border-green-100 p-2">
      {/* Render teacher image */}
      <Image
        src={
          staffImage
            ? staffImage
            : "https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png"
        }
        alt={staffName ? staffName : "stafe of tamirul ummah maderasah"}
        width={250}
        height={300}
        className="rounded-md"
      />
      {/* Render teacher name */}
      <div className="mt-2 text-center font-semibold">
        {staffName ? staffName : null}
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {/* <small className="text-center">{teacher?.subject}</small> */}
        <small className="text-center">Mobile : {staff?.phone}</small>
      </div>
    </div>
  );
}
