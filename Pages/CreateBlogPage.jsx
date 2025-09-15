import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { blogcontent } from "../src/Strore/blogslice.js";
import { useDispatch } from "react-redux";

export default function CreateBlogPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    coverimg: null,
    description: "",
    categories: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("tags", formData.tags);
    data.append("categories", formData.categories);
    data.append("description", formData.description);
    data.append("coverimg", formData.coverimg);

    try {
      const res = await axios.post("http://localhost:8000/api/v1/post", data, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      dispatch(blogcontent(res.data));

      navigate("/Trial");
    } catch (error) {
      console.error("Error publishing blog:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 shadow-xl rounded-2xl w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold text-white mb-6">
          ✍️ Create New Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-300 mb-2">Blog Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Cover Image  */}

          <div>
            <label className="block text-gray-300 mb-2">Cover Image </label>
            <input
              type="file"
              name="coverimg"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, coverimg: e.target.files[0] })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-300 mb-2">Description</label>

            <Editor
              apiKey={import.meta.env.VITE_TINY_API_KEY}
              value={formData.description}
              onEditorChange={(content) =>
                setFormData({ ...formData, description: content })
              }
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic underline forecolor backcolor | alignleft aligncenter" +
                  "alignright alignjustify | bullist numlist outdent indent |" +
                  "removeformat | help ",

                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block text-gray-300 mb-2">Category</label>
            <input
              type="text"
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              placeholder="e.g. Technology, Lifestyle"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-300 mb-2">Tags</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="e.g. react, webdev, ai"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-semibold transition duration-200"
          >
            ✈️ Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
}
