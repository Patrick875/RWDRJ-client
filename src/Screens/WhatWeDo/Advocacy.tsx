import AnimatePage from "../../Shared/AnimatePage";
import MoreLinks from "../../Shared/MoreLinks";

function Advocacy() {
	return (
		<AnimatePage>
			<div className="">
				<div className="flex flex-col items-center justify-center w-full h-56 bg-bottom bg-cover bg-image-advocacy">
					<div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-page-cover">
						<p className="w-5/6 text-xl font-bold text-center text-white">
							Advocacy
						</p>
					</div>
				</div>

				<div className="w-5/6 mx-auto ">
					<p className="my-2 text-lg font-extrabold text-center text-sky-900 ">
						Advocacy{" "}
					</p>
					<div className="p-3 bg-white">
						<p className="p-3 text-xs ">
							As a group of young women doctors, advocating for access to legal
							and safe SRHR and friendly services is significantly essential. We
							recognize women and girls' catastrophic complications when they
							are denied rights to reproductive services and opt for dangerous
							traditional options.
						</p>
						<p className="p-3 text-xs ">
							Lack of access to sexual reproductive health and rights violates a
							range of human rights of women and girls, including the right to
							life; the right to the highest attainable standard of physical and
							mental health; the right to benefit from scientific progress and
							its realization; the right to decide freely and responsibly on the
							number, spacing and timing of children; and this is an apparent
							social injustice. Our organization is engaging women doctors,
							especially young providers, to advance the right to safe abortion
							access as essential to save women's lives and realize Sexual
							Reproductive Health Rights and Justice through coordinated
							strategic, evidence-based advocacy at all levels.
						</p>
						<p className="p-3 text-xs ">
							As young women physicians, we believe that our voice from the
							lived experiences, knowledge, and evidence we generate in our
							medical carrier we best positioned to enable the environment for
							quality comprehensive abortion care through a supportive framework
							of law and policy changes and promotion.
						</p>
					</div>
					<div>
						<p className="my-2 text-lg font-extrabold text-sky-900 ">
							Gallery{" "}
						</p>
						<p className="text-xs ">Items yet to be added</p>
					</div>
					<MoreLinks current="Advocacy" />
				</div>
			</div>
		</AnimatePage>
	);
}

export default Advocacy;
