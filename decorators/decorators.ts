
function logarClasse(construtor: Function) {
  console.log(construtor);
}

function decoratorVazio(_: Function) {}

function logarClasses(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decorator(a: string, b: number) {
  return function(_: Function) {
    console.log(`${a} ${b}`);
  }
}
//@logarClasse
//@decorator('Teste', 123)
//@logarClasses(true)
@logarObjeto
class Eletrodomestico {
  constructor() {
    console.log('novo...');
  }
}

type Construtor = { new(...args: any[]): {}}

function logarObjeto(construtor: Construtor) {
  console.log('Carregado...')
  return class extends construtor {
    constructor(...args: any[]) { 
      console.log('Antes...');
      super(...args);
      console.log('Depois...');
    }
  }
}

new Eletrodomestico();
new Eletrodomestico();

