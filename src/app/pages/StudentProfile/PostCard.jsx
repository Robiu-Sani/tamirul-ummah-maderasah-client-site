import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className="w-full  p-2 my-4 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between space-x-4 mb-4">
        <div className="flex items-center gap-4">
          <Image
            width={100}
            height={100}
            src={
              post?.studentID?.gender === "male"
                ? post?.studentID?.image
                : "https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png"
            }
            alt={post?.studentID?.studentNameEnglish}
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div>
            <h4 className="text-lg font-semibold">
              {post?.studentID?.studentNameEnglish}
            </h4>
            <p className="text-sm text-gray-500">{post?.studentID?.class}</p>
          </div>
        </div>
        <span className="ml-auto text-sm text-gray-400">
          {post?.studentID?.section}
        </span>
      </div>

      {/* Post Title */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {post?.postTitle}
      </h2>

      {/* Post Description */}
      <div
        className="text-gray-600 mb-4 whitespace-pre-line"
        dangerouslySetInnerHTML={{
          __html: post?.postDescription?.replace(/\n/g, "<br/>"),
        }}
      />

      {/* Post Image */}
      <div className="rounded-lg overflow-hidden p-2">
        {post?.postImage ? (
          <Image
            width={300}
            height={200}
            src={post.postImage}
            alt="Post"
            className="w-full "
          />
        ) : null}
      </div>
    </div>
  );
};

export default PostCard;
