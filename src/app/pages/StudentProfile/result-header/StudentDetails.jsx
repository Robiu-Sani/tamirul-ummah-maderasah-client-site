import Image from "next/image";

export default function StudentDetails({ image, result }) {
  return (
    <div className="p-4 flex flex-col md:flex-row justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold">{result?.examName}</h2>
        <p>
          <strong>Student Name:</strong> {result?.studentName}
        </p>
        <p>
          <strong>Gender:</strong> {result?.studentGender}
        </p>
        <p>
          <strong>Class:</strong> {result?.studentClass}
        </p>
      </div>
      <Image
        src={
          image ||
          "https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png"
        }
        alt="Student"
        width={120}
        height={150}
        className="border-2 border-gray-300 rounded-md"
      />
    </div>
  );
}
