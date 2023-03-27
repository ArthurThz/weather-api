import { useState } from "react";

import { Container, Row, Wrapper } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Infos from "../../components/Infos";
const Wheter = () => {
  const [cityName, setCityName] = useState("");
  const [Search, setSearch] = useState(cityName);

  const handleCityName = (event: { target: HTMLInputElement }) => {
    setCityName(event.target.value);
  };

  const handleConfirmSearch = () => {
    setSearch(cityName);
  };

  return (
    <Container>
      <h1>Weather Today</h1>
      <Wrapper>
        <Row>
          <Input
            onChange={handleCityName}
            placeholder="Digite o nome da cidade"
          />
          <Button onClick={handleConfirmSearch} title="Confirmar" />
        </Row>
        <Infos cityName={Search} />
      </Wrapper>
    </Container>
  );
};

export default Wheter;
