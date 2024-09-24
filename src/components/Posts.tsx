import {useQuery} from "@tanstack/react-query";

export default function Posts({selectedColor, posts}){




   return(
       <>{
           posts.map((post, index) => {
                if("post_" + selectedColor !== post.color && selectedColor !== "all"){
                    return null;
                }
               return (
                   <div className={"border-4 flex-col border-white rounded-xl p-4 italic space-y-3 bg-" + post.color}
                        key={post.title + index}
                   >
                       <h2 className="flex rounded-xl p-2 text-lg font-bold bg-white">
                           {post.title}
                       </h2>
                       <h3 className="flex bg-white rounded-xl p-2 text-md min-h-32 bg-white">
                           {post.body}
                       </h3>
                   </div>
               )


           })}
       </>

   )
}