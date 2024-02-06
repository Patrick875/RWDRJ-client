import AnimatePage from "../../Shared/AnimatePage";
import MoreLinks from "../../Shared/MoreLinks";

function CampaignAndOrganizing() {
	return (
		<AnimatePage>
			<div className="">
				<div className="flex flex-col items-center justify-center w-full h-56 bg-center bg-cover bg-image-whoweare">
					<div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-page-cover">
						<p className="w-5/6 text-xl font-bold text-center text-white">
							Campaign & Organizing
						</p>
					</div>
				</div>

				<div className="w-5/6 mx-auto ">
					<p className="my-2 text-lg font-extrabold text-center text-sky-900 ">
						Campaign & Organizing{" "}
					</p>
					<div className="p-3 bg-white">
						<p className="p-3 text-xs text-justify md:text-start ">
							We believe in The power of feminist organizing. Through collective
							actions, we aim to transform the gender relations that subordinate
							and devalue women. Feminist organizing sustains our movement and
							advances autonomy and equality for all women.
						</p>
					</div>
					<div>
						<p className="my-2 text-lg font-extrabold text-sky-900 ">
							Gallery{" "}
						</p>
						<p className="text-xs ">Items yet to be added</p>
					</div>
					<MoreLinks current="Campaign&Organizing" />
				</div>
			</div>
		</AnimatePage>
	);
}

export default CampaignAndOrganizing;
