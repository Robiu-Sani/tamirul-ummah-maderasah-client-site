import AddStudentForm from "./AddStudentForm";
// import SubmitedInfo from "../SubmitedInfo/SubmitedInfo";

export default function Admition() {
  return (
    <div className="w-full relative bg-green-100 py-10 ">
      <div className="container mx-auto px-3">
        <AddStudentForm />
      </div>
      {/* <SubmitedInfo /> */}
    </div>
  );
}
