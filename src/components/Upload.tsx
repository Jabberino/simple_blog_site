import {useEffect, useState} from "react";

export default function Upload({posts, setPosts}){

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [color, setColor] = useState<string>("Green");

    function handleSubmit(event){
        event.preventDefault();

        const pickedColor = () => {
            switch(color){
                case "Green":
                    return "post_green"
                case "Red":
                    return "post_red"
                case "Yellow":
                    return "post_yellow"
            }
        }
        let currentPosts = [...posts];
        currentPosts.push({
            title: title,
            body: body,
            color: pickedColor(),
        })

        setPosts(currentPosts);

    }

    return(
            <div className="flex-col border-4 border-white rounded-lg bg-gray-100 w-full h-fit pt-3 pb-7 mr-14 px-4 space-y-2">
                <h2 className="text-2xl font-semibold text-gray-700">Submit a post</h2>
                <form className="space-y-3"
                      onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        className="w-full rounded-lg px-2 italic"
                        required
                    />
                    <textarea
                        placeholder="Body"
                        rows={8}
                        value={body}
                        onChange={(e)=>setBody(e.target.value)}
                        className="w-full rounded-lg px-2 italic"
                        required
                    />
                    <select id="color-select" name="color-select"
                            className="mt-1 block w-2/3 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md italic"
                        onChange={(e)=>setColor(e.target.value)}
                            value={color}
                    >
                        <option>Green</option>
                        <option>Red</option>
                        <option>Yellow</option>
                    </select>
                    <button
                        type="submit"
                        className="border border-white px-2 rounded-md bg-white font-medium text-gray-700"
                    >Submit
                    </button>
                </form>

            </div>
    );
}