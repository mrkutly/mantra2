interface SiteLink {
	id: number;
	href: string;
	display: string;
	partial: boolean;
	isHash: boolean;
}

interface Video {
	title: string;
	url: string;
}

interface Concert {
	id: string;
	date: string;
	location: {
		city: string;
		support: string;
		venue: string;
	};
	program: {
		composer: string;
		description: string;
		title: string;
	};
}

interface CalendarNode {
	node: {
		concerts: Concert[];
		year: number;
	};
}