import { Timeline } from "react-twitter-widgets";
import { motion } from "framer-motion";
import Advocacy from "../../assets/advocacy.png";
import Compain from "../../assets/Campain.png";
import Digital from "../../assets/Digital.png";
import Services from "../../assets/Services.png";
import Training1 from "../../assets/Training1.webp";
import Graphic from "../../assets/graphic.png";
import Topbar from "../../Shared/Topbar";
import doc1 from "../../assets/DOC1.webp";
import doc2 from "../../assets/DOC2.webp";
import doc3 from "../../assets/DOC3.webp";
import doc4 from "../../assets/DOC4.webp";
import doc5 from "../../assets/DOC5.webp";
import doc6 from "../../assets/DOC6.webp";
import doc7 from "../../assets/DOC7.webp";
import doc8 from "../../assets/DOC8.webp";
import doc9 from "../../assets/DOC9.webp";

import partner1 from "../../assets/partner1.webp";
import partner2 from "../../assets/partner2.webp";
import partner3 from "../../assets/partner3.webp";
import partner4 from "../../assets/partner4.webp";
import partner5 from "../../assets/partner5.webp";
import partner6 from "../../assets/partner6.webp";
import partner7 from "../../assets/partner7.webp";
import partner8 from "../../assets/partner8.webp";
import partner9 from "../../assets/partner9.gif";
import partner10 from "../../assets/partner10.webp";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import marker from "./../../assets/marker.gif";
import { FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import Carousel from "./Carousel";

interface section {
	content: string;
	title: string;
	img?: string;
}
interface member {
	name: string;
	title: string;
	img?: string;
}

const AboutUs = () => {
	const { register, reset } = useForm();
	const handleOnFocus = () => {
		reset();
	};

	const [loading, setLoading] = useState<boolean>(false);

	const sections: section[] = [
		{
			content: `As a group of young women doctors, advocating for access to
									legal and safe SRHR and friendly services is significantly
									essential. We recognize women and girls' catastrophic
									complications when they are denied rights to reproductive
									services and opt for dangerous traditional options.`,
			title: "Advocacy",
			img: Advocacy,
		},
		{
			img: Compain,
			title: "Campaign&Organizing",
			content:
				"We believe in The power of feminist organizing.  Through collective actions, we aim to transform the gender relations that subordinate and devalue women. Feminist organizing sustains our movement and advances autonomy and equality for all women.",
		},
		{
			img: Training1,
			title: "Training",
			content:
				"Strengthening the network of young women pro-choice physicians: young physicians in Rwanda are less bound by abortion stigma than older physicians in Rwanda. ",
		},
		{
			title: "Service Provision",
			img: Services,
			content:
				"Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
		},
		{
			title: "Digital Health & SRHR",
			img: Digital,
			content:
				"Nationally, abortion is only permissible in cases of rape, when the pregnant person is a child, forced marriage, in cases of incest committed with a person to the second degree of kinship, and when the pregnancy puts a risk to the health of the pregnant person or of the fetus. ",
		},
	];

	const teamMembers: member[] = [
		{
			name: "Pacific Ufitinema",
			title: "Executive Director",
			img: doc1,
		},
		{
			name: "Sandrine Umutoniwase",
			title: "Assistant Director",
			img: doc2,
		},
		{
			name: "Clarisse Mutimukeye",
			title: "Senior Program Director",
			img: doc3,
		},
		{
			name: "Fanny Giraneza",
			title: "Finance&Grants Director",
			img: doc4,
		},
		{
			name: "Divine Ingabire",
			title: "Campaigns Coordinator",
			img: doc5,
		},
		{
			name: "Girimpundu Revocathe",
			title: "Phycologist",
			img: doc6,
		},
		{
			name: "Sandrine Umuhoza",
			title: "Members Director",
			img: doc7,
		},
		{
			name: "Josee Murekeyisoni",
			title: "IT&Communication Director",
			img: doc8,
		},
		{
			name: "Pierrette Mfurankunda",
			title: "Policy and Law Director",
			img: doc9,
		},
	];

	const partners: string[] = [
		partner1,
		partner2,
		partner3,
		partner4,
		partner5,
		partner6,
		partner7,
		partner8,
		partner9,
		partner10,
	];
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

	const testImages: string[] = ["bg-image-1", "bg-image-2", "bg-image-3"];

	return (
		<div>
			<section
				id="aboutus"
				className="flex flex-col min-h-[100vh] overflow-x-hidden">
				<Topbar />

				<Carousel
					images={testImages}
					className="w-full m-0 h-96 sm:h-64 xl:h-80 2xl:h-96">
					<div className="flex flex-col w-full h-full gap-4 mx-auto md:w-5/6 ">
						<motion.div
							initial={{ y: -110, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 1.5, duration: 0.8 }}
							className="flex flex-col justify-center flex-1 w-full gap-4 mx-auto md:w-5/6">
							<h1 className="text-3xl font-extrabold text-center text-sky-900">
								Rwanda Women Doctors for Reproductive Justice
							</h1>
							<p className="text-sm font-bold text-center md:text-lg">
								We are a network of young women physicians in Rwanda. We share
								the spirit of activism driven by the passion for radically
								advancing women's access to sexual and reproductive rights.
							</p>
							<div className="flex items-center justify-center pt-4 md:mt-4">
								<button className="px-12 text-sm rounded-[4px] py-2 font-bold text-white bg-primary-orange ">
									Learn More
								</button>
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
								<button className=" px-2 md:my-12 my-6 py-2 transition-all  hover:bg-primary-orange hover:text-white shadow-md border-[1.25px] rounded-[4px] border-primary-orange text-xs bg-white">
									More about our values and Objectives
								</button>
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
										<button className="my-4 px-6 py-1 rounded-[4px] text-xs border-[1.5px] hover:bg-primary-orange hover:text-white transition-all  text-primary-orange bg-white text border-primary-orange">
											Learn More
										</button>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.section>
			<motion.section
				id="ourteam"
				viewport={{ once: false, amount: 0.3 }}
				initial={{ opacity: 0.2 }}
				animate={{ opacity: 1 }}
				className="flex flex-col w-5/6 gap-4 px-2 py-4 mx-auto ">
				<div className="w-2/3 mx-auto">
					<p className="w-full my-1 text-lg font-bold text-center ">Our Team</p>
				</div>
				{teamMembers && (
					<div className="grid grid-cols-1 gap-3 md:grid-cols-3 ">
						{teamMembers.map((member: member) => (
							<div className="bg-white rounded-[8px] p-4">
								<img src={member.img} className="object-contain w-full h-24" />
								<p className="py-1 text-sm font-bold text-center">
									{member.name}
								</p>
								<p className="text-xs text-center">{member.title}</p>
							</div>
						))}
					</div>
				)}
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
					<Timeline
						dataSource={{
							sourceType: "profile",
							screenName: "RwandaHealth",
						}}
						options={{
							height: "300",
						}}
					/>
					<Timeline
						dataSource={{
							sourceType: "profile",
							screenName: "nsanzimanasabin",
						}}
						options={{
							height: "300",
						}}
					/>
					<Timeline
						dataSource={{
							sourceType: "profile",
							screenName: "MDFC_Rwanda",
						}}
						options={{
							height: "300",
						}}
					/>
				</div>
			</motion.section>
			<section id="contactus" className="w-5/6 py-8 mx-auto">
				<p className="py-4 text-lg font-bold text-gray-600">Contact Us</p>
				<div className="flex w-full ">
					<div className="w-1/2 pr-8">
						<p className="text-xl font-bold text-gray-600">Send us a message</p>
						<p className="text-xs ">
							Feel to send an email, we will respond as soon as possible{" "}
						</p>
						<form>
							<input
								className="w-full px-3 py-1 my-1 font-light border border-gray-300 rounded-md placeholder:text-xs placeholder:italic focus-outline:none focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-900"
								type="text"
								placeholder="Name"
								{...register("name")}
								onFocus={handleOnFocus}
							/>
							<input
								className="w-full px-3 py-1 my-3 font-light border border-gray-300 rounded-md placeholder:text-xs placeholder:italic focus-outline:none focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-900"
								type="email"
								placeholder="Email"
								{...register("email")}
								onFocus={handleOnFocus}
							/>
							<input
								className="w-full px-3 py-1 my-1 font-light border border-gray-300 rounded-md placeholder:text-xs placeholder:italic focus-outline:none focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-900"
								type="text"
								placeholder="Subject"
								{...register("subject")}
								onFocus={handleOnFocus}
							/>
							<textarea
								{...register("description")}
								id="description"
								placeholder="Message"
								rows={8}
								className=" py-1 rounded-[4px] w-full border-2 border-gray-300"
							/>
							<button
								type="button"
								disabled={loading}
								className={`px-4    py-1 my-1 text-xs ${
									!loading ? "text-white bg-teal-900" : "bg-teal-100"
								} rounded-[4px] `}>
								{!loading ? (
									<p className="flex items-center gap-3">
										Send
										<FiSend />
									</p>
								) : (
									<HashLoader color="#022c22" loading={loading} size={15} />
								)}
							</button>
						</form>
					</div>
					<div className="w-1/2">
						<p className="text-xl font-bold text-gray-600">
							For any queries or concerns, don't hesitate to contact us
						</p>
						<p className="my-2 text-sm font-light">Call us directly</p>
						<p className="my-2 font-bold text-md">+250782864790</p>
						<p className="my-2 text-sm font-light">Contact email</p>
						<p className="my-2 font-bold text-md">
							womenreproductivejustice@gmail.com
						</p>
						<p className="my-2 font-bold text-md">eb@womenrepro.org</p>

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
										RWDRJ Offices
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
