import { motion } from "framer-motion";
import training1 from "./../../assets/images/training1.webp";
import training2 from "./../../assets/images/training2.webp";
import training3 from "./../../assets/images/training3.webp";
import training4 from "./../../assets/images/training4.webp";
import training5 from "./../../assets/images/training5.webp";
import MoreLinks from "../../Shared/MoreLinks";
import AnimatePage from "../../Shared/AnimatePage";

interface card {
	title: string;
	image: string;
	content: string;
}

function Training() {
	const cards: card[] = [
		{
			title: "Medical Aspect of Safe Abortion",
			image: training1,
			content:
				"We conduct series of training with young female physicians to increase their skills on medical aspect of safe abortion in the local context. We use hands on simulation skills that provide them with better understanding on safe abortion service provision and post abortion care.",
		},
		{
			title: "Legal Aspect of Safe Abortion",
			image: training2,
			content:
				"We provide training to young female medical doctors on legal aspect of abortion in the Rwandan context. We ensure they are guided on best practice while providing the safe services.",
		},
		{
			title: "Creating future female pro-choice",
			image: training3,
			content:
				"We collaborate actively with the medical students for choice at the University of Rwanda to increase girls students’ knowledge on abortion, covering topics related to legal and medical aspects of abortion in the local context.",
		},
		{
			title: "Increasing Acceptance of Safe Abortion",
			image: training4,
			content:
				"We conduct series of safe space open discussions with girls and young women, especially female physicians to increase acceptance around safe abortion and behavior change.",
		},
		{
			title: "Creating safe space for knowledge sharing",
			image: training5,
			content:
				"We empower girls and women to open up for discussions on matters related to Reproductive Justice, equip them with advocacy skills, knowledge sharing, research and campaigning.",
		},
	];
	return (
		<AnimatePage>
			<div className="">
				<div className="flex flex-col items-center justify-center w-full h-[60vh] bg-center bg-cover bg-image-training">
					<div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-[rgba(244,244,249,0.70)]">
						<p className="w-5/6 text-3xl font-bold text-center font-lora ">
							Training
						</p>
					</div>
				</div>

				<div className="">
					<div className="bg-primary-orange">
						<div className="w-5/6 p-3 mx-auto h-[60vh] flex flex-col justify-center">
							<p className="p-3 text-2xl text-center font-lora ">
								We aim at strengthening the network of young women pro-choice
								physicians, by building capacity of our members, women networks,
								youth and women led organizations, and future pro-choice female
								physicians. We want to achieve this through sharing knowledge on
								medical and legal aspect of SRHR, Advocacy, digital skills,
								research and organizing.
							</p>
						</div>
					</div>

					<div className="w-5/6 mx-auto">
						<div>
							{cards.map((sect: card, i) => (
								<motion.div
									initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
									animate={{ opacity: 1, x: 0 }}
									viewport={{ amount: 0.7, once: true }}
									transition={{ duration: 0.8, delay: i * 0.4 }}
									key={sect.title}
									className={`flex flex-col md:flex-row flex-1 mt-1 p-8 bg-white ${
										i % 2 !== 0 && " md:flex-row-reverse "
									} `}>
									<div className="flex flex-col w-1/2">
										<img
											loading="lazy"
											className="block object-cover object-top rounded-[12px] w-full  h-72  "
											src={sect.image}
											alt={sect.title.toLowerCase()}
										/>
									</div>
									<div className="flex flex-col w-full pt-0 md:px-6 md:w-1/2">
										<div className="flex-1">
											<p className="my-2 text-xl font-bold text-center font-lora md:mt-0 md:text-start text-bold text-md ">
												{`0${i + 1}`}{" "}
											</p>
											<p className="my-4 mb-4 text-xl font-bold text-center font-lora text-primary-orange md:mt-0 md:text-start text-bold text-md ">
												{sect.title}
											</p>
											<p className="flex flex-col justify-center text-lg font-normal text-center md:text-justify">
												{sect.content}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</AnimatePage>
	);
}

export default Training;
