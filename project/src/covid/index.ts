enum CovidStatus {
	Confirmed = 'confirmed',
	Recovered = 'recovered',
	Deaths = 'deaths',
}

interface Country {
	Country: string;
	CountryCode: string;
	Date: string;
	NewConfirmed: number;
	NewDeaths: number;
	NewRecovered: number;
	Premium: any;
	Slug: string;
	TotalConfirmed: number;
	TotalRecovered: number;
	TotalDeaths: number;
}

interface Global {
	NewConfirmed: number;
	NewDeaths: number;
	NewRecovered: number;
	TotalConfirmed: number;
	TotalDeaths: number;
	TotalRecovered: number;
}

interface CovidSummaryResponse {
	Countries: Country[];
	Date: string;
	Global: Global;
	Message: string;
}

interface CovidCountrySummaryResponse {
	Cases: number;
	City: string;
	CityCode: string;
	Country: string;
	CountryCode: string;
	Date: string;
	Lat: string;
	Lon: string;
	Province: string;
	Status: string;
}

export {
	Country,
	CovidStatus,
	CovidSummaryResponse,
	CovidCountrySummaryResponse,
};
