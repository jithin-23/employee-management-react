export interface Options {
    value: string;
    text: string;
}

export interface SelectStatus {
    id:string,
    label:string,
    options: Options[]
    value:string,
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
