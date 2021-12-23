import CityInfo from "../../components/CityInfo/CityInfo";
import Layout from "../../components/layout/Layout";

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

// const convertTime = (offset) => {
//   const date = new Date();
//   const localTime = date.getTime();
//   const localOffset = date.getTimezoneOffset() * 60000;

//   //London hour
//   const utc = localTime + localOffset;
//   const currentTime = utc + 3600000 * offset;

//   return new Date(currentTime);
// };

const City = (props) => {
  return (
    <Layout>
      <CityInfo
        cityName={props.city.name}
        weather={props.currentWeather}
        temperature={props.temperature}
        offset={props.offset}
        sunrise={props.sunrise}
        sunset={props.sunset}
      />
    </Layout>
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

  console.log(data);

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
      sunrise: data.current.sunrise * 1000,
      sunset: data.current.sunset * 1000,
    },
  };
}

export default City;
