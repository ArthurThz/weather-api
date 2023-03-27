import { useState, useEffect } from "react";

import { apiPathUrl, imgPathUrl } from "../../services/api";
import windIcon from "../../assets/wind.svg";
import humidityIcon from "../../assets/humidity.svg";

import {
  CityName,
  ContainerInfos,
  Row,
  WheaterIcon,
  Temperature,
  WeatherInfos,
} from "./styles";
import { IData, IInfos } from "./types";

const Infos = ({ cityName }: IInfos) => {
  const [data, setData] = useState<IData>();
  const city = cityName;

  useEffect(() => {
    if (city) {
      fetch(`${apiPathUrl}${city}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error, "Teste"));
    }
  }, [city]);

  return (
    <ContainerInfos>
      {data?.name ? (
        <>
          <Row>
            <CityName>{data?.name}</CityName>
          </Row>
          <Row>
            {data?.weather?.[0].icon ? (
              <>
                <WheaterIcon
                  src={`https://openweathermap.org/img/wn/${data?.weather?.[0].icon}.png`}
                />
                <div>{data.weather?.[0].description}</div>
              </>
            ) : null}
          </Row>
          <Row>
            <Temperature>
              <p>{`${data.main?.temp} °`}</p>
            </Temperature>
          </Row>

          <WeatherInfos>
            <div>
              <img src={humidityIcon} alt="icone humidade" />
              <p>{`${data.main?.humidity}%`}</p>
            </div>
            <div>
              <img src={windIcon} alt="icone vento" />
              <p>{`${data.wind?.speed} km/h`}</p>
            </div>
          </WeatherInfos>
        </>
      ) : null}
    </ContainerInfos>
  );
};

export default Infos;
