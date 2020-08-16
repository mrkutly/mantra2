interface Album {
	title: string;
	url: string;
	href: string;
	host: string;
	height: string;
}

interface Article {
	author: string;
	publication: string;
	pullQuote: string;
	title: string;
	url: string;
}

interface CalendarNode {
	node: {
		concerts: Concert[];
		year: number;
	};
}

interface Concert {
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
