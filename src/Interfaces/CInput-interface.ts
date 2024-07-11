export interface CInputInt {
    type : string
    name : string
    design: string
    placeholder : string
    onChange : (value: React.ChangeEvent<HTMLInputElement>) => void;
}