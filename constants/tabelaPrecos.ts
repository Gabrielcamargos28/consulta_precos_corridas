export interface Viagem {
    id: number;
    origem: string;
    destino: string;
    distancia: string; // Campo não disponível na tabela original
    preco: number;
    tempoEstimado: string; // Campo não disponível na tabela original
}

export const tabelaPrecos: Viagem[] = [
    // Corridas na Cidade
    { id: 1, origem: "Centro", destino: "Serra negra", distancia: "", preco: 23.00, tempoEstimado: "" },
    { id: 2, origem: "Centro", destino: "Nações/ Europa", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 3, origem: "Centro", destino: "Morada do sol", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 4, origem: "Centro", destino: "Carajás/ Ouro preto", distancia: "", preco: 18.00, tempoEstimado: "" },
    { id: 5, origem: "Centro", destino: "Boa esperança", distancia: "", preco: 17.00, tempoEstimado: "" },
    { id: 6, origem: "Centro", destino: "Constantino/Cidade jardim", distancia: "", preco: 15.00, tempoEstimado: "" },
    { id: 7, origem: "Centro", destino: "São Benedito/rodoviária", distancia: "", preco: 15.00, tempoEstimado: "" },
    { id: 8, origem: "Centro", destino: "São Francisco", distancia: "", preco: 15.00, tempoEstimado: "" },
    { id: 9, origem: "Centro", destino: "Santa Terezinha", distancia: "", preco: 17.00, tempoEstimado: "" },
    { id: 10, origem: "Centro", destino: "São judas", distancia: "", preco: 17.00, tempoEstimado: "" },
    { id: 11, origem: "Centro", destino: "N Senhora de Fátima", distancia: "", preco: 15.00, tempoEstimado: "" },
    { id: 12, origem: "Centro", destino: "Cruzeiro da Serra", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 13, origem: "Centro", destino: "Belvedere", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 14, origem: "Centro", destino: "Matinha", distancia: "", preco: 17.00, tempoEstimado: "" },
    { id: 15, origem: "Centro", destino: "São Cristóvão", distancia: "", preco: 15.00, tempoEstimado: "" },
    { id: 16, origem: "Centro", destino: "Setor industrial", distancia: "", preco: 17.00, tempoEstimado: "" },
    { id: 17, origem: "Centro", destino: "Marciano Brandão", distancia: "", preco: 15.00, tempoEstimado: "" },
    { id: 18, origem: "Centro", destino: "São Vicente", distancia: "", preco: 15.00, tempoEstimado: "" },
    { id: 19, origem: "Centro", destino: "Morada nova/ Dona diva", distancia: "", preco: 17.00, tempoEstimado: "" },
    { id: 20, origem: "Centro", destino: "Enéias", distancia: "", preco: 18.00, tempoEstimado: "" },
    { id: 21, origem: "Centro", destino: "Jardim Sul", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 22, origem: "Centro", destino: "Monaco", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 23, origem: "Centro", destino: "Manuel nunes", distancia: "", preco: 18.00, tempoEstimado: "" },
    { id: 24, origem: "Centro", destino: "Olimpio nunes", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 25, origem: "Centro", destino: "Cristo redentor", distancia: "", preco: 23.00, tempoEstimado: "" },
    { id: 26, origem: "Centro", destino: "Savana", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 27, origem: "Centro", destino: "Intense", distancia: "", preco: 30.00, tempoEstimado: "" },
    { id: 28, origem: "Centro", destino: "Corpo e alma", distancia: "", preco: 35.00, tempoEstimado: "" },
    { id: 29, origem: "Jardim sul", destino: "São Cristóvão", distancia: "", preco: 18.00, tempoEstimado: "" },
    { id: 30, origem: "Jardim sul", destino: "São judas", distancia: "", preco: 23.00, tempoEstimado: "" },
    { id: 31, origem: "Jardim sul", destino: "Constantino/Cidade jardim", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 32, origem: "Jardim sul", destino: "Manuel nunes", distancia: "", preco: 22.00, tempoEstimado: "" },
    { id: 33, origem: "Jardim sul", destino: "Olimpio nunes", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 34, origem: "Jardim sul", destino: "Matinha", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 35, origem: "Jardim sul", destino: "Cruzeiro da Serra", distancia: "", preco: 27.00, tempoEstimado: "" },
    { id: 36, origem: "Jardim sul", destino: "Santa Terezinha", distancia: "", preco: 23.00, tempoEstimado: "" },
    { id: 37, origem: "Jardim sul", destino: "Morada do sol", distancia: "", preco: 23.00, tempoEstimado: "" },
    { id: 38, origem: "Jardim sul", destino: "Boa esperança", distancia: "", preco: 22.00, tempoEstimado: "" },
    { id: 39, origem: "Jardim sul", destino: "Carajás/ Ouro preto", distancia: "", preco: 22.00, tempoEstimado: "" },
    { id: 40, origem: "Jardim sul", destino: "Nações/ Europa", distancia: "", preco: 25.00, tempoEstimado: "" },
    { id: 41, origem: "Jardim sul", destino: "Serra negra", distancia: "", preco: 27.00, tempoEstimado: "" },
    { id: 42, origem: "Jardim sul", destino: "Marciano Brandão", distancia: "", preco: 18.00, tempoEstimado: "" },
    { id: 43, origem: "Jardim sul", destino: "São Benedito/rodoviária", distancia: "", preco: 25.00, tempoEstimado: "" },
    { id: 44, origem: "Jardim sul", destino: "Morada nova/ Dona diva", distancia: "", preco: 15.00, tempoEstimado: "" },
    { id: 45, origem: "Jardim sul", destino: "N Senhora de Fátima", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 46, origem: "Jardim sul", destino: "São Vicente", distancia: "", preco: 18.00, tempoEstimado: "" },
    { id: 47, origem: "Serra negra", destino: "Boa esperança", distancia: "", preco: 18.00, tempoEstimado: "" },
    { id: 48, origem: "Serra negra", destino: "Carajás/ Ouro preto", distancia: "", preco: 18.00, tempoEstimado: "" },
    { id: 49, origem: "Serra negra", destino: "N Senhora de Fátima", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 50, origem: "Serra negra", destino: "Constantino/Cidade jardim", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 51, origem: "Serra negra", destino: "São Benedito/rodoviária", distancia: "", preco: 25.00, tempoEstimado: "" },
    { id: 52, origem: "Serra negra", destino: "São Francisco", distancia: "", preco: 23.00, tempoEstimado: "" },
    { id: 53, origem: "Serra negra", destino: "São judas", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 54, origem: "Serra negra", destino: "São Vicente", distancia: "", preco: 23.00, tempoEstimado: "" },
    { id: 55, origem: "Serra negra", destino: "Santa Terezinha", distancia: "", preco: 25.00, tempoEstimado: "" },
    { id: 56, origem: "Serra negra", destino: "Morada do sol", distancia: "", preco: 20.00, tempoEstimado: "" },
    { id: 57, origem: "Serra negra", destino: "Marciano Brandão", distancia: "", preco: 23.00, tempoEstimado: "" },
    { id: 58, origem: "Serra negra", destino: "Morada nova/ Dona diva", distancia: "", preco: 23.00, tempoEstimado: "" },
    { id: 59, origem: "Serra negra", destino: "Cruzeiro da Serra", distancia: "", preco: 27.00, tempoEstimado: "" },
    { id: 60, origem: "Serra negra", destino: "Cristo redentor", distancia: "", preco: 30.00, tempoEstimado: "" },
    { id: 61, origem: "Serra negra", destino: "Manuel nunes", distancia: "", preco: 28.00, tempoEstimado: "" },
    { id: 62, origem: "Serra negra", destino: "Olimpio nunes", distancia: "", preco: 25.00, tempoEstimado: "" },
    { id: 63, origem: "Serra negra", destino: "Mart minas", distancia: "", preco: 27.00, tempoEstimado: "" },
    { id: 64, origem: "Serra negra", destino: "Enéias", distancia: "", preco: 25.00, tempoEstimado: "" },
    { id: 65, origem: "Serra negra", destino: "Monaco", distancia: "", preco: 28.00, tempoEstimado: "" },
    { id: 66, origem: "Amir Amaral", destino: "Jardim Sul", distancia: "", preco: 27.00, tempoEstimado: "" },
    { id: 67, origem: "Amir Amaral", destino: "Serra negra", distancia: "", preco: 28.00, tempoEstimado: "" },
    { id: 68, origem: "Amir Amaral", destino: "Centro", distancia: "", preco: 20.00, tempoEstimado: "" },
    // Tabela de Viagens (Origem "Patrocínio" assumida)
    { id: 69, origem: "Patrocínio", destino: "Penitenciária", distancia: "", preco: 40.00, tempoEstimado: "" },
    { id: 70, origem: "Patrocínio", destino: "Pif paf", distancia: "", preco: 70.00, tempoEstimado: "" },
    { id: 71, origem: "Patrocínio", destino: "Trevo de coromandel", distancia: "", preco: 50.00, tempoEstimado: "" },
    { id: 72, origem: "Patrocínio", destino: "Tejuco", distancia: "", preco: 70.00, tempoEstimado: "" },
    { id: 73, origem: "Patrocínio", destino: "Martins", distancia: "", preco: 70.00, tempoEstimado: "" },
    { id: 74, origem: "Patrocínio", destino: "São João", distancia: "", preco: 80.00, tempoEstimado: "" },
    { id: 75, origem: "Patrocínio", destino: "Guimarania", distancia: "", preco: 100.00, tempoEstimado: "" },
    { id: 76, origem: "Patrocínio", destino: "Macaúba", distancia: "", preco: 100.00, tempoEstimado: "" },
    { id: 77, origem: "Patrocínio", destino: "Silvano", distancia: "", preco: 100.00, tempoEstimado: "" },
    { id: 78, origem: "Patrocínio", destino: "Salitre", distancia: "", preco: 100.00, tempoEstimado: "" },
    { id: 79, origem: "Patrocínio", destino: "Santa Luzia", distancia: "", preco: 130.00, tempoEstimado: "" },
    { id: 80, origem: "Patrocínio", destino: "Euroshen", distancia: "", preco: 130.00, tempoEstimado: "" },
    { id: 81, origem: "Patrocínio", destino: "Serra de Salitre", distancia: "", preco: 170.00, tempoEstimado: "" },
    { id: 82, origem: "Patrocínio", destino: "Pedros", distancia: "", preco: 180.00, tempoEstimado: "" },
    { id: 83, origem: "Patrocínio", destino: "Celso bueno", distancia: "", preco: 170.00, tempoEstimado: "" },
    { id: 84, origem: "Patrocínio", destino: "Zé Martins", distancia: "", preco: 150.00, tempoEstimado: "" },
    { id: 85, origem: "Patrocínio", destino: "Catiara", distancia: "", preco: 180.00, tempoEstimado: "" },
    { id: 86, origem: "Patrocínio", destino: "Boa Vista", distancia: "", preco: 200.00, tempoEstimado: "" },
    { id: 87, origem: "Patrocínio", destino: "Patos de minas", distancia: "", preco: 230.00, tempoEstimado: "" },
    { id: 88, origem: "Patrocínio", destino: "Coromandel", distancia: "", preco: 200.00, tempoEstimado: "" },
    { id: 89, origem: "Patrocínio", destino: "Irai de minas", distancia: "", preco: 200.00, tempoEstimado: "" },
    { id: 90, origem: "Patrocínio", destino: "Santa Rosa", distancia: "", preco: 200.00, tempoEstimado: "" },
    { id: 91, origem: "Patrocínio", destino: "Perdizes", distancia: "", preco: 200.00, tempoEstimado: "" },
    { id: 92, origem: "Patrocínio", destino: "Monte Carmelo", distancia: "", preco: 250.00, tempoEstimado: "" },
    { id: 93, origem: "Patrocínio", destino: "Santo A quebranzol", distancia: "", preco: 250.00, tempoEstimado: "" },
    { id: 94, origem: "Patrocínio", destino: "Araxá", distancia: "", preco: 300.00, tempoEstimado: "" },
    { id: 95, origem: "Patrocínio", destino: "Nova ponte", distancia: "", preco: 320.00, tempoEstimado: "" },
    { id: 96, origem: "Patrocínio", destino: "Carmo do paranaiba", distancia: "", preco: 400.00, tempoEstimado: "" },
    { id: 97, origem: "Patrocínio", destino: "São gotardo", distancia: "", preco: 400.00, tempoEstimado: "" },
    { id: 98, origem: "Patrocínio", destino: "Uberlândia", distancia: "", preco: 500.00, tempoEstimado: "" },
    { id: 99, origem: "Patrocínio", destino: "Uberaba", distancia: "", preco: 500.00, tempoEstimado: "" },
    { id: 100, origem: "Patrocínio", destino: "Araguari", distancia: "", preco: 500.00, tempoEstimado: "" },
    { id: 101, origem: "Patrocínio", destino: "Pirapora", distancia: "", preco: 950.00, tempoEstimado: "" },
];

export const getOrigens = (): string[] => {
    return [...new Set(tabelaPrecos.map(item => item.origem))].sort();
};

export const getDestinos = (): string[] => {
    return [...new Set(tabelaPrecos.map(item => item.destino))].sort();
};

export const formatarPreco = (preco: number): string => {
    return `R$ ${preco.toFixed(2).replace('.', ',')}`;
};