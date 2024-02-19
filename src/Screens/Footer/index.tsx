import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { navs } from "../../constants";
import SocialLinks from "../../Shared/Topbar/SocialLinks";
const Footer = () => {
	return (
		<footer className=" mt-8 text-white bg-[#0A142F] bg-primary-100">
			<div className="flex justify-center w-5/6 gap-16 py-8 mx-auto md:flex">
				<div className="w-full mt-8 md:mt-0">
					<div className="flex justify-center w-full">
						<Link to="" className="block">
							<div className="flex items-center gap-2">
								<img
									loading="lazy"
									className="block w-20 h-20"
									src={Logo}
									alt="hike-guide-logo"
								/>
								<p className="text-lg font-bold text-primary-orange">RWDRJ</p>
							</div>
						</Link>
					</div>
					<div className="flex justify-center">
						<div className="flex gap-3 my-3 ">
							{navs.map((nav) => (
								<Link className="block text-xs text-white" to={nav.to}>
									{nav.text}
								</Link>
							))}
						</div>
					</div>
					<div className="flex justify-center w-full">
						<SocialLinks />
					</div>

					<p className="py-2 text-sm text-center">
						&copy;{new Date().getFullYear()} All Rights reserved Rwanda Women
						Doctors For Reproductive Justice .
					</p>
					<p className="py-1 text-xs text-center text-white">
						Developed By BAHO TECH INITIATIVE
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
