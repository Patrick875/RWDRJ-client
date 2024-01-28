import { Outlet } from "react-router-dom";

function AdminDashboard() {
	const isOpen: boolean = false;

	return (
		<div className="relative grid-cols-8 md:grid w-100 ">
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
