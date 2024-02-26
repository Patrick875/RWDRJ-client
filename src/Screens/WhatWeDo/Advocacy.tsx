import AnimatePage from "../../Shared/AnimatePage";
import AdvocacyImage2 from "../../assets/comp7.webp";
import AdvocacyImage1 from "../../assets/advocacy.webp";

function Advocacy() {
	return (
		<AnimatePage>
			<div className="">
				<div className="flex flex-col items-center justify-center w-full min-h-[60vh] bg-bottom   bg-cover  bg-image-advocacy">
					<div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-[rgba(244,244,249,0.70)]">
						<p className="w-5/6 text-3xl font-bold text-center text-black font-lora">
							Advocacy
						</p>
					</div>
				</div>

				<div className="p-3 bg-primary-orange min-h-[60vh] flex flex-col justify-center items-center">
					<p className="w-5/6 p-3 mx-auto text-2xl font-bold text-center font-lora ">
						As a group of young women doctors, advocating for access to legal
						and safe SRHR and friendly services is significantly essential. We
						recognize women and girls' catastrophic complications when they are
						denied rights to reproductive services and opt for dangerous
						traditional options.
					</p>
				</div>
				<div className="bg-blue-900 ">
					<div className="flex flex-col md:flex-row w-5/6 mx-auto min-h-[70vh]">
						<div className="flex flex-col items-center justify-center h-full px-2 py-4 w-fullmd:w-1/2">
							<img
								loading="lazy"
								className="block object-contain rounded-[14px] h-72 "
								src={AdvocacyImage2}
								alt="advocacy-2"
							/>
						</div>
						<div className="flex flex-col justify-center w-full h-full py-4 text-lg text-center md:text-start md:w-1/2">
							<p className="p-3 text-2xl text-center text-white md:text-start font-lora">
								Advocating for Sexual Reproductive Health Rights
							</p>
							<p className="p-3 text-white ">
								Lack of access to sexual reproductive health and rights violates
								various human rights of women and girls, including the right to
								life, the highest attainable standard of physical and mental
								health, and the freedom to decide on family planning. Our
								organization engages young women doctors to advance safe
								abortion access, essential for saving lives and achieving
								reproductive health rights and justice through evidence-based
								advocacy.
							</p>
						</div>
					</div>
					<div className="flex flex-col-reverse w-5/6 mx-auto md:flex-row ">
						<div className="flex flex-col justify-center w-full h-full px-2 py-4 text-center md:text-start md:w-1/2">
							<p className="p-3 text-2xl text-white font-lora ">
								Empowering Women Physicians for Change
							</p>
							<p className="p-3 text-lg text-white ">
								As young women physicians, we believe that our voice from the
								lived experiences, knowledge, and evidence we generate in our
								medical career we best positioned to enable the environment for
								quality comprehensive abortion care through a supportive
								framework of law and policy changes and promotion.
							</p>
						</div>
						<div className="flex flex-col items-center justify-center w-full h-full px-2 py-4 md:w-1/2">
							<img
								loading="lazy"
								className="block object-contain rounded-[14px] h-72 "
								src={AdvocacyImage1}
								alt="advocacy-1"
							/>
						</div>
					</div>
				</div>
			</div>
		</AnimatePage>
	);
}

export default Advocacy;
