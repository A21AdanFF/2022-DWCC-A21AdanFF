class Produto {
  marca;
  categoria;
  unidades;
  prezo;
  constructor(marca, categoria, unidades, prezo) {
    this.marca = marca;
    this.categoria = categoria;
    this.unidades = unidades;
    this.prezo = prezo;
  }
  importe() {
    return this.unidades * this.prezo;
  }
  getInfo() {
    return `${this.marca} (${this.categoria}): ${this.unidades}x${
      this.prezo
    } = ${this.importe()}`;
  }
}

p1 = new Produto("G", "s", 2, 2);

class Television extends Produto {
  tamano;
  constructor(marca, categoria, unidades, prezo, tamano) {
    super(marca, categoria, unidades, prezo);
    this.tamano = tamano;
  }
  getInfo() {
    `${this.tamano} ${super.getInfo()}`;
  }
}

t1 = new Television();
