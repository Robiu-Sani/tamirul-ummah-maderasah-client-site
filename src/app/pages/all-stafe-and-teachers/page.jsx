import AllStaff from "./AllStaff";
import AllTeachers from "./AllTeachers";

export default function Page() {
  return (
    <>
      <div className="bg-green-50 pt-8">
        <AllTeachers />
        <AllStaff />
      </div>
    </>
  );
}
