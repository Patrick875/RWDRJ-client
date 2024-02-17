import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function AdminDashboard(): React.FC {
	const isOpen: boolean = false;

	return (
		<div className="relative grid-cols-8 md:grid w-100 ">
			<SideBar />
			<div className="col-span-8 md:col-span-6 ">
				<div
					className={`${
						isOpen ? " hidden " : " "
					}min-h-screen p-2  bg-slate-100`}>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default AdminDashboard;
