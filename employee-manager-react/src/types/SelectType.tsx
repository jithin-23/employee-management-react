export interface StatusOptions {
    value: string;
    text: string;
}

export interface SelectStatus {
    id:string,
    label:string,
    options: StatusOptions[]
}
