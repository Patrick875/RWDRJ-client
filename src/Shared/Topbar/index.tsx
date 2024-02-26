import React, { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import { CiMenuBurger } from "react-icons/ci";
import useMediaQuery from "../../Hooks/useMediaQuery";
import SocialLinks from "./SocialLinks";
import { navs } from "../../constants";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";
import { GiPositionMarker } from "react-icons/gi";

interface topbarProps {
	isTopOfPage: boolean;
}

const Topbar = ({ isTopOfPage }: topbarProps) => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px");
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
	const { pathname } = useLocation();
	const locationInApp = pathname.split("/")[1];

	return (
		<>
			<div className="flex justify-between px-4 py-1 mx-auto text-lg font-bold h-30 text-sky-900 bg-primary-orangeTrans">
				<div className="flex items-center gap-4 ">
					<div className="flex items-center gap-3">
						<GiPositionMarker />
						<p>KG 216 ST 20</p>
					</div>
					<p className="flex gap-3">Daily: 8:30 AM to 5:00 PM</p>
				</div>
				<div className="flex items-center gap-4">
					<p>+250 782 864 790</p>
					<p>eb@womenrepro.org</p>
				</div>
			</div>
			<nav className="sticky top-0 " style={{ zIndex: 10000 }}>
				<div>
					<div
						className={`${
							isTopOfPage && isAboveMediumScreens
								? "bg-[rgb(255,255,255,0.3)] "
								: "bg-white "
						} flex mx-auto ${
							isAboveMediumScreens && locationInApp === "" ? "  " : " "
						}  shadow-sm px-6 items-center w-full  ${
							!isAboveMediumScreens ? " justify-between " : ""
						}`}>
						<Logo />

						{isAboveMediumScreens ? (
							<React.Fragment>
								<NavBar
									isTopOfPage={isTopOfPage}
									setIsMenuToggeled={setIsMenuToggled}
									items={navs}
								/>
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
									<Logo />
									<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
										<HiXMark className="w-6 h-6 text-gray-400" />
									</button>
								</div>

								<NavBar
									isTopOfPage={isTopOfPage}
									setIsMenuToggeled={setIsMenuToggled}
									items={navs}
								/>
							</motion.div>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Topbar;
