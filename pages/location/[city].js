import CityInfo from "../../components/CityInfo/CityInfo";

import cities from "../../lib/city.list.json";

let language = "";

const getCity = (param) => {
  const cityParam = param.trim();

  const splitCity = cityParam.split("-");
  const cityId = splitCity[splitCity.length - 2];
  language = splitCity[splitCity.length - 1];
  console.log(cityId);

  if (!cityId) {
    return null;
  }

  const city = cities.find((city) => city.id.toString() === cityId);

  if (city) {
    return city;
  } else {
    return null;
  }
};

const City = (props) => {
  return (
    <>
      <CityInfo
        cityName={props.city.name}
        weather={props.currentWeather}
        temperature={props.temperature}
        offset={props.offset}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  const city = getCity(context.params.city);
  console.log(city);

  if (!city) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&units=metric&exclude=minutely&lang=${language}`
  );

  const data = await res.json();

  if (!data) {
    return { notFound: true };
  }

  const slug = context.params.city;

  //   return {
  //     props: { slug: slug, data: data },
  //   };

  return {
    props: {
      city: city,
      currentWeather:
        data.current.weather[0].description.charAt(0).toUpperCase() +
        data.current.weather[0].description.slice(1),
      offset: data.timezone_offset / 3600,
      temperature: data.current.temp,
    },
  };
}

export default City;
