import Image from "next/image";

export default function TeacherCard({ teacher }) {
  // Ensure that teacher properties are defined and valid
  const { teacherImage, teacherName } = teacher || {};

  // if (!teacherImage || !teacherName) {
  //   return null; // Avoid rendering invalid data
  // }

  return (
    <div className="w-full flex flex-col justify-between items-center border rounded-md bg-white shadow-md border-green-100 p-2">
      {/* Render teacher image */}
      <Image
        src={
          teacherImage !== null || ""
            ? teacherImage
            : "https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png"
        }
        alt={teacherName ? teacherName : "teacher of tamirul ummah maderasah"}
        width={250}
        height={300}
        className="rounded-md "
      />
      {/* Render teacher name */}
      <div className="mt-2 text-center text-base  font-semibold">
        {teacherName ? teacherName : null}
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <small className="text-center">{teacher?.subject}</small>
        <small className="text-center">Mobile : {teacher?.phone}</small>
      </div>
    </div>
  );
}
