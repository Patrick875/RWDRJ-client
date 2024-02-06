import { member } from "../../Shared/types";
import { teamMembers } from "../../constants";
import { motion } from "framer-motion";

function OurTeam() {
	return (
		<div>
			<div className="flex flex-col items-center justify-center w-full h-56 bg-center bg-cover bg-image-whoweare">
				<div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-page-cover">
					<p className="w-5/6 text-xl font-bold text-center text-white">
						Meet Our Team
					</p>
				</div>
			</div>
			<motion.div
				id="ourteam"
				viewport={{ once: false, amount: 0.3 }}
				initial={{ opacity: 0.2 }}
				animate={{ opacity: 1 }}
				className="flex flex-col w-5/6 gap-4 px-2 py-4 mx-auto ">
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
			</motion.div>
		</div>
	);
}

export default OurTeam;
