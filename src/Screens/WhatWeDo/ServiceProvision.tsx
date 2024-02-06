import AnimatePage from "../../Shared/AnimatePage";
import MoreLinks from "../../Shared/MoreLinks";

function ServiceProvision() {
	return (
		<AnimatePage>
			<div className="">
				<div className="flex flex-col items-center justify-center w-full h-56 bg-cover bg-image-service">
					<div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-page-cover">
						<p className="w-5/6 text-xl font-bold text-center text-white">
							Service Provision
						</p>
					</div>
				</div>

				<div className="w-5/6 mx-auto ">
					<p className="my-2 text-lg font-extrabold text-center text-sky-900 ">
						Service Provision{" "}
					</p>
					<div className="p-3 bg-white">
						<p className="p-3 text-xs ">
							Service Provision Nationally, abortion is only permissible in
							cases of rape, when the pregnant person is a child, forced
							marriage, in cases of incest committed with a person to the second
							degree of kinship, and when the pregnancy puts a risk to the
							health of the pregnant person or of the fetus. Moreover, abortion
							is only allowed to be provided by a certified medical doctor
							practicing in a facility at the level of a hospital or a
							polyclinic.
						</p>
						<p className="p-3 text-xs leading-6 ">
							However access to SRHR services, especially safe abortion care, is
							still almost impossible, due to many conscious objectors. Our
							group has formed a network of young women physicians practicing in
							the legally allowed facilities. Young women physicians provide
							confidently safe abortion care and related health services as part
							of their job in the local allowed context without stigma. We aim
							to strengthen the network by widening the women's pro-choice human
							resources to continue providing safe abortion care.
						</p>
						<p className="p-3 text-xs leading-6 ">
							Our group aims to create a virtual safe space for women and girls
							seeking safe abortion care in a legal context. We have mobilized
							digital women experts to take active roles in our group. The
							development of a transformative feminist digital technology will
							provide a virtual safe path to service and dignified care for
							women in Rwanda.
						</p>
					</div>
					<div>
						<p className="my-2 text-lg font-extrabold text-sky-900 ">
							Gallery{" "}
						</p>
						<p className="text-xs ">Items yet to be added</p>
					</div>
					<MoreLinks current="Service Provision" />
				</div>
			</div>
		</AnimatePage>
	);
}

export default ServiceProvision;
