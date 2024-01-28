import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { navs } from "../../constants";
import SocialLinks from "../../Shared/Topbar/SocialLinks";
const Footer = () => {
	return (
		<footer className=" mt-8 text-white bg-[#0A142F] bg-primary-100">
			<div className="w-full py-8 mx-auto bg-[#283148]">
				<div className="flex items-center w-5/6 mx-auto text-xs text-white">
					<div className="flex items-center justify-center w-full gap-4">
						<p>Newsletter</p>
						<div className="">
							<form className="flex  items-center gap-3 bg-white pl-4  rounded-[4px] ">
								<input
									placeholder="email"
									className="py-1 bg-transparent focus:outline-none focus-border-none placeholder:text-sm placeholder:font-bold"
								/>
								<button className="bg-[#0A142F] text-white text-xs rounded-[4px] p-3 px-6">
									Send{" "}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center w-5/6 gap-16 py-8 mx-auto md:flex">
				<div className="w-full mt-8 md:mt-0">
					<div className="flex justify-center w-full">
						<div className="flex items-center gap-2">
							<img
								className="block w-20 h-20"
								src={Logo}
								alt="hike-guide-logo"
							/>
							<p className="text-lg font-bold text-primary-orange">RWDRJ</p>
						</div>
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
