import Image from "next/image";

const PostCard = () => {
  const post = {
    userImage: "https://via.placeholder.com/100", // Placeholder user image
    userName: "John Doe",
    userClass: "Class 10",
    postDate: "December 2, 2024",
    postTitle: "A Beautiful Sunset",
    postDescription:
      "This is a description of a beautiful sunset that I witnessed recently. The colors were breathtaking, and it was a moment to remember.",
    postImage: "https://via.placeholder.com/600x300", // Placeholder post image
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between space-x-4 mb-4">
        <div className="flex items-center gap-4">
          <Image
            width={100}
            height={100}
            src={post.userImage}
            alt="User"
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div>
            <h4 className="text-lg font-semibold">{post.userName}</h4>
            <p className="text-sm text-gray-500">{post.userClass}</p>
          </div>
        </div>
        <span className="ml-auto text-sm text-gray-400">{post.postDate}</span>
      </div>

      {/* Post Title */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {post.postTitle}
      </h2>

      {/* Post Description */}
      <p className="text-gray-600 mb-4">{post.postDescription}</p>

      {/* Post Image */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <Image
          width={300}
          height={200}
          src={post.postImage}
          alt="Post"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default PostCard;
