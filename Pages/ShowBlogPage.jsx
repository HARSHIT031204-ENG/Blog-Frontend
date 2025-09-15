import { useSelector } from "react-redux";

export default function ShowBlogPage() {
  const Bloglist = useSelector((state) => state.blog);
    const Blog1 = [Bloglist['bloglist'][0].post];
    // console.log(Blog1);
    
  if (!Blog1 || Blog1.length === 0)
    return <p className="text-white text-center mt-10">No blog data found</p>;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="bg-gray-800 shadow-xl rounded-2xl w-full max-w-3xl p-8">
        {Blog1.map((Blog, idx) => (
          <div key={idx} className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-4">📝 {Blog.title}</h1>
               
                
            {Blog.coverimg && (
              <div className="mb-6">
                <img
                  src={Blog.coverimg}
                  alt="Cover"
                  className="w-full h-64  object-contain rounded-lg border border-gray-600"
                />
              </div>
            )}

            <div
              className="prose prose-invert max-w-none text-gray-200 mb-6"
              dangerouslySetInnerHTML={{ __html: Blog.description }}
            />

            {/* Categories */}
            {Blog.categories && (
              <p className="text-lg text-gray-300 mb-2">✨ {Blog.categories}</p>
            )}

            {/* Tags */}
            {Blog.tags && (
              <p className="text-lg text-gray-300">🏷️ {Blog.tags}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
