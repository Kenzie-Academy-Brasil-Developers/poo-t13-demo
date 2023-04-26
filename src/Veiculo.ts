export abstract class Veiculo {
    protected modelo: string;
    protected cor: string;
    protected ano: number;

    constructor(modelo: string, cor: string, ano: number) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    public abstract obterIdadeDoCarro(): number;
}

// private permite que eu acesse apenas o atributo dentro da própria classe
// protected permite que eu acesse dentro da classe ou se ela for extendida