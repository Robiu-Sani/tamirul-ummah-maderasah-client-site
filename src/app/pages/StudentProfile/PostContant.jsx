import PostCard from "./PostCard";

export default function PostContant({ posts }) {
  if (!posts) {
    return (
      <div className="text-gray-500 text-center flex justify-center items-center py-20">
        {" "}
        there is no posts
      </div>
    );
  }
  return (
    <div className="w-full " style={{ columns: "300px" }}>
      {posts?.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
}
