interface Aluno {
    idAluno?: string;
    nome: string; 
    matricula: string;
    dataNascimento: string;
    sexo: string;
    desativado?: boolean;
};

export {Aluno};