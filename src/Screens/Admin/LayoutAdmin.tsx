import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function LayoutAdmin() {
	return (
		<div>
			<SideBar />
			<Outlet />
		</div>
	);
}

export default LayoutAdmin;
