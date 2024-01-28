import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

type Props = {};

function SocialLinks({}: Props) {
	return (
		<div className="  flex gap-2 items-center">
			<FaSquareXTwitter className="text-lg" />
			<FaYoutube className="text-lg" />
			<FaFacebook className="text-lg" />
			<FaInstagram className="text-lg" />
		</div>
	);
}

export default SocialLinks;
