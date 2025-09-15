// import React from "react";
// import { Rocket, BookOpen, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux"
// import { Provider } from "react-redux";
// import logoutpic from "./logout.png"
// const HomePage = () => {
//   const { isAuthentiacted, user } = useSelector((state) => state.auth)
//   const navigate = useNavigate()
//   const categories = [
//     {
//       icon: <Rocket className="w-8 h-8 text-blue-600" />,
//       title: "Writing Tips",
//       desc: "Boost your creativity & writing skills",
//     },
//     {
//       icon: <BookOpen className="w-8 h-8 text-blue-600" />,
//       title: "Stories",
//       desc: "Read inspiring stories from creators",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
//       title: "Trending",
//       desc: "Catch up with the latest hot topics",
//     },
//   ];

//   const blogs = [
//     {
//       id: 1,
//       title: "10 React Tips Every Developer Should Know",
//       desc: "Learn hidden tricks that can save hours of debugging",
//       img: "https://media.istockphoto.com/id/1488105257/photo/chatbot-powered-by-ai-transforming-industries-and-customer-service-yellow-chatbot-icon-over.jpg?s=2048x2048&w=is&k=20&c=y11AUpcpoN4X4e-UUa7S8MSPy2iqpCwKX22mb6rXyBI=",
//     },
//     {
//       id: 2,
//       title: "How to Stay Consistent as a Blogger",
//       desc: "Simple techniques to keep your blogging journey alive",
//       img: "https://images.unsplash.com/photo-1588882929086-51acd6e39954?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NDQwMjgzfHxlbnwwfHx8fHw%3D",
//     },
//     {
//       id: 3,
//       title: "TailwindCSS Magic for Frontend Devs",
//       desc: "Style your app faster with utility-first CSS and just learn a lot",
//       img: "https://images.unsplash.com/photo-1642543491722-f176053e2df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMjQwMTM3fHxlbnwwfHx8fHw%3D",
//     },
//     {
//       id: 4,
//       title: "TailwindCSS Magic for Frontend Devs",
//       desc: "Style your app faster with utility-first CSS",
//       img: "https://images.unsplash.com/photo-1642543491722-f176053e2df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMjQwMTM3fHxlbnwwfHx8fHw%3D",
//     },
//     {
//       id: 5,
//       title: "TailwindCSS Magic for Frontend Devs",
//       desc: "Style your app faster with utility-first CSS",
//       img: "https://images.unsplash.com/photo-1642543491722-f176053e2df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMjQwMTM3fHxlbnwwfHx8fHw%3D",
//     },
//     {
//       id: 6,
//       title: "TailwindCSS Magic for Frontend Devs",
//       desc: "Style your app faster with utility-first CSS",
//       img: "https://images.unsplash.com/photo-1642543491722-f176053e2df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMjQwMTM3fHxlbnwwfHx8fHw%3D",
//     }

//   ];

//   return (
//     <div className="min-h-screen bg-gray-700">
//       {/* Hero Section */}
//       <section className="relative text-center py-24 bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white">

//         {isAuthentiacted ? (
//           <div className="absolute top-6 right-6 flex items-center gap-4 bg-white rounded-full shadow-lg px-5 py-2">
//             <span className="text-lg font-medium text-gray-800">Hello, {user?.name}</span>
//             <button
//               onClick={() => dispatch(logout())}
//               className="flex items-center gap-2 cursor-pointer bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold hover:bg-yellow-300 transition"
//             >
//               <img src={logoutpic} alt="Logout" className="w-5 h-5" />
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="absolute top-6 right-6 flex gap-4">
//             <Link to="/login">
//               <button className="bg-yellow-400 text-black cursor-pointer px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
//                 Login
//               </button>
//             </Link>
//             <Link to="/signup">
//               <button className="bg-yellow-400 text-black cursor-pointer px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
//                 Sign Up
//               </button>
//             </Link>
//           </div>
//         )}

//         <h1 className="text-5xl font-extrabold mb-6">Welcome to Blogify</h1>

//         <p className="text-lg max-w-xl mx-auto mb-10 text-gray-200 leading-relaxed">
//           Explore the best developer stories, coding tutorials, and learning resources from around the world.
//           Empower your knowledge and creativity.
//         </p>

//         <button
//           type="button"
//           onClick={() => navigate("/Explore")}
//           className="bg-yellow-400 text-black px-6 py-3 cursor-pointer rounded-full text-lg font-semibold hover:bg-yellow-300 transition"
//         >
//           Explore Blogs →
//         </button>
//         <button
//           type="button"
//           onClick={() => navigate("/CreateBlog")}
//           className="bg-yellow-400 text-black ml-4 px-6 py-3 cursor-pointer rounded-full text-lg font-semibold hover:bg-yellow-300 transition"
//         >
//           Create Blog →
//         </button>

//       </section>



//       {/* Categories Section */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">Categories</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {categories.map((cat, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-700 p-8 rounded-2xl shadow hover:shadow-2xl transition text-center"
//             >
//               <div className="flex justify-center mb-4 cursor-pointer">{cat.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
//               <p className="text-white">{cat.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Latest Blogs Section */}
//       <section className="py-16 bg-gray-700 px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">Latest Blogs</h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {blogs.map((blog) => (
//             <div
//               key={blog.id}
//               className="bg-gray-700 rounded-2xl shadow overflow-hidden hover:shadow-2xl transition"
//             >
//               <img
//                 src={blog.img}
//                 alt={blog.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
//                 <p className="text-white mb-4">{blog.desc}</p>
//                 <button className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-gray-600 transition">
//                   Read More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;










import React from "react";
import { Rocket, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Provider } from "react-redux";
import logoutpic from "./logout.png"
import axios from "axios"
import { logoutsuccess } from "../src/Strore/authslice";
const HomePage = () => {
  const { isAuthentiacted, user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const categories = [
    {
      icon: <Rocket className="w-8 h-8 text-[#ffbf00]" />,
      title: "Writing Tips",
      desc: "Boost your creativity & writing skills",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#ffbf00]" />,
      title: "Stories",
      desc: "Read inspiring stories from creators",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#ffbf00]" />,
      title: "Trending",
      desc: "Catch up with the latest hot topics",
    },
  ];
  const blogs = [
    {
      id: 1,
      title: "10 React Tips Every Developer Should Know",
      desc: "Learn hidden tricks that can save hours of debugging",
      img: "https://media.istockphoto.com/id/1488105257/photo/chatbot-powered-by-ai-transforming-industries-and-customer-service-yellow-chatbot-icon-over.jpg?s=2048x2048&w=is&k=20&c=y11AUpcpoN4X4e-UUa7S8MSPy2iqpCwKX22mb6rXyBI=",
    },
    {
      id: 2,
      title: "How to Stay Consistent as a Blogger",
      desc: "Simple techniques to keep your blogging journey alive",
      img: "https://images.unsplash.com/photo-1588882929086-51acd6e39954?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NDQwMjgzfHxlbnwwfHx8fHw%3D",
    },
    {
      id: 3,
      title: "TailwindCSS Magic for Frontend Devs",
      desc: "Style your app faster with utility-first CSS and just learn a lot",
      img: "https://images.unsplash.com/photo-1642543491722-f176053e2df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMjQwMTM3fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 4,
      title: "TailwindCSS Magic for Frontend Devs",
      desc: "Style your app faster with utility-first CSS",
      img: "https://images.unsplash.com/photo-1642543491722-f176053e2df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMjQwMTM3fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 5,
      title: "TailwindCSS Magic for Frontend Devs",
      desc: "Style your app faster with utility-first CSS",
      img: "https://images.unsplash.com/photo-1642543491722-f176053e2df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMjQwMTM3fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 6,
      title: "TailwindCSS Magic for Frontend Devs",
      desc: "Style your app faster with utility-first CSS",
      img: "https://images.unsplash.com/photo-1642543491722-f176053e2df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMjQwMTM3fHxlbnwwfHx8fHw%3D",
    }
  ];

  const logouthandler = async() => {
        await axios.get("http://localhost:8000/api/v1/logout", { withCredentials: true })
        dispatch(logoutsuccess())
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization'];
        navigate('/')
  }
  return (
    <div className="min-h-screen bg-[#252E8A]">
      {/* Hero Section */}
      <section className="relative text-center py-24 bg-gradient-to-r from-[#9A4D87] to-[#5A7FC8] text-white">
        {isAuthentiacted ? (
          <div className="absolute top-6 right-6 flex items-center gap-4 bg-white rounded-full shadow-lg px-5 py-2">
            {/*             <span className="text-lg font-medium text-gray-800">Hello, {user?.name}</span> */}
            <button
              onClick={() => {
                logouthandler()
                
                // dispatch(logoutsuccess())
                // navigate('/')
              }
              }     
              className="flex items-center gap-2 cursor-pointer bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              <img src={logoutpic} alt="Logout" className="w-5 h-5" />
              Logout
            </button>
          </div>
        ) : (
          <div className="absolute top-6 right-6 flex gap-4">
            <Link to="/login">
              <button className="bg-yellow-400 text-black cursor-pointer px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-yellow-400 text-black cursor-pointer px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
                Sign Up
              </button>
            </Link>
          </div>
        )}
        <h1 className="text-5xl font-extrabold mb-6">Welcome to Blogify</h1>
        <p className="text-lg max-w-xl mx-auto mb-10 text-gray-200 leading-relaxed">
          Explore the best developer stories, coding tutorials, and learning resources from around the world.
          Empower your knowledge and creativity.
        </p>
        <button
          type="button"
          onClick={() => navigate("/Explore")}
          className="bg-yellow-400 text-black px-6 py-3 cursor-pointer rounded-full text-lg font-semibold hover:bg-yellow-300 transition"
        >
          Explore Blogs →
        </button>

        {isAuthentiacted ? (
          <button
            type="button"
            onClick={() => navigate("/CreateBlog")}
            className="bg-yellow-400 text-black ml-4 px-6 py-3 cursor-pointer rounded-full text-lg font-semibold hover:bg-yellow-300 transition"
          >
            Create Blog →
          </button>
        ) : (null)}

      </section>
      {/* Categories Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff4f] p-8 rounded-2xl shadow hover:shadow-2xl transition text-center"
            >
              <div className="flex justify-center mb-4 cursor-pointer">{cat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-[#ffd9fc]">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Latest Blogs Section */}
      <section className="py-16 bg-[#252E8A] px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blogs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-700 rounded-2xl shadow overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-white mb-4">{blog.desc}</p>
                <button className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-gray-600 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
