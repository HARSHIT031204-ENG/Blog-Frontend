import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Eye, Heart, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { postreducer } from "../src/Strore/shareSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";


export default function FinanceDashboard() {

  const dispatch = useDispatch()  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [islike, setislike] = useState(false)
  const [likecount, setlikecount] = useState(0)
  const [likespost, setlikespost] = useState({})
  const [watchcount, setwatchcount] = useState(0)
  const nevigate = useNavigate();
  const user = useSelector((state) => state.auth.user);



  const [usfu, setusfu ] = useState(null)
  const handleClick = (ID) => {
    dispatch(postreducer(`https://localhost:8000/api/v1/post/${ID}`))
    nevigate("/share");
  };
  
  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/allpost",
          {
            withCredentials: true,
          }
        );
        setPosts(response.data.post);
      } catch (error) {
        console.log("Error fetching posts:", error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, []);

  if (loading) {
    return <p className="text-white text-center mt-10">Loading posts...</p>;
  }

  const likefunction = (ID) => {
    setlikespost((prev) => {
      const post = prev[ID] || { count: 0, liked: false }
      return {
        ...prev,
        [ID]: {
          count: post.liked ? post.count - 1 : post.count + 1,
          liked: !post.liked,
        },
      };
    })
    
    // if(islike) {
    //     setlikecount(likecount-1)
    // } else {
    //     setlikecount(likecount+1)
    // }

    // setislike(!islike)
  }

  return (
    <>
      <div className="max-w-4xl mx-auto my-24 shadow-lg rounded-lg flex flex-col p-6 space-y-6">
        {posts.map((blog, idx) => (
          <div
            key={idx}
            className="flex flex-col space-y-4 bg-white p-4 rounded-2xl"
          >
            {/* Date Section */}
            <div className="text-center text-gray-300 ">
              <div className="text-6xl font-bold">12</div>
              <div className="uppercase text-lg mt-2">January</div>
            </div>

            {/* Blog Cover Image + Actions */}
            <div className="relative">
              <img
                src={blog.coverimg}
                alt="Blog Post"
                className="w-full  min-h-96 max-h-96 object-fill rounded-lg shadow-md"
              />

              {/* Action Buttons */}
              <div className="flex justify-around items-center bg-gray-100 rounded-b-lg p-3 mt-2 shadow-inner">
                <button className="text-gray-600 flex hover:text-gray-800" onClick={() => {setislike(!islike), likefunction(blog._id)}}>
                  <Heart className="w-5 h-5 cursor-pointer" />
                  <span className="ml-1 text-sm">{likespost[blog._id]?.count || 0}</span>
                </button>

                <button className="text-gray-600 flex hover:text-gray-800">
                  <Eye className="w-5 h-5 cursor-pointer" />
                  <span className="ml-1 text-sm">1</span>
                </button>

                <button
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  onClick={() => handleClick(blog._id)}
                >
                  <Share2 className="w-5 h-5 cursor-pointer" />
                </button>
              </div>
            </div>

            {/* Blog Content */}
            <div className="flex-1 flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                Why you Need More Magnesium in Your Daily Diet
              </h2>

              <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                Magnesium is one of the six essential macro-minerals required by
                the body for energy production and synthesis of protein and
                enzymes. It contributes to the development of bones and most
                importantly it is responsible for synthesis of your DNA and RNA.
                A new report in the British Journal of Cancer gives you another
                reason to add more magnesium to your diet...
              </p>
            </div>
          </div>
        ))}

        
      </div>
    </>
  );
}
