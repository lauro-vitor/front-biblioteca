interface AlunoParametro {
    nome?: string;
    matricula?: string;
    dataNascimento?: string;
    somenteAtivos?: boolean;

    pageIndex: number;
    pageSize: number;
    sortProp?: string;
    sortDirection?: string;
}

export { AlunoParametro };