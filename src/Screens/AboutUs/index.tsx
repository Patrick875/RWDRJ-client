import { Timeline } from "react-twitter-widgets";
import { motion } from "framer-motion";
import Graphic from "../../assets/graphic.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import marker from "./../../assets/marker.gif";
import Carousel from "./Carousel";
import { partners, sections } from "../../constants";
import { section } from "../../Shared/types";
import { Link } from "react-router-dom";

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

	const carouselImages: string[] = ["bg-image-1", "bg-image-2", "bg-image-3"];

	return (
		<div>
			<section
				id="aboutus"
				className="flex flex-col min-h-[90vh] overflow-x-hidden">
				<Carousel
					images={carouselImages}
					className="w-full m-0 h-96 sm:h-64 xl:h-80 2xl:h-96">
					<div className="flex flex-col w-full h-full gap-4 mx-auto font-montserrat md:w-5/6 ">
						<motion.div
							initial={{ y: -110, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 1.2, duration: 0.8 }}
							className="flex flex-col justify-center flex-1 w-full gap-4 mx-auto md:w-5/6">
							<h1 className="px-6 text-3xl font-extrabold text-center md:px-0 text-sky-900">
								Rwanda Women Doctors for Reproductive Justice
							</h1>
							<p className="px-6 text-sm font-bold text-center md:px-0 md:text-lg">
								We are a network of young women physicians in Rwanda. We share
								the spirit of activism driven by the passion for radically
								advancing women's access to sexual and reproductive rights.
							</p>
							<div className="flex items-center justify-center pt-4 md:mt-4">
								<Link
									to="whoweare"
									className="px-12 text-sm rounded-[4px] py-2 font-bold text-white bg-primary-orange ">
									Learn More
								</Link>
							</div>
						</motion.div>
					</div>
				</Carousel>
			</section>

			<motion.section
				id="whatwedo"
				viewport={{ once: false, amount: 0.3 }}
				initial={{ opacity: 0.2 }}
				animate={{ opacity: 1 }}
				className="flex justify-center w-5/6 mx-auto">
				<div className="flex flex-col-reverse justify-between flex-1 w-full px-2 md:flex-row">
					<div className="flex flex-col items-center w-full md:w-1/2 ">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							variants={{
								hidden: { opacity: 0, x: -50 },
								visible: { opacity: 1, x: 0 },
							}}
							className="my-3 ">
							<p className="w-full my-4 text-xl font-bold text-center md:text-start md:w-1/2">
								Our mission
							</p>
							<p className="text-sm text-center md:text-start">
								{" "}
								The ultimate mission is to create and strengthen a feminist
								network of girls and young women to advance bodily autonomy and
								sexual reproductive rights.
							</p>
							<div className="flex justify-center md:justify-start">
								<Link
									to="mission"
									className=" px-2 md:my-12 my-6 py-2 transition-all  hover:bg-primary-orange hover:text-white shadow-md border-[1.25px] rounded-[4px] border-primary-orange text-xs bg-white">
									More about our values and Objectives
								</Link>
							</div>
						</motion.div>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 0.4, duration: 0.4 }}
						viewport={{ once: true, amount: 0.5 }}
						variants={container}
						className="flex justify-center md:block">
						<img
							className="block object-contain w-64 h-48 md:h-64 "
							src={Graphic}
							alt="woman-graphic"
						/>
					</motion.div>
				</div>
			</motion.section>
			<motion.section
				id="whatwedo"
				initial="hidden"
				whileInView="visible"
				transition={{ delay: 0.4, duration: 0.6 }}
				viewport={{ amount: 0.9 }}
				variants={containerSides}
				className="flex flex-col w-5/6 gap-4 px-2 py-4 mx-auto ">
				<div className="w-2/3 mx-auto">
					<p className="w-full my-1 text-lg font-bold text-center ">
						What we do
					</p>
				</div>
				<div className="flex flex-col gap-4">
					{sections.map((sect: section, i) => (
						<motion.div
							initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
							animate={{ opacity: 1, x: 0 }}
							viewport={{ amount: 0.7, once: true }}
							transition={{ duration: 0.8, delay: i * 0.4 }}
							key={sect.title}
							className={`flex flex-col md:flex-row flex-1 mt-1 p-8 bg-white ${
								i % 2 !== 0 && " md:flex-row-reverse "
							} `}>
							<img
								className="block object-cover rounded-[12px] w-full md:w-1/2 h-48  "
								src={sect.img}
								alt={sect.title.toLowerCase()}
							/>
							<div className="flex flex-col w-full pt-0 md:px-6 md:w-1/2">
								<div className="flex-1">
									<p className="my-4 mb-4 font-bold text-center md:mt-0 md:text-start text-bold text-md ">
										{sect.title}
									</p>
									<p className="flex flex-col justify-center text-xs font-normal text-center md:text-justify">
										{sect.content}
									</p>
									<div className="flex justify-center md:justify-start">
										<Link
											to={sect.moreLink}
											className="my-4 px-6 py-1 rounded-[4px] text-xs border-[1.5px] hover:bg-primary-orange hover:text-white transition-all  text-primary-orange bg-white text border-primary-orange">
											Learn More
										</Link>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.section>

			<motion.section
				id="ourpartners"
				viewport={{ once: false, amount: 0.3 }}
				initial={{ opacity: 0.2 }}
				animate={{ opacity: 1 }}
				className="flex flex-col w-5/6 px-2 py-4 mx-auto ">
				<div className="w-full mx-auto md:w-2/3">
					<p className="w-full my-1 text-lg font-bold text-center ">
						Our Partners
					</p>
				</div>
				{partners && (
					<div className="grid grid-cols-2 gap-3 md:gap-0 md:grid-cols-5 ">
						{partners.map((part: string) => (
							<img
								src={part}
								className="object-contain w-full h-32 bg-transparent md:object-center "
							/>
						))}
					</div>
				)}
			</motion.section>
			<motion.section
				id="news"
				viewport={{ once: false, amount: 0.3 }}
				initial={{ opacity: 0.2 }}
				animate={{ opacity: 1 }}
				className="flex flex-col w-5/6 gap-4 px-2 py-4 mx-auto ">
				<div className="w-full mx-auto md:w-2/3">
					<p className="w-full my-1 text-lg font-bold text-center ">News</p>
				</div>
				<div className="grid grid-cols-1 gap-2 md:grid-cols-3">
					<div>
						<p className="font-bold ">Latest Blogs</p>
						<p className="text-xs">Latest event posts will be shown here</p>
					</div>
					<div>
						<p className="font-bold ">Latest events</p>
						<p className="text-xs">Latest event posts will be shown here</p>
					</div>
					<div>
						<p className="font-bold ">RWDRJ Tweets</p>
						<Timeline
							dataSource={{
								sourceType: "profile",
								screenName: "doctors_women",
							}}
							options={{
								height: "300",
							}}
						/>
					</div>
				</div>
			</motion.section>
			<section id="contactus" className="w-5/6 py-8 mx-auto">
				<p className="py-4 text-lg font-bold text-gray-600">Contact Us</p>
				<div className="flex flex-col-reverse w-full md:flex-row ">
					<div className="w-full my-2 md:w-1/2">
						<p className="text-lg font-bold text-gray-600 md:text-xl">
							For any queries or concerns, don't hesitate to contact us
						</p>
						<p className="my-2 text-sm font-light">Call us directly</p>
						<p className="my-2 font-bold text-md">+250782864790</p>
						<p className="my-2 text-sm font-light">Contact email</p>
						<p className="my-2 font-bold text-md">
							womenreproductivejustice@gmail.com
						</p>
						<p className="my-2 font-bold text-md">eb@womenrepro.org</p>
						<Link
							to="contactus"
							className="w-1/3 p-2 block my-2  text-center font-bold rounded-[4px] text-xs border-[1.5px] hover:bg-slate-800 hover:text-white transition-all  text-slate-800 bg-white  border-slate-800">
							Reach out{" "}
						</Link>
					</div>
					<div className="w-full md:w-1/2 ">
						<MapContainer
							className="w-full h-52 rounded-[8px]"
							center={[-1.936763, 30.089463]}
							zoom={13}
							scrollWheelZoom={false}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Marker icon={customIcon} position={[-1.936763, 30.089463]}>
								<Popup>
									<p className="text-xs font-bold text-primary-orange">
										KG 216 ST 20
									</p>
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
