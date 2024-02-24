import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { BlogPost } from "../../../Shared/types";
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
						className="w-full h-48 bg-center bg-cover rounded-[8px]"
						style={{ backgroundImage: `url(${blog.coverImage})` }}>
						<div className="bg-[rgb(0,0,0,0.6)] h-48 flex justify-center items-center">
							<div>
								<p className="w-full p-2 text-center text-white bg-transparent font-hanuman focus:border-blue-500 ">
									{blog.title}
								</p>
							</div>
						</div>
					</div>

					{blog && (
						<div className="w-5/6 py-3 mx-auto text-lg">
							<div className="p-4 mb-3 bg-gray-300">
								{blog.postedBy && (
									<p className="my-3 font-bold">
										<span className="font-semibold"> by</span> {blog.postedBy}{" "}
									</p>
								)}
								<p className="font-bold">
									{new Date(blog.datePosted).toLocaleDateString()}
								</p>
							</div>

							{parse(blog.content)}
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default BlogDetails;
