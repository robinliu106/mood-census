import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

export const placeSearch = async (place) => {
    const res = await Geocode.fromAddress(`${place}`);
    const { lat, lng } = await res.results[0].geometry.location;
    console.log("api ", lat, lng);
    return { lat, lng };
};
