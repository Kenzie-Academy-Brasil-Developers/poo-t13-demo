import { Caminhao } from './Caminhao';
import { Carro } from './Carro'

const carro = new Carro('Hb20', 'prata', 2022);
const caminhao = new Caminhao('FH 540', 'azul', 2020, 3);

console.log(carro.obterMarca());
console.log(caminhao.obterMarca())
