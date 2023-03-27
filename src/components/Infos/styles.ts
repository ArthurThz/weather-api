import styled from "styled-components";

export const ContainerInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #91d1f6;
  margin-top: 15px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WheaterIcon = styled.img`
  height: 50px;
  width: 50px;
`;

export const CityName = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

export const Temperature = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 40px;
    font-weight: 700;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 20px;
  font-weight: 700;

  color: red;
`;
export const WeatherInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top:15px;

  div{
    display:flex;   
    align-items:center;
    justify-content:space-around;
    
   img{
    height:40px;
    width:40px;
   }
  }
`;
