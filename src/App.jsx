import Posts from "./components/Posts.tsx";
import {useState} from "react";
import Upload from "./components/Upload.tsx";

function App() {

    const [selectedColor, setSelectedColor] = useState("all");
    const [posts, setPosts] = useState([
            {
                "title": "Exciting News!",
                "body": "Discover the latest updates and insights in our first post. We delve into the most recent developments and provide in-depth analysis to keep you informed and engaged. Stay tuned for more exciting content and updates.",
                "color": "post_green"
            },
            {
                "title": "Important Announcement",
                "body": "Stay informed with crucial information in our second post. This announcement covers significant changes and updates that you need to be aware of. Make sure to read through to understand how these changes might affect you and what steps you should take next.",
                "color": "post_red"
            },
            {
                "title": "Weekly Highlights",
                "body": "Catch up on the most important events of the week in our third post. From major news stories to interesting tidbits, we compile everything you need to know to stay up-to-date. Don't miss out on our comprehensive weekly roundup.",
                "color": "post_yellow"
            },
            {
                "title": "Special Feature",
                "body": "Dive into an in-depth analysis and special content in our fourth post. This feature article explores a unique topic with detailed insights and expert opinions. Perfect for readers looking for a deep dive into a fascinating subject.",
                "color": "post_green"
            }
        ]
    )

  return (
    <>
        <div className="flex flex-col">
            <div className="flex mt-10 mb-24">
                <div className="flex w-3/4">
                    <div className="flex-col mx-16 w-full">
                        <div className="flex justify-between">
                            <h1 className="font-bold text-5xl text-gray-800">Posts</h1>
                            <div className="flex">
                                <button
                                    className={"border-2 border-white w-fit h-fit self-center p-1 px-4 rounded-xl hover:bg-gray-300 bg-gradient-to-r from-post_red via-post_yellow to-post_green " +
                                        (selectedColor === "all" ? "font-bold" : " ")}
                                    onClick={() => setSelectedColor("all")}
                                    disabled={selectedColor === "all"}
                                >
                                    All
                                </button>
                                <button
                                    className={"border-2 border-white w-fit h-fit self-center p-1 px-4 rounded-xl hover:bg-gray-300 bg-post_green " +
                                        "" + (selectedColor === "green" ? "font-bold" : "")}
                                    onClick={() => setSelectedColor("green")}
                                    disabled={selectedColor === "green"}
                                >Green
                                </button>
                                <button
                                    className={"border-2 border-white w-fit h-fit self-center p-1 px-4 rounded-xl hover:bg-gray-300 bg-post_red " +
                                        "" + (selectedColor === "red" ? "font-bold" : "")}
                                    onClick={() => setSelectedColor("red")}
                                    disabled={selectedColor === "red"}
                                >Red
                                </button>
                                <button
                                    className={"border-2 border-white w-fit h-fit self-center p-1 px-4 rounded-xl hover:bg-gray-300 bg-post_yellow " +
                                        "" + (selectedColor === "yellow" ? "font-bold" : "")}
                                    onClick={() => setSelectedColor("yellow")}
                                    disabled={selectedColor === "yellow"}
                                >Yellow
                                </button>

                            </div>
                        </div>
                        <div className="flex-col space-y-3 my-5 ">
                            <Posts selectedColor={selectedColor} posts={posts}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-grow">
                    <Upload setPosts={setPosts} posts={posts}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
