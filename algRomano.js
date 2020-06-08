class AlgRomano {
  constructor() {
    this.int = 1;
    this.alg = "I";
    this.inteiros = { i: 1, v: 5, x: 10, l: 50, c: 100, d: 500, m: 1000 };
    this.conversoesInteiros = [
      { um: "I" },
      { dois: "II" },
      { tres: "III" },
      { quatro: "IV" },
      { cinco: "V" },
      { seis: "VI" },
      { sete: "VII" },
      { oito: "VIII" },
      { nove: "IX" },
    ];

    this.algsRomanos = ["I", "V", "X", "L", "C", "D", "M"];
  }

  inteiro() {
    return this.int;
  }

  algarismo() {
    return this.alg;
  }

  converterNumeroParaAlg(numero) {
    if (Number.isInteger(numero)) {
      return this.alg;
    } else {
      return null;
    }
  }

  converterRomanoparaNumerico(alg) {
    if (typeof alg === "string") {
      const letras = alg.split("");
      this.veirificarExistenciaDeValorInvalido(letras);
      return this.int;
    } else {
      return null;
    }
  }

  conversor(letras) {
    return letras.map((letra) => {
      switch (letra.toUpperCase()) {
        case "I":
          return this.inteiros.i;
        case "V":
          return this.inteiros.v;
        case "X":
          return this.inteiros.x;
        case "L":
          return this.inteiros.l;
        case "C":
          return this.inteiros.c;
        case "D":
          return this.inteiros.d;
        case "M":
          return this.inteiros.m;
      }
    });
  }

  veirificarExistenciaDeValorInvalido(letras) {
    const l = letras.map((letra) => {
      if (this.algsRomanos.includes(letra.toUpperCase())) {
        return letra;
      } else {
        throw new Error("O valor informado é inválido");
      }
    });
    return l;
  }
}

module.exports = AlgRomano;
