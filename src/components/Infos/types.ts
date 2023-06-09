export interface IInfos {
  cityName: string;
}

export interface IData {
  name?: string;
  main?: { temp: number; humidity: number };
  weather?: [
    {
      description?: string;
      icon?: string;
    }
  ];
  wind: {
    speed: number;
  };
}


