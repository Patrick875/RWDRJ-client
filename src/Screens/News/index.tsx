import { HiCalendarDays } from "react-icons/hi2";
// import useFetchData from "../../Hooks/UseFetchData";
import { NewsItem } from "../../Shared/types";

function News() {
	// const { data: news } = useFetchData<NewsItem[]>("/news");
	const news: NewsItem[] = [];
	return (
		<div>
			<div className="flex flex-col items-center justify-center w-full min-h-[60vh] bg-center bg-cover bg-image-whoweare">
				<div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-[rgba(244,244,249,0.70)]">
					<p className="w-5/6 text-3xl font-bold text-center text-black font-lora">
						News and other updates
					</p>
				</div>
			</div>
			<div className="w-11/12 mx-auto ">
				<div className="min-h-[80vh]">
					{(news && news.length === 0) ||
						(!news && (
							<p className="text-2xl text-center text-gray-500">
								No current content !!
							</p>
						))}
					{news && news.length !== 0 && (
						<div className="grid h-full grid-cols-2 md:grid-cols-4">
							{news.map((blog) =>
								Object.keys(blog).includes("content") ? (
									<div
										className="w-full bg-white rounded-[8px] hover group cursor-pointer"
										onClick={() => {
											navigate(`news/blogs/${blog.refId}`);
										}}>
										<div className="relative flex items-center justify-center h-32 overflow-hidden ">
											<img
												src={blog.coverImage}
												className="absolute block object-cover w-full h-full my-2 transition-all ease-in delay-75 group-hover:scale-105 "
											/>
										</div>
										<p className="px-2 py-1 text-xl font-bold capitalize">
											{blog.title}
										</p>
										{/* {<p className="px-2 py-1 text-lg capitalize">{content}</p>} */}

										<div className="px-2 py-2 ">
											<p className="text-sm font-bold">RWDRJ</p>
											<p className="text-xs ">
												{blog.datePosted && blog.datePosted
													? new Date(blog.datePosted).toLocaleDateString(
															"fr-FR"
													  )
													: null}
											</p>
										</div>
									</div>
								) : (
									<div
										onClick={() => {
											navigate(`news/events/${blog.refId}`);
										}}
										className="w-full bg-white rounded-[8px] cursor-pointer  group">
										<div className="relative flex items-center justify-center h-32 overflow-hidden">
											<img
												src={blog.coverImage}
												className="absolute block object-cover w-full h-full my-2 transition-all ease-in delay-75 group-hover:scale-105 "
											/>
										</div>
										<p className="px-2 py-1 font-bold capitalize ">
											{blog.title}
										</p>

										<div className="px-2 py-2 font-bold">
											<p className="flex items-center gap-2 text-xs ">
												<HiCalendarDays className="text-lg text-gray-500 " />
												{blog.datestart
													? new Date(blog.datestart).toLocaleDateString("fr-FR")
													: null}{" "}
												<span className="font-bold"> - </span>
												{blog.dateend
													? new Date(blog.dateend).toLocaleDateString("fr-FR")
													: null}
											</p>
											<p className="text-sm ">RWDRJ</p>
										</div>
									</div>
								)
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default News;
