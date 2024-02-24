import { TwitterTimelineEmbed } from "react-twitter-embed";

function TwitterTimeLine() {
	return (
		<TwitterTimelineEmbed
			sourceType="profile"
			screenName="doctors_women"
			options={{
				height: "300",
			}}
		/>
	);
}

export default TwitterTimeLine;
