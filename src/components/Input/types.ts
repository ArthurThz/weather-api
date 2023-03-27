export interface IInput {
    placeholder: string,
    onChange?: (event : React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
}