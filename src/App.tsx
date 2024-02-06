import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Layout from "./Screens/Layout";
import AboutUs from "./Screens/AboutUs";
import LayoutAdmin from "./Screens/Admin/LayoutAdmin";
import Login from "./Screens/Login";
import RegisterUser from "./Screens/RegisterUser";
import AdminDashboard from "./Screens/Admin/AdminDashboard";
import PrivateRoute from "./Screens/Admin/PrivateRoute";
import WhoWeAre from "./Screens/WhoWeAre";

import OurMission from "./Screens/OurMission";
import CampaignAndOrganizing from "./Screens/WhatWeDo/CampaignAndOrganizing";
import Training from "./Screens/WhatWeDo/Training";
import ServiceProvision from "./Screens/WhatWeDo/ServiceProvision";
import DigitalHealthSHSR from "./Screens/WhatWeDo/DigitalHealthSHSR";
import Advocacy from "./Screens/WhatWeDo/Advocacy";
import Contactus from "./Screens/ContactUs";
import OurTeam from "./Screens/OurTeam";

function App() {
	return (
		<>
			<ScrollRestoration />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<AboutUs />} />
					<Route path="whoweare" element={<WhoWeAre />} />
					<Route path="mission" element={<OurMission />} />
					<Route path="contactus" element={<Contactus />} />
					<Route path="ourteam" element={<OurTeam />} />
					<Route path="whatwedo/advocacy" element={<Advocacy />} />
					<Route
						path="whatwedo/campaign-organizing"
						element={<CampaignAndOrganizing />}
					/>
					<Route path="whatwedo/training" element={<Training />} />
					<Route
						path="whatwedo/service-provision"
						element={<ServiceProvision />}
					/>
					<Route
						path="whatwedo/digital-health"
						element={<DigitalHealthSHSR />}
					/>
					<Route />
				</Route>
				<Route path="/admin" element={<LayoutAdmin />}>
					<Route index element={<Login />} />
					<Route path="register" element={<RegisterUser />} />
					<Route
						path="dashboard"
						element={<PrivateRoute element={<AdminDashboard />} />}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
