export type FullLocationType = {
	lat: number;
	lng: number;
	id: number;
	name: string;
	rating: number;
	nbrRatings: number;
	category: string;
	imgSrc: string;
	address: string;
	description: string;
	openingTime?: Date;
	closingTime?: Date;
};

type BoundsType = {
	startLat: number;
	endLat: number;
	startLng: number;
	endLng: number;
};

export const getLocations = (bounds: BoundsType): FullLocationType[] => {
	// TODO: replace with real request using bounds

	return [
		{
			lat: 51.52327054772946,
			lng: 0.032955142866448746,
			id: 1,
			name: 'Makam Echahid 1',
			rating: 4.5,
			nbrRatings: 1455,
			category: 'Site Historique',
			imgSrc: '/assets/images/place-picture.png',
			address: 'Tawenza, Beni Isguen, Ghardaia',
			description:
				"C'est une description de a sldjfgsbkd xchkx x sdhc sid djh swg djhx g djhswi sjdb suygd jhedyt sjhg usydcl jqh",
			openingTime: new Date('01-16-2023 10:00'),
			closingTime: new Date('01-16-2023 16:00'),
		},
		{
			lat: 5.52327054772946,
			lng: 10.032955142866448746,
			id: 2,
			name: 'Makam Echahid',
			rating: 4.5,
			nbrRatings: 1455,
			category: 'Site Historique',
			imgSrc: '/assets/images/place-picture.png',
			address: 'Tawenza, Beni Isguen, Ghardaia',
			description:
				"C'est une description de a sldjfgsbkd xchkx x sdhc sid djh swg djhx g djhswi sjdb suygd jhedyt sjhg usydcl jqh",
		},
		{
			lat: 35.52327054772946,
			lng: 21.032955142866448746,
			id: 3,
			name: 'Makam Echahid',
			rating: 4.5,
			nbrRatings: 1455,
			category: 'Site Historique',
			imgSrc: '/assets/images/place-picture.png',
			address: 'Tawenza, Beni Isguen, Ghardaia',
			description:
				"C'est une description de a sldjfgsbkd xchkx x sdhc sid djh swg djhx g djhswi sjdb suygd jhedyt sjhg usydcl jqh",
		},
		{
			lat: 9.52327054772946,
			lng: 101.032955142866448746,
			id: 4,
			name: 'Makam Echahid',
			rating: 4.5,
			nbrRatings: 1455,
			category: 'Site Historique',
			imgSrc: '/assets/images/place-picture.png',
			address: 'Tawenza, Beni Isguen, Ghardaia',
			description:
				"C'est une description de a sldjfgsbkd xchkx x sdhc sid djh swg djhx g djhswi sjdb suygd jhedyt sjhg usydcl jqh",
		},
	];
};
