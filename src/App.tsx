import { Route, Routes } from "react-router-dom";
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
import Contactus from "./Screens/ContactUs";
import OurTeam from "./Screens/OurTeam";
import Advocacy from "./Screens/WhatWeDo/Advocacy";
import ScrollRestoration from "./Shared/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import News from "./Screens/News";
import Blogs from "./Screens/Blogs";
import Events from "./Screens/Events";
import Publications from "./Screens/Publications";
import HomeDashboard from "./Screens/Admin/HomeDashboard";
import Pages from "./Screens/Admin/Pages";
import BlogPage from "./Screens/Admin/BlogPage";
import EventsAdmin from "./Screens/Admin/EventsAdmin";

function App() {
	return (
		<>
			<AnimatePresence mode="wait">
				<ScrollRestoration />
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<AboutUs />} />
						<Route path="whoweare" element={<WhoWeAre />} />
						<Route path="mission" element={<OurMission />} />
						<Route path="contactus" element={<Contactus />} />
						<Route path="news" element={<News />}>
							<Route index element={<Blogs />} />
							<Route path="events" element={<Events />} />
							<Route path="publications" element={<Publications />} />
						</Route>
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
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;

{
	/* <Route path="/admin" element={<LayoutAdmin />}>
	<Route index element={<Login />} />
	<Route path="register" element={<RegisterUser />} />
	<Route
		path="dashboard"
		element={<PrivateRoute element={<AdminDashboard />} />}>
		<Route index element={<HomeDashboard />} />
		<Route path="pages" element={<Pages />} />
		<Route path="blogs" element={<BlogPage />} />
		<Route path="events" element={<EventsAdmin />} />
	</Route>
</Route>; */
}
