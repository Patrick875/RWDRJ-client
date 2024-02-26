import { Link, Outlet, useLocation } from "react-router-dom";

function News() {
	const { pathname } = useLocation();

	const locationInApp = pathname.split("/");

	return (
		<div>
			<div className="flex flex-col items-center justify-center w-full h-56 bg-center bg-cover bg-image-whoweare">
				<div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-page-cover">
					<p className="w-5/6 text-xl font-bold text-center text-white">
						{locationInApp.length == 2 ? "Blogs" : "Events"}
					</p>
				</div>
			</div>
			<div className="w-11/12 mx-auto ">
				<div className="relative flex mt-3 md:flex-row ">
					<div className="p-3 md:w-1/5">
						<div className="sticky top-0">
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
							</Link>{" "}
						</div>
					</div>
					<div className="flex-1 md:w-4/5 ">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default News;
