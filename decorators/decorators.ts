//@logarClasse
//@decorator('Teste', 123)
@logarClasses(true)
class Eletrodomestico {
  constructor() {
    console.log('novo...');
  }
}

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
