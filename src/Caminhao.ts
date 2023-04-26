import { Carro } from "./Carro";

export class Caminhao extends Carro {
    private tamanhoCacamba: number;

    constructor(modelo: string, cor: string, ano: number, tamanhoCacamba: number) {
        super(modelo, cor, ano);
        this.tamanhoCacamba = tamanhoCacamba;
    }

    public obterTamanhoCacamba() {
        return this.tamanhoCacamba;

    }

    public obterMarca() {
        return 'Caminhão';
    }
}