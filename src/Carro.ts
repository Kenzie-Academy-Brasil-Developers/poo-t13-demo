import { Veiculo } from "./Veiculo";

interface IMarca {
    [modelo: string]: string;
}

export class Carro extends Veiculo {
    private marca: IMarca;

    constructor(modelo: string, cor: string, ano: number) {
        super(modelo, cor, ano);
        this.marca = {
            'Hb20': 'Hyundai',
            'Civic': 'Honda',
            'X1': 'BMW'
        }
    }

    public obterCor() {
        return this.cor;
    }

    public obterAno() {
        return this.ano;
    }

    public obterModelo() {
        return this.modelo;
    }

    public obterMarca() {
        return this.marca[this.modelo];
    }

    public obterIdadeDoCarro(): number {
        return new Date().getFullYear() - this.ano;
    }
}