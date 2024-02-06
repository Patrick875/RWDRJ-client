import { Link, Outlet, useLocation } from "react-router-dom";

function News() {
	const { pathname } = useLocation();

	const locationInApp = pathname.split("/");

	return (
		<div>
			<div className="flex flex-col items-center justify-center w-full h-56 bg-center bg-cover bg-image-whoweare">
				<div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-page-cover">
					<p className="w-5/6 text-xl font-bold text-center text-white">
						Checkout our latest publications
					</p>
				</div>
			</div>
			<div className="w-5/6 mx-auto ">
				<p className="my-2 text-lg font-extrabold text-center text-sky-900 ">
					Updates, events and publications{" "}
				</p>
				<div className="flex flex-col mt-3 md:flex-row">
					<div className="w-full md:w-1/4 md:h-[70vh] p-3 bg-zinc-300">
						<Link
							className={`block py-3 font-bold text-md ${
								locationInApp.length == 2 ? " text-sky-900 " : "text-black"
							} `}
							to="">
							Blogs
						</Link>
						<Link
							className={`block py-3 font-bold text-md ${
								locationInApp.length == 3 && locationInApp[2] === "events"
									? " text-sky-900 "
									: "text-black"
							} `}
							to="events">
							Events
						</Link>
						<Link
							className={`block py-3 font-bold text-md ${
								locationInApp.length == 3 && locationInApp[2] === "publications"
									? " text-sky-900 "
									: "text-black"
							} `}
							to="publications">
							Publications
						</Link>
					</div>
					<div className="grid flex-1 grid-cols-1 gap-2 p-3 md:grid-cols-3 ">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default News;
