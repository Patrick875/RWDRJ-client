import { Outlet } from "react-router-dom";
import SideBarNav from "../../Shared/SideBarNav";
import { useState } from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";

function AdminDashboard() {
	const [isOpen, setIsOpen] = useState(false);
	const isAboveSmallScenes = useMediaQuery("(min-width:768px)");
	return (
		<div className="relative grid-cols-8 md:grid w-100 ">
			<SideBarNav isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className="col-span-8 md:col-span-6 ">
				<div
					className={`${
						isOpen ? " hidden " : " "
					}min-h-screen px-6  bg-slate-100`}>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default AdminDashboard;
