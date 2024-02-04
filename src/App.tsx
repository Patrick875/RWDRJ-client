import { Route, Routes } from "react-router-dom";
import Layout from "./Screens/Layout";
import AboutUs from "./Screens/AboutUs";
import Blog from "./Screens/Blog";
import LayoutAdmin from "./Screens/Admin/LayoutAdmin";
import Login from "./Screens/Login";
import RegisterUser from "./Screens/RegisterUser";
import AdminDashboard from "./Screens/Admin/AdminDashboard";
import PrivateRoute from "./Screens/Admin/PrivateRoute";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<AboutUs />} />
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
