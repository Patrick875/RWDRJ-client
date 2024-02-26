import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { BlogPost } from "../../Shared/types";
import useFetchData from "../../Hooks/UseFetchData";

function BlogDetails() {
	const { refId } = useParams();
	const { data: blog, loading } = useFetchData<BlogPost>(`/blogs/${refId}`);

	return (
		<div>
			{loading && <p>Loading ...</p>}
			{!loading && blog && (
				<div>
					<div
						className="w-full min-h-[60vh] bg-center flex flex-col bg-cover rounded-[8px]"
						style={{ backgroundImage: `url(${blog.coverImage})` }}>
						<div className="bg-[rgb(0,0,0,0.6)] flex-1 flex justify-center items-center">
							<div className="w-5/6 mx-auto">
								<p className="w-full p-2 text-3xl text-center text-white bg-transparent font-lora focus:border-blue-500 ">
									{blog.title}
								</p>
							</div>
						</div>
					</div>

					{blog && (
						<div className="w-5/6 py-6 mx-auto text-xl text-center md:py-3 md:text-start">
							{parse(blog.content)}
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default BlogDetails;
