interface courtImagesData {
  id: number;
  court_id: number;
  image_url: string;
}

interface LocationData {
  id: number;
  country: string;
  city: string;
  location_link: string;
  court_id: number;
}

interface CourtPriceData {
  id: number;
  court_id: number;
  starting_price: string;
  max_guests: number;
  additional_guests: number;
  price_of_additional_guests: string;
}

interface CourtsData {
  id: number;
  user_id: number;
  court_name: string;
  court_type: string;
  venue_overview: any;
  rules_of_venue: string;
  locationData: LocationData;
  courtPriceData: CourtPriceData;
  courtImagesData: courtImagesData[];
}
