// No diretório models serão colocadas as definição dos tipos do negócio como a venda que é este arquivo

export type Sale = {
    id: number;
    sallerName: string;
    date: string;
    visited: number;
    deals: number;
    amount: number;
}
