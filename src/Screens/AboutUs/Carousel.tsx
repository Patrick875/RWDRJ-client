import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CarouselItem } from "../../Shared/types";

interface ManualCarouselProps {
	items: CarouselItem[];
	className: string;
}

const Carousel: React.FC<ManualCarouselProps> = ({ items, className }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 400,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
	};

	return (
		<div className={`${className} carouselIndex`}>
			<Slider {...settings}>
				{items.map((item: CarouselItem) => (
					<div
						className={` ${item.img} w-full mx-0 py-0 bg-cover bg-center  bg-no-repeat`}
						key={crypto.randomUUID()}>
						<div className="w-full h-[110vh] bg-[rgba(244,244,249,0.80)] ">
							<div className="relative w-full h-full mx-auto font-montserrat">
								<motion.div
									initial={{ y: -100, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 1.2, duration: 1.4 }}
									className="flex flex-col justify-center flex-1 w-full gap-4 mx-auto h-4/5 md:w-5/6">
									<h1 className="px-6 py-5 pt-12 text-2xl font-extrabold text-center md:text-6xl font-lora md:px-0 text-sky-900">
										Rwanda Women Doctors For Reproductive Justice
									</h1>
									<p className="px-6 py-4 text-2xl font-bold leading-6 text-center md:px-0 md:text-2xl">
										Empowering Women's Health, Advocating for Justice
									</p>
									<div className="flex items-center justify-center pt-6 ">
										<Link
											to="whoweare"
											className="px-12 py-2 text-lg font-bold text-white rounded-full bg-primary-orange ">
											More about us
										</Link>
									</div>
								</motion.div>
								<div className="absolute w-full -bottom-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 1440 320">
										<path
											fill="#c29f2d"
											fillOpacity="0.8"
											d="M0,64L48,69.3C96,75,192,85,288,122.7C384,160,480,224,576,240C672,256,768,224,864,197.3C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
