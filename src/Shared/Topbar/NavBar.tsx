import { navItem } from "../types";
import useMediaQuery from "../../Hooks/useMediaQuery";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

interface navbarProps {
	items: navItem[];
}

const NavBar = ({ items }: navbarProps) => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px");

	return (
		<div className="flex-1 ">
			{!isAboveMediumScreens && (
				<div className="flex flex-col flex-1 w-full gap-2 font-medium text-sxl">
					{items.map((item: navItem) =>
						!item.subnavs ? (
							<Link
								className="py-2 text-xs text-center hover:border-b-primary-orange hover:border-bottom-1"
								key={crypto.randomUUID()}
								to={item.to}>
								{item.text}
							</Link>
						) : (
							<div className=" group">
								<p
									className="py-2 text-xs text-center capitalize cursor-pointer group-hover:border-b-primary-orange hover:border-bottom-1"
									key={crypto.randomUUID()}>
									{item.text}
								</p>
								<div className="hidden p-3 group-hover:block bg-slate-100">
									{item.subnavs.map((item) => (
										<Link
											className="block py-2 text-xs text-center hover:cursor-pointer hover:border-b-primary-orange hover:border-bottom-1"
											key={crypto.randomUUID()}
											to={item.to}>
											{item.title}
										</Link>
									))}
								</div>
							</div>
						)
					)}
					<div className="flex justify-center w-full my-4">
						<SocialLinks />
					</div>
				</div>
			)}
			{isAboveMediumScreens && (
				<div className="flex items-center justify-between w-4/5 px-4 mx-auto ">
					{items.map((item: navItem) =>
						!item.subnavs ? (
							<Link
								className="  transition-hover duration-150 py-2 text-xs text-center  hover:border-b-primary-orange hover:border-b-[1.5px]"
								key={crypto.randomUUID()}
								to={item.to}>
								{item.text}
							</Link>
						) : (
							<div className="relative group">
								<p
									className="py-2 text-xs text-center capitalize cursor-pointer group-hover:border-b-primary-orange hover:border-bottom-1"
									key={crypto.randomUUID()}>
									{item.text}
								</p>
								<div className="absolute z-50 hidden p-3 group-hover:block bg-slate-100">
									{item.subnavs.map((item) => (
										<Link
											className="block py-2 text-xs hover:cursor-pointer hover:border-b-primary-orange hover:border-bottom-1"
											key={crypto.randomUUID()}
											to={item.to}>
											{item.title}
										</Link>
									))}
								</div>
							</div>
						)
					)}
				</div>
			)}
		</div>
	);
};

export default NavBar;
