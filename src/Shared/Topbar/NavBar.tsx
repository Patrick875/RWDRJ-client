import { NavLink } from "react-router-dom";
import { navItem } from "../types";
import useMediaQuery from "../../Hooks/useMediaQuery";
import SocialLinks from "./SocialLinks";

interface navbarProps {
	items: navItem[];
}

const NavBar = ({ items }: navbarProps) => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px");

	return (
		<div className="flex-1 ">
			{!isAboveMediumScreens && (
				<div className="flex flex-col flex-1 w-full gap-2 font-medium text-sxl">
					{items.map((item: navItem) => (
						<NavLink
							className="py-2 text-xs text-center hover:border-b-primary-orange hover:border-bottom-1"
							key={crypto.randomUUID()}
							to={item.to}>
							{item.text}
						</NavLink>
					))}
					<div className="flex justify-center w-full my-4">
						<SocialLinks />
					</div>
				</div>
			)}
			{isAboveMediumScreens && (
				<div className="flex items-center justify-between w-4/5 px-4 mx-auto ">
					{items.map((item: navItem) => (
						<NavLink
							className="transition-all duration-150 delay-100 hover:border-b-primary-orange hover:border-b-2"
							key={crypto.randomUUID()}
							to={item.to}>
							{item.text}
						</NavLink>
					))}
				</div>
			)}
		</div>
	);
};

export default NavBar;
