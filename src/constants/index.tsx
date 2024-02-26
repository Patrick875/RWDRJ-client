import {
	member,
	navItem,
	section,
	partner,
	sidenavType,
} from "../Shared/types";
import { MdEventAvailable, MdOutlineRestorePage } from "react-icons/md";

import doc2 from "../assets/DOC2.webp";
import doc3 from "../assets/DOC3.webp";
import doc4 from "../assets/DOC4.webp";
import doc5 from "../assets/DOC5.webp";
import doc6 from "../assets/DOC6.webp";

import doc8 from "../assets/DOC8.webp";

import partner1 from "../assets/partner1.gif";
import partner2 from "../assets/partner2.webp";
import partner3 from "../assets/partner3.webp";
import partner4 from "../assets/partner4.webp";
import partner5 from "../assets/partner5.webp";
import partner6 from "../assets/partner6.webp";
import partner7 from "../assets/partner7.webp";
import partner8 from "../assets/partner8.webp";
import partner9 from "../assets/partner9.webp";
import partner10 from "../assets/partner10.webp";

import Advocacy from "../assets/advocacy.webp";
import Compain from "../assets/Campaign.webp";
import Training1 from "../assets/Training.webp";
import Services from "../assets/Services.webp";
import { IoHomeOutline } from "react-icons/io5";
import { CiTextAlignJustify } from "react-icons/ci";

export const navs: navItem[] = [
	{
		text: "About us",
		to: "",
	},
	{
		text: "what we do",
		to: "whatwedo",
		subnavs: [
			{
				title: "Advocacy",
				to: "whatwedo/advocacy",
			},
			{
				title: "Compaign&Organizing",
				to: "whatwedo/campaign-organizing",
			},
			{
				title: "Training",
				to: "whatwedo/training",
			},
			{
				title: "Service Provision , Digital Health & SRHR",
				to: "whatwedo/service-provision",
			},
			// {
			// 	title: "Digital Health & SRHR",
			// 	to: "whatwedo/digital-health",
			// },
		],
	},
	{
		text: "Our Team",
		to: "ourteam",
	},
	{
		text: "News",
		to: "news",
	},
	{
		text: "Contact us",
		to: "contactus",
	},
];

export const sections: section[] = [
	{
		content: `As a group of young women doctors, advocating for access to
									legal and safe SRHR and friendly services is significantly
									essential. We recognize women and girls' catastrophic
									complications when they are denied rights to reproductive
									services and opt for dangerous traditional options.`,
		title: "Advocacy",
		img: Advocacy,
		moreLink: "whatwedo/advocacy",
	},
	{
		img: Compain,
		title: "Campaign&Organizing",
		moreLink: "whatwedo/campaign-organizing",
		content:
			"We believe in The power of feminist organizing.  Through collective actions, we aim to transform the gender relations that subordinate and devalue women. Feminist organizing sustains our movement and advances autonomy and equality for all women.",
	},
	{
		img: Training1,
		title: "Training",
		moreLink: "whatwedo/training",
		content:
			"Strengthening the network of young women pro-choice physicians: young physicians in Rwanda are less bound by abortion stigma than older physicians in Rwanda. ",
	},
	{
		title: "Service Provision & Digital Health & SRHR",
		img: Services,
		moreLink: "whatwedo/service-provision",
		content:
			"Nationally, abortion is only permissible in cases of rape, when the pregnant person is a child, forced marriage, in cases of incest committed with a person to the second degree of kinship, and when the pregnancy puts a risk to the health of the pregnant person or of the fetus.",
	},
	// {
	// 	title: "Digital Health & SRHR",
	// 	img: Digital,
	// 	moreLink: "whatwedo/digital-health",
	// 	content: `The COVID-19 pandemic has shown us that remote therapy works. It helps people feel safe "especially those who wants to be anonymous".
	// Telehealth increases access to healthcare in many ways. One is connecting people in need of care to providers.`,
	// },
];

export const teamMembers: member[] = [
	// {
	// 	name: "Pacific Ufitinema",
	// 	title: "Executive Director",
	// 	img: doc1,
	// },
	{
		name: "Sandrine Umutoniwase",
		title: "Assistant Director",
		img: doc2,
	},
	{
		name: "Clarisse Mutimukeye",
		title: "Senior Program Director",
		img: doc3,
	},
	{
		name: "Fanny Giraneza",
		title: "Finance&Grants Director",
		img: doc4,
	},
	{
		name: "Divine Ingabire",
		title: "Campaigns Coordinator",
		img: doc5,
	},
	{
		name: "Girimpundu Revocathe",
		title: "Psycologist",
		img: doc6,
	},
	// {
	// 	name: "Sandrine Umuhoza",
	// 	title: "Members Director",
	// 	img: doc7,
	// },
	{
		name: "Josee Murekeyisoni",
		title: "IT&Communication Director",
		img: doc8,
	},
	// {
	// 	name: "Pierrette Mfurankunda",
	// 	title: "Policy and Law Director",
	// 	img: doc9,
	// },
];

export const partners: partner[] = [
	{ link: "https://youngfeministfund.org/", img: partner1 },
	{ link: "https://numun.fund/", img: partner2 },
	{ link: "https://www.medicaldoctorsforchoice.org/mscf", img: partner3 },
	{ link: "https://www.flavoursfp.org/", img: partner4 },
	{ link: "https://msfc.org/", img: partner5 },
	{ link: "https://afroark.org/", img: partner6 },
	{ link: "https://app.companion.rw/", img: partner7 },
	{ link: "https://www.medsarwanda.org/", img: partner8 },
	{
		link: "https://www.flavoursfp.org/save-safe-abortion-videos-edutainment",
		img: partner9,
	},
	{ link: "https://www.hprwanda.org/", img: partner10 },
];

export const objectives: string[] = [
	" Improve the access for girls and women in Rwanda to high quality sexual reproductive health services.",
	" Increase knowledge and acceptance of safe abortion care, family planning and SRHR education among health care providers.",
	" Amplify women and girls' voice in the Rwandan context.",
	" Create safe space for girls and women in Rwanda for knowledge sharing and access to SRHR information.",
	" Advocate for laws and policy that advance women's right.",
	" Integrate digital technology in advancing women's right.",
	" Conduct impact research related to right and SRHR.",
	" Strengthen the network of feminists in Rwanda.",
	" Increase access to legal support for girls and women related to sexual reproductive rights.",
	" Increase the partnership with other feminist organizations both locally and internationally.",
];

export const serverUrl = "";
export const localServerUrl = "http://localhost:5000/";

export const sidenavs: sidenavType[] = [
	{
		page: "Dashboard",
		link: "",
		icon: <IoHomeOutline />,
		location: "",
	},
	{
		page: "Pages",
		link: "pages",
		icon: <MdOutlineRestorePage />,
		location: "pages",
	},
	{
		page: "Events",
		link: "events",
		icon: <MdEventAvailable />,
		location: "events",
	},
	{
		page: "Blogs",
		link: "blogs",
		icon: <CiTextAlignJustify />,
		location: "blogs",
	},
];

// function extractAndReplaceBase64ImageData(htmlContent: string): {
// 	content: string;
// 	contentImages: string[];
// } {
// 	const imgTagsRegex = /<img.*?src="(data:image\/[^;]+;base64,([^"]+))".*?>/g;
// 	const contentImages: string[] = [];
// 	let index = 1;

// 	let replacedHtmlContent = htmlContent.replace(
// 		imgTagsRegex,
// 		(_, imageData, base64Data) => {
// 			contentImages.push(imageData); // Push original base64 string
// 			return _.replace(base64Data, `IMAGE-${index++}`); // Replace src attribute with IMAGE-1, IMAGE-2, etc.
// 		}
// 	);

// 	// Remove 'data:image/png;base64,' prefix from the replaced content
// 	replacedHtmlContent = replacedHtmlContent.replace(
// 		/data:image\/png;base64,/g,
// 		""
// 	);

// 	return { content: replacedHtmlContent, contentImages };
// }

export function formatDate(date: string): string {
	// Extract date components
	const year = new Date(date).getFullYear();
	const month = String(new Date(date).getMonth() + 1).padStart(2, "0"); // Month is zero-based
	const day = String(new Date(date).getDate()).padStart(2, "0");
	const hours = String(new Date(date).getHours()).padStart(2, "0");
	const minutes = String(new Date(date).getMinutes()).padStart(2, "0");

	// Format date string
	const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

	return formattedDate;
}
