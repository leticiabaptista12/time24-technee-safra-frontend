export interface IGetOption {
    requiredValue: number;
    cpf: string;
}

export interface IOption {
    qntPortion: number;
    valuePortion: number;
    tax: string;
}

export interface IOptions {
    options: IOption[];
    totalValue: number;
}

export interface IChosseOption {
    option: IOption;
    totalValue: number;
    cpf: string;
}

export interface ITerms {
    isClient: boolean;
    hasPix: boolean;
    isPixSafra: boolean;
    terms: string;
}

export interface IAccepted {
    cpf: string;
    acpTerms: boolean;
    acpPix: boolean;
}
