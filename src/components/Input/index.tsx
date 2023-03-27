import { InputContainer, InputText } from "./styles";
import { IInput } from "./types";

const Input = ({ placeholder, onChange, value }: IInput) => {
  return (
    <InputContainer>
      <InputText value={value} onChange={onChange} placeholder={placeholder} />
    </InputContainer>
  );
};

export default Input;
