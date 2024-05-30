import { TwitterTimelineEmbed } from "react-twitter-embed";

interface Props {
	profile: string;
}

function TwitterTimeLine({ profile }: Props) {
	return (
		<TwitterTimelineEmbed
			sourceType="profile"
			screenName={profile}
			options={{
				height: "300",
			}}
		/>
	);
}

export default TwitterTimeLine;

// import React from "react";
// import { Timeline } from "react-twitter-widgets";

// interface Props {
// 	profile: string;
// }

// const TwitterTimeLine: React.FC<Props> = ({ profile }) => {
// 	return (
// 		<div>
// 			<Timeline
// 				dataSource={{
// 					sourceType: "profile",
// 					screenName: profile,
// 				}}
// 				options={{
// 					height: "300",
// 				}}
// 			/>
// 		</div>
// 	);
// };

// export default TwitterTimeLine;
