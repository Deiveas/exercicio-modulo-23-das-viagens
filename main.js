function Viagens1(aeronave, capacidade, classe, origem, destino, custoA380) {
  this.aeronave = aeronave;
  this.capacidade = capacidade;
  this.classe = classe;
  this.origem = origem;
  this.destino = destino;
  this.custoA380 = custoA380;
  this.compraA380 = function () {
    console.log(
      this.custoA380 +
        "Você esta com sorte hoje? Clique no botão tente a sorte agora!!"
    );
  };
}

function Viagens2(aeronave, capacidade, classe, origem, destino, custoB777) {
  this.aeronave = aeronave;
  this.capacidade = capacidade;
  this.classe = classe;
  this.origem = origem;
  this.destino = destino;
  this.custoB777 = custoB777;
  this.compraB777 = function () {
    console.log(
      this.custoB777 +
        "Você esta com sorte hoje? Clique no botão tente a sorte agora!!"
    );
  };
}

function Viagens3(
  aeronave,
  capacidade,
  classe,
  origem,
  destino,
  custoA380Promo
) {
  Viagens1.call(this, aeronave, capacidade, classe, origem, destino, ""); // Herde as propriedades de Viagens1
  this.custoA380Promo = custoA380Promo;

  this.PromoLuxo = function () {
    console.log(
      this.custoA380Promo + " hoje foi seu dia de sorte!! 50% desconto"
    );
  };
}

function Viagens4(
  aeronave,
  capacidade,
  classe,
  origem,
  destino,
  custoB777Promo
) {
  Viagens2.call(this, aeronave, capacidade, classe, origem, destino, ""); // Herde as propriedades de Viagens2
  this.custoB777Promo = custoB777Promo;

  this.PromoEcon = function () {
    console.log(
      this.custoB777Promo + " hoje foi seu dia de sorte!! 50% desconto"
    );
  };
}

const vooLuxo = {
  aeronave: "Airbus A380",
  capacidade: 853,
  classe: "Suprime",
  origem: "Brasil",
  destino: "Portugal",
  custoA380: "R$ 4.500,00",
};

const vooLuxoPromo = {
  custoA380Promo: "R$ 2.250,00",
};

const vooEconPromo = {
  custoB777Promo: "R$ 1.500,00",
};

const vooEconomico = {
  aeronave: "Boeing 777",
  capacidade: 550,
  classe: "Prime",
  origem: "Brasil",
  destino: "Portugal",
  custoB777: "R$ 3.000,00",
};

const viagemLuxo = new Viagens1(
  "Airbus A380",
  853,
  "Suprime",
  "Brasil",
  "Portugal",
  "R$ 4.500,00"
);
const viagemEcon = new Viagens2(
  "Boeing 777",
  550,
  "Prime",
  "Brasil",
  "Portugal",
  "R$ 3.000,00"
);
const viagemLuxoPromo = new Viagens3(
  vooLuxo.aeronave,
  vooLuxo.capacidade,
  vooLuxo.classe,
  vooLuxo.origem,
  vooLuxo.destino,
  vooLuxoPromo.custoA380Promo
);
const viagemEconPromo = new Viagens4(
  vooEconomico.aeronave,
  vooEconomico.capacidade,
  vooEconomico.classe,
  vooEconomico.origem,
  vooEconomico.destino,
  vooEconPromo.custoB777Promo
);

console.log(viagemLuxo);
console.log(viagemEcon);
console.log(viagemLuxoPromo);
console.log(viagemEconPromo);

viagemLuxo.compraA380();
viagemEcon.compraB777();
viagemLuxoPromo.PromoLuxo();
viagemEconPromo.PromoEcon();

const selectClasse = document.querySelector(".form-select");
const viagemForm = document.getElementById("viagemForm");

selectClasse.addEventListener("change", function () {
  const selectedValue = selectClasse.value;

  if (selectedValue === "1") {
    preencherFormulario(vooLuxo);
  } else if (selectedValue === "2") {
    preencherFormulario(vooEconomico);
  } else {
    limparFormulario();
  }
});

function preencherFormulario(dados) {
  document.getElementById("aeronave").value = dados.aeronave;
  document.getElementById("capacidade").value = dados.capacidade;
  document.getElementById("classe").value = dados.classe;
  document.getElementById("origem").value = dados.origem;
  document.getElementById("destino").value = dados.destino;

  const custoPassagem =
    dados.classe === "Suprime" ? dados.custoA380 : dados.custoB777;
  document.getElementById("custoPassagem").value = custoPassagem;
}

function limparFormulario() {
  viagemForm.reset();
}

document.addEventListener("DOMContentLoaded", function () {
  const selectClasse = document.querySelector(".form-select");
  const compraPassagemBtn = document.getElementById("comprePassagemBtn");

  compraPassagemBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const selectedValue = selectClasse.value;
    const comprarSpan = document.getElementById("comprar");

    comprarSpan.innerText = "";
    comprarSpan.style.fontSize = "10px";
    comprarSpan.style.whiteSpace = "nowrap"; 

    if (selectedValue === "1") {
      viagemLuxo.compraA380();
      exibirMensagem(" Clique no botão tente a sorte agora!!");
    } else if (selectedValue === "2") {
      viagemEcon.compraB777();
      exibirMensagem(" Clique no botão tente a sorte agora!!");
    } else {
      exibirMensagem("Selecione uma opção antes de comprar a passagem.");
    }
  });

  selectClasse.addEventListener("change", function () {
    const selectedValue = selectClasse.value;
    const a380Image = document.querySelector("#A380 img");
    const b777Image = document.querySelector("#B777 img");

    const comprarSpan = document.getElementById("comprar");
    comprarSpan.innerText = "";
    comprarSpan.style.fontSize = "10px";
    comprarSpan.style.whiteSpace = "nowrap"; 

    if (selectedValue === "1") {
      a380Image.style.display = "block";
      b777Image.style.display = "none";
    } else if (selectedValue === "2") {
      a380Image.style.display = "none";
      b777Image.style.display = "block";
    } else {
      a380Image.style.display = "none";
      b777Image.style.display = "none";
    }
  });

  function exibirMensagem(mensagem) {
    const comprarSpan = document.getElementById("comprar");
    comprarSpan.innerText = mensagem;
    comprarSpan.style.backgroundColor = "#2ECCFA";
    comprarSpan.style.whiteSpace = "nowrap"; 

    ajustarTamanhoFonte(comprarSpan);
  }

  function ajustarTamanhoFonte(elemento) {
    const alturaOriginal = elemento.clientHeight;
    let tamanhoFonte = 10;

    while (elemento.clientHeight > alturaOriginal && tamanhoFonte > 10) {
      tamanhoFonte--;
      elemento.style.fontSize = tamanhoFonte + "px";
    }
  }

  const tenteSorteBtn = document.getElementById("tenteSorteBtn");
  const comprarSpan = document.getElementById("comprar");

  tenteSorteBtn.addEventListener("click", function () {
    const selectedValue = selectClasse.value;

    tenteSorteBtn.classList.add("blinking");
    comprarSpan.classList.add("blinking");

    setTimeout(function () {
      comprarSpan.addEventListener("animationiteration", function onAnimationIteration() {
        comprarSpan.classList.remove("blinking");
        comprarSpan.removeEventListener("animationiteration", onAnimationIteration);
      });
    }, 4000);

    comprarSpan.innerText = "";
    comprarSpan.style.fontSize = "10px"; 
    comprarSpan.style.whiteSpace = "nowrap";

    if (selectedValue === "1") {
      viagemLuxoPromo.PromoLuxo();
      exibirMensagem(" Sortudo !! 50% desconto R$ 2.250,00");
    } else if (selectedValue === "2") {
      viagemEconPromo.PromoEcon();
      exibirMensagem(" Sortudo !! 50% desconto R$ 1.500,00");
    } else {
      exibirMensagem("Selecione uma opção antes de tentar a sorte.");
    }
  });
});
