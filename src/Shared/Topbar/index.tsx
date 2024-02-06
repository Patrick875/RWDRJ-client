import React, { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import { CiMenuBurger } from "react-icons/ci";
import useMediaQuery from "../../Hooks/useMediaQuery";
import SocialLinks from "./SocialLinks";
import { navs } from "../../constants";

const Topbar = () => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px");
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
	return (
		<div className="relative w-5/6 mx-auto">
			<div
				className={`flex items-center w-full text-xs ${
					!isAboveMediumScreens ? " justify-between " : ""
				}`}>
				<div className="flex items-center gap-2">
					<img className="block w-20 h-20" src={Logo} alt="hike-guide-logo" />
					<p className="text-lg font-bold text-primary-orange">RWDRJ</p>
				</div>
				{isAboveMediumScreens ? (
					<React.Fragment>
						<NavBar setIsMenuToggeled={setIsMenuToggled} items={navs} />
						<SocialLinks />
					</React.Fragment>
				) : (
					<CiMenuBurger
						className="w-5 h-5 mx-2 "
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					/>
				)}
				{!isAboveMediumScreens && isMenuToggled && (
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						className="fixed top-0 right-0 z-40 w-[100vw] min-h-screen bg-slate-100 bg-primary-100 drop-shadow-xl">
						{/* CLOSE ICON */}
						<div className="flex justify-between p-12">
							<div className="flex items-center gap-2">
								<img
									className="block w-20 h-20"
									src={Logo}
									alt="hike-guide-logo"
								/>
								<p className="text-lg font-bold text-primary-orange">RWDRJ</p>
							</div>
							<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
								<HiXMark className="w-6 h-6 text-gray-400" />
							</button>
						</div>

						<NavBar setIsMenuToggeled={setIsMenuToggled} items={navs} />
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Topbar;

{
	/* MOBILE MENU MODAL */
}
// {
// 	!isAboveMediumScreens && isMenuToggled && (
// 		<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
// 			{/* CLOSE ICON */}
// 			<div className="flex justify-end p-12">
// 				<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
// 					<IoClose className="w-6 h-6 text-gray-400" />
// 				</button>
// 			</div>

// 			{/*MENU ITEMS*/}
// 			<div className="ml-[33%] flex flex-col gap-2 text-sxl">
// 				<NavBar items={navs} />
// 				<SocialLinks />
// 			</div>
// 		</div>
// 	);
// }
