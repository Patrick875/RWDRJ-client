import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {
	return (
		<div className="w-full bg-[#F1F1F1]">
			<div>
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
