import { useEffect, useState } from "react";
import { getDevPost } from '@arifszn/blog-js'



export default function ExplorePage() {
    const [post, setpost] = useState([])
    const [loading, setloading] = useState(true)
    const [query, setQuery] = useState("");    
    useEffect(() => {
        const fetchpost = async () => {
            try {
                const data = await getDevPost({
                    user: 'ingosteinke',
                })
                setpost(data)
            } catch (error) {
                console.log("error in explore useeffect", error);

            } finally {
                setloading(false)
            }

        }
        fetchpost()
    }, [])

    // Filter posts based on query
    const filteredPosts = post.filter((post) => (
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.categories.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))

    ))
    return (
        <div className="min-h-screen bg-gray-700">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Explore
                        </h1>
                        <p className="text-muted-foreground mt-1">
                            Discover trending articles, fresh drops, and hidden gems.
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="flex w-full md:w-auto flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="relative w-full sm:w-80">
                            {/* If using lucide-react icons */}
                            {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" /> */}
                            <input
                                type="text"
                                placeholder="Search articles, tags, authors..."
                                className="pl-3 pr-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Blog posts grid */}

                {loading ? (
                    <p className="mt-8 text-center text-gray-400">Loading posts...</p>
                ) : (
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post, idx) => (


                            <div key={idx}
                                className="bg-gray-800 rounded-2xl shadow hover:shadow-md transition overflow-hidden">
                                <img
                                    src={post.thumbnail}
                                    alt={post.title}
                                    className="h-48 w-full object-cover"
                                />

                                <div className="p-4">
                                    <h2 className="font-semibold text-lg line-clamp-2 text-white">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                                        <span>{post.categories?.[0] || "General"}</span>
                                        <a
                                            href={post.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-400 hover:underline"
                                        >
                                            Read →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )

                }



                {!loading && filteredPosts.length === 0 && (
                    <p className="mt-8 text-center text-gray-500">No posts found.</p>
                )}

            </div>
        </div>
    );
}
