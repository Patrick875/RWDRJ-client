import React, { ReactNode } from "react";
import Slider from "react-slick";

interface ManualCarouselProps {
	images: string[];
	className: string;
	children: ReactNode;
}

const Carousel: React.FC<ManualCarouselProps> = ({
	images,
	className,
	children,
}) => {
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
		<div className={className}>
			<Slider {...settings}>
				{images.map((item) => (
					<div
						className={` ${item} w-full mx-0 py-0 bg-cover bg-center  bg-no-repeat`}
						key={crypto.randomUUID()}>
						<div className="w-full h-[80vh] bg-hero-cover ">{children}</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
