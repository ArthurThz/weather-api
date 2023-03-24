import { useState, useEffect } from "react";

import { apiPathUrl, imgPathUrl } from "../../services/api";

import { InfosContainer } from "../../pages/Wheter/styles";
import { CityName, Row, WheaterIcon } from "./styles";
import { IData, IInfos } from "./types";

const Infos = ({ cityName }: IInfos) => {
  const [data, setData] = useState<IData>();

  const city = cityName;

  useEffect(() => {
    if (city != "") {
      fetch(`${apiPathUrl}${city}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  }, [city]);
  console.log(data);
  return (
    <InfosContainer>
      <Row>
        <WheaterIcon
          src={`https://openweathermap.org/img/wn/${data?.weather?.[0].icon}.png`}
        />
        <CityName>{data?.name}</CityName>
      </Row>
    </InfosContainer>
  );
};

export default Infos;
