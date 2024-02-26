import { motion } from "framer-motion";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import marker from "./../../assets/marker.gif";
import Carousel from "./Carousel";
import { partners, sections } from "../../constants";
import { CarouselItem, NewsItem, partner, section } from "../../Shared/types";
import { Link, useNavigate } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import Count from "./Count";
import Slider from "react-slick";
import useFetchData from "../../Hooks/UseFetchData";

import TwitterTimeLine from "./TwitterTimeLine";
import { HiCalendarDays } from "react-icons/hi2";

function Partners({ partners }: { partners: partner[] }) {
	const settings = {
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	};
	return (
		<div className="flex-1 partner-slider">
			<Slider {...settings}>
				{partners &&
					partners.map((part: partner) => (
						<div className="relative block group" key={crypto.randomUUID()}>
							<div className="h-32 w-full  group-hover:visible invisible z-20 absolute  bg-[rgba(0,0,0,0.44)]">
								<Link
									to={part.link}
									target="blank"
									className="flex items-center justify-center w-full h-32">
									<TbWorld className="w-8 h-8 text-white" />
								</Link>
							</div>
							<img
								loading="lazy"
								src={part.img}
								className="block object-contain w-full h-32 bg-transparent md:object-center "
							/>
						</div>
					))}
			</Slider>
		</div>
	);
}

const AboutUs = () => {
	const container = {
		visible: {
			hidden: { opacity: 0 },
			visible: { opacity: 1 },
			transition: { staggerChildren: 0.2 },
		},
	};
	const containerSides = {
		offscreen: {
			y: 300,
		},
		onscreen: {
			y: 50,
			rotate: -10,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};

	const customIcon = new Icon({
		iconUrl: marker,
		iconSize: [38, 38],
	});

	const carouselItems: CarouselItem[] = [
		{
			img: "bg-image-1",
			text: "We are a network of young women physicians in Rwanda.",
		},
		{ img: "bg-image-2", text: "We are advocates for Reproductive Justice" },
		{
			img: "bg-image-3",
			text: "We train women in the medical profession on digital and SRHR",
		},
	];

	const navigate = useNavigate();
	const { data: news } = useFetchData<NewsItem[]>("/news");

	return (
		<div>
			<section
				id="aboutus"
				className=" flex flex-col min-h-[110vh] overflow-x-hidden">
				<Carousel
					items={carouselItems}
					className="w-full m-0 h-96 sm:h-64 xl:h-80 2xl:h-96"
				/>
			</section>
			<section id="whatwedo" className=" bg-primary-orangeTrans">
				<div className="flex justify-center w-5/6 mx-auto">
					<div className="flex min-h-[90vh] flex-col  flex-1 w-full px-2 md:flex-row">
						<motion.div
							initial="hidden"
							whileInView="visible"
							transition={{ delay: 0.4, duration: 0.4 }}
							viewport={{ once: true, amount: 0.5 }}
							variants={container}
							className="flex flex-col items-center justify-center flex-1 h-full ">
							<img
								loading="lazy"
								className="block object-contain md:mt-0 mt-4 rounded-[10px] "
								src="https://res.cloudinary.com/didikwl4i/image/upload/v1708953566/RWDJ-IMAGES/showing_aou8ga.webp"
								alt="woman-graphic"
							/>
						</motion.div>

						<div className="flex flex-col items-center justify-center w-full md:w-1/2 ">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5 }}
								transition={{ delay: 0.6, duration: 0.8 }}
								variants={{
									hidden: { opacity: 0, x: -50 },
									visible: { opacity: 1, x: 0 },
								}}
								className="p-6 py-0 pt-4 ">
								<p className="w-full text-2xl font-bold text-center md:text-start md:w-1/2">
									Who we are
								</p>
								<p className="my-3 text-lg text-center md:text-start">
									{" "}
									We are a dedicated network of young women physicians based in
									Rwanda, committed to advocating for Reproductive Justice.
									Through our work, we empower and educate women in the medical
									field, providing training on digital healthcare tools and
									Sexual and Reproductive Health and Rights (SRHR). Our mission
									is to ensure access to comprehensive healthcare services while
									promoting gender equity and rights for all individuals.
								</p>
								<div className="flex justify-center ">
									<Link
										to="mission"
										className="w-full py-2 my-6 text-lg text-center transition-all bg-white rounded-full shadow-md outline-none md:w-1/2 hover:bg-blue-900 hover:text-white">
										More about us
									</Link>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full bg-blue-900">
				<motion.div
					id="whatwedo"
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.4, duration: 0.6 }}
					viewport={{ amount: 0.9 }}
					variants={containerSides}
					className="flex flex-col w-5/6 gap-4 py-4 mx-auto ">
					<div className="w-2/3 mx-auto">
						<p className="w-full my-1 text-2xl font-bold text-center text-white">
							What we do
						</p>
					</div>
					<div className="flex flex-col ">
						{sections.map((sect: section, i) => (
							<motion.div
								initial={{ opacity: 0, x: i % 2 !== 1 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ amount: 0.3, once: true }}
								transition={{ duration: 0.4, delay: 0.3 }}
								key={sect.title}
								className={`flex flex-col md:flex-row flex-1  p-8 bg-white ${
									i % 2 !== 0 && " md:flex-row-reverse "
								} `}>
								<img
									loading="lazy"
									className="block object-cover rounded-[12px] w-full md:w-1/2 h-56  "
									src={sect.img}
									alt={sect.title.toLowerCase()}
								/>
								<div className="flex flex-col w-full pt-0 md:px-6 md:w-1/2">
									<div className="flex-1">
										<p className="my-4 mb-4 text-xl font-bold text-center md:text-start md:mt-0 text-bold ">
											{sect.title}
										</p>
										<p className="flex flex-col justify-center font-normal text-center md:text-justify">
											{sect.content}
										</p>
										<div className="flex justify-center md:justify-start">
											<Link
												to={sect.moreLink}
												className="my-4 px-6 py-1 rounded-full md:rounded-[4px] text-lg border-[1.5px] hover:bg-primary-orange hover:text-white transition-all  text-primary-orange bg-white  border-primary-orange">
												Read More
											</Link>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>
			<section className="w-full py-6 bg-gradient-to-t from-primary-orange to-primary-orangeTrans">
				<div className="grid w-5/6 grid-cols-1 gap-3 py-6 mx-auto bg-white md:gap-0 md:grid-cols-3 font-montserrat ">
					<div className="text-center">
						<div className="text-2xl font-bold">
							<Count interval={6} countTo={151} />
						</div>
						<p className="font-semibold">Member Doctors</p>
					</div>
					<div className="text-center">
						<div className="flex items-center justify-center text-2xl font-bold ">
							<Count interval={6} countTo={200} />
							<p className="text-xl ps-2 font-hanuman">+</p>
						</div>
						<p className="font-semibold">People Reached</p>
					</div>
					<div className="text-center">
						<div className="text-2xl font-bold">
							<Count interval={100} countTo={10} />
						</div>
						<p className="font-semibold">Partner institutions</p>
					</div>
				</div>
			</section>
			;
			<motion.section
				id="news"
				viewport={{ once: false, amount: 0.3 }}
				initial={{ opacity: 0.2 }}
				animate={{ opacity: 1 }}
				className="flex flex-col w-5/6 gap-4 px-2 py-4 mx-auto  min-h-[60vh]">
				<div className="w-full mx-auto md:w-2/3">
					<p className="w-full my-1 text-2xl font-bold text-center ">
						Newsroom{" "}
					</p>
				</div>
				<div className="grid flex-1 grid-cols-1 gap-2 md:grid-cols-3">
					<div className="h-full">
						{news && news.length === 0 && <p className="text-xs">News Room</p>}
						{news && news.length !== 0 && (
							<div className="h-full">
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
														? new Date(blog.datestart).toLocaleDateString(
																"fr-FR"
														  )
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
			</motion.section>
			<motion.section
				id="news"
				viewport={{ once: false, amount: 0.3 }}
				initial={{ opacity: 0.2 }}
				animate={{ opacity: 1 }}
				className="flex flex-col w-5/6 gap-4 px-2 py-4 mx-auto ">
				<div className="w-full mx-auto md:w-2/3">
					<p className="w-full my-1 text-2xl font-bold text-center ">
						Follow us{" "}
					</p>
				</div>
				<div className="grid grid-cols-1 gap-2 ">
					<div>
						<p className="font-bold ">RWDRJ Tweets</p>
						<TwitterTimeLine profile="doctors_women" />
					</div>
				</div>
			</motion.section>
			<motion.div
				id="ourpartners"
				viewport={{ once: true, amount: 0.2 }}
				initial={{ opacity: 0.1, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 0.4 }}
				className="w-full py-3 bg-white  min-h-[40vh] md:min-h-[60vh] flex flex-col">
				<div className="flex-1 w-5/6 py-4 mx-auto">
					<p className="w-full my-1 text-2xl font-bold text-center ">
						Our Partners
					</p>
					<div className="md:h-[50vh] w-5/6 mx-auto mt-12">
						<Partners partners={partners} />
					</div>
				</div>
			</motion.div>
			<section id="contactus" className="w-5/6 md:py-8 mx-auto min-h-[90vh]">
				<p className="py-4 text-2xl font-bold text-center">Contact Us</p>
				<div className="flex flex-col-reverse items-center w-full md:items-start md:flex-row ">
					<div className="w-full my-6 text-lg md:w-1/2">
						<p className="font-bold text-center text-gray-600 md:text-start md:text-xl">
							For any queries or concerns, don't hesitate to contact us
						</p>
						<p className="my-2 font-light text-center md:text-start">
							Call us directly
						</p>
						<p className="my-2 font-bold text-center md:text-start ">
							+250782864790
						</p>
						<p className="my-2 font-light text-center md:text-start">
							Contact email
						</p>
						<p className="my-2 font-bold text-center md:text-start">
							womenreproductivejustice@gmail.com
						</p>
						<p className="my-2 font-bold text-center md:text-start">
							eb@womenrepro.org
						</p>

						<Link
							to="contactus"
							className="md:w-1/3 w-full   p-2 block my-4 md:my-2  text-center font-bold rounded-full md:rounded-[4px]  border-[1.5px] hover:bg-slate-800 hover:text-white transition-all  text-slate-800 bg-white  border-slate-800">
							Reach out{" "}
						</Link>
					</div>
					<div className="w-full md:w-1/2 min-h-[60vh] md:min-h-[86vh] ">
						<MapContainer
							className="w-full min-h-[60vh] rounded-[8px] "
							center={[-1.936763, 30.089463]}
							zoom={13}
							scrollWheelZoom={false}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Marker icon={customIcon} position={[-1.936763, 30.089463]}>
								<Popup>
									<p className="font-bold text-primary-orange">KG 216 ST 20</p>
								</Popup>
							</Marker>
						</MapContainer>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
