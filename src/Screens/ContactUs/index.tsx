import ContactUsForm from "../AboutUs/ContactUsForm";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import marker from "./../../assets/marker.gif";
import AnimatePage from "../../Shared/AnimatePage";

function Contactus() {
	const customIcon = new Icon({
		iconUrl: marker,
		iconSize: [38, 38],
	});

	return (
		<AnimatePage>
			<div className="flex flex-col items-center justify-center w-full h-56 bg-center bg-cover bg-image-whoweare">
				<div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-page-cover">
					<p className="w-5/6 text-xl font-bold text-center text-white">
						We are always eager to hear from you!!!
					</p>
				</div>
			</div>
			<section id="contactus" className="w-5/6 py-8 mx-auto">
				<p className="py-4 text-lg font-bold text-gray-600">Contact Us</p>
				<div className="flex flex-col-reverse w-full md:flex-col">
					<div className="w-full pr-8 md:w-1/2">
						<ContactUsForm />
					</div>
					<div className="w-full md:w-1/2">
						<p className="text-xl font-bold text-gray-600">
							For any queries or concerns, don't hesitate to contact us
						</p>
						<p className="my-2 text-sm font-light">Call us directly</p>
						<p className="my-2 font-bold text-md">+250782864790</p>
						<p className="my-2 text-sm font-light">Contact email</p>
						<p className="my-2 font-bold text-md">
							womenreproductivejustice@gmail.com
						</p>
						<p className="my-2 font-bold text-md">eb@womenrepro.org</p>

						<MapContainer
							className="w-full h-52 rounded-[8px]"
							center={[-1.936763, 30.089463]}
							zoom={13}
							scrollWheelZoom={false}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Marker icon={customIcon} position={[-1.936763, 30.089463]}>
								<Popup>
									<p className="text-xs font-bold text-primary-orange">
										KG 216 ST 20
									</p>
								</Popup>
							</Marker>
						</MapContainer>
					</div>
				</div>
			</section>
		</AnimatePage>
	);
}

export default Contactus;
