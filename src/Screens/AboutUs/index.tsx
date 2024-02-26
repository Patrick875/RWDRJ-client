import { motion } from "framer-motion";
import Graphic from "../../assets/graphic.png";
import Showing from "../../assets/showing.webp";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import marker from "./../../assets/marker.gif";
import Carousel from "./Carousel";
import { partners, sections } from "../../constants";
import {
	BlogPost,
	CarouselItem,
	EventPost,
	partner,
	section,
} from "../../Shared/types";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import Count from "./Count";
import Slider from "react-slick";
import useFetchData from "../../Hooks/UseFetchData";
import Event from "../../Shared/Event";
import BlogCard from "../../Shared/BlogCard";
import TwitterTimeLine from "./TwitterTimeLine";

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
		<div className="flex-1">
			<Slider {...settings}>
				{partners &&
					partners.map((part: partner, i) => (
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

	const { data: blogs } = useFetchData<BlogPost[]>("/blogs");
	const { data: events } = useFetchData<EventPost[]>("/events");

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
					<div className="flex h-[90vh] flex-col-reverse  flex-1 w-full px-2 md:flex-row">
						<motion.div
							initial="hidden"
							whileInView="visible"
							transition={{ delay: 0.4, duration: 0.4 }}
							viewport={{ once: true, amount: 0.5 }}
							variants={container}
							className="flex flex-col items-center justify-center flex-1 h-full ">
							<img
								loading="lazy"
								className="block h-96 rounded-[10px] "
								src={Showing}
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
										className="w-1/2 py-2 my-6 text-lg text-center transition-all bg-white rounded-full shadow-md outline-none hover:bg-blue-900 hover:text-white">
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
					<div className="grid grid-cols-3 gap-2 ">
						{sections.map((sect: section, i) => (
							<motion.div
								initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ amount: 0.3, once: true }}
								transition={{ duration: 0.4, delay: 0.3 }}
								key={sect.title}
								className="px-4 py-8 flex-1 mt-1 bg-white rounded-[12px]">
								<img
									loading="lazy"
									className="block object-cover rounded-[12px] w-full  h-48  "
									src={sect.img}
									alt={sect.title.toLowerCase()}
								/>
								<div className="flex flex-col w-full pt-0 ">
									<div className="">
										<p className="py-4 text-lg font-bold text-center md:text-start text-bold ">
											{sect.title}
										</p>
										<p className="flex flex-col justify-center font-normal text-center md:text-start ">
											{sect.content}
										</p>
										<div className="flex justify-center md:justify-start">
											<Link
												to={sect.moreLink}
												className="my-4 w-1/2 text-center py-1 rounded-[4px] border-[1.5px] hover:bg-primary-orange hover:text-white transition-all  text-primary-orange bg-white text border-primary-orange">
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

			<motion.section
				id="news"
				viewport={{ once: false, amount: 0.3 }}
				initial={{ opacity: 0.2 }}
				animate={{ opacity: 1 }}
				className="flex flex-col w-5/6 gap-4 px-2 py-4 mx-auto ">
				<div className="w-full mx-auto md:w-2/3">
					<p className="w-full my-1 text-2xl font-bold text-center ">
						Newsroom{" "}
					</p>
				</div>
				<div className="grid grid-cols-1 gap-2 ">
					<div>
						<p className="font-bold ">Latest Blogs</p>
						{blogs && blogs.length === 0 && (
							<p className="text-xs">Latest event posts will be shown here</p>
						)}
						{blogs && blogs.length !== 0 && (
							<div>
								{blogs.slice(0, 1).map((blog: BlogPost) => (
									<BlogCard blog={blog} key={blog.refId} />
								))}
							</div>
						)}
					</div>
					<div>
						<p className="font-bold ">Latest Events</p>
						{events && events.length === 0 && (
							<p className="text-xs">Latest event posts will be shown here</p>
						)}
						{events && events.length !== 0 && (
							<div>
								{events.slice(0, 1).map((event: EventPost) => (
									<Event event={event} key={event.refId} />
								))}
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
				className="w-full py-3 bg-white h-[60vh] flex flex-col">
				<div className="flex-1 w-5/6 py-4 mx-auto">
					<p className="w-full my-1 text-2xl font-bold text-center ">
						Our Partners
					</p>
					<div className="h-[50vh] w-5/6 mx-auto mt-12">
						<Partners partners={partners} />
					</div>
				</div>
			</motion.div>
			<section id="contactus" className="w-5/6 py-8 mx-auto h-[90vh]">
				<p className="py-4 text-2xl font-bold text-center">Contact Us</p>
				<div className="flex flex-col-reverse w-full md:flex-row ">
					<div className="w-full my-2 text-lg md:w-1/2">
						<p className="font-bold text-gray-600 md:text-xl">
							For any queries or concerns, don't hesitate to contact us
						</p>
						<p className="my-2 font-light ">Call us directly</p>
						<p className="my-2 font-bold ">+250782864790</p>
						<p className="my-2 font-light">Contact email</p>
						<p className="my-2 font-bold ">
							womenreproductivejustice@gmail.com
						</p>
						<p className="my-2 font-bold ">eb@womenrepro.org</p>
						<Link
							to="contactus"
							className="w-1/3 p-2 block my-2  text-center font-bold rounded-[4px]  border-[1.5px] hover:bg-slate-800 hover:text-white transition-all  text-slate-800 bg-white  border-slate-800">
							Reach out{" "}
						</Link>
					</div>
					<div className="w-full md:w-1/2 h-[86vh] ">
						<MapContainer
							className="w-full h-[60vh] rounded-[8px] "
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

// <section className="w-full py-6 bg-gradient-to-t from-primary-orange to-primary-orangeTrans">
// 	<div className="grid w-5/6 grid-cols-1 gap-3 py-6 mx-auto bg-white md:gap-0 md:grid-cols-3 font-montserrat ">
// 		<div className="text-center">
// 			<div className="text-2xl font-bold">
// 				<Count interval={6} countTo={151} />
// 			</div>
// 			<p className="font-semibold">Member Doctors</p>
// 		</div>
// 		<div className="text-center">
// 			<div className="flex items-center justify-center text-2xl font-bold ">
// 				<Count interval={50} countTo={1000} />
// 				<p className="text-xl ps-2 font-hanuman">+</p>
// 			</div>
// 			<p className="font-semibold">People Reached</p>
// 		</div>
// 		<div className="text-center">
// 			<div className="text-2xl font-bold">
// 				<Count interval={100} countTo={10} />
// 			</div>
// 			<p className="font-semibold">Partner institutions</p>
// 		</div>
// 	</div>
// </section>;
