import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Topbar from "../../Shared/Topbar";

const Layout = () => {
	return (
		<div className="w-full bg-[#F1F1F1]">
			<div>
				<Topbar />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
