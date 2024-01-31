var conjuntoImagens = [];
var conjuntoNomes = [];
var conjuntoGeneros = [];

function adicionarArtista() {
  var imagemEnviada = document.getElementById("imagemArtista").value;
  var nomeEnviado = document.getElementById("nomeArtista").value;
  var generoEnviado = document.getElementById("nomeGenero").value;

  if (imagemEnviada != "" && nomeEnviado != "" && generoEnviado != "") {
    if (imagemEnviada.endsWith(".jpg") || imagemEnviada.endsWith(".JPG")) {
      if (
        conjuntoNomes.includes(nomeEnviado.toUpperCase()) ||
        conjuntoImagens.includes(imagemEnviada)
      ) {
        alert(
          "Este artista já foi cadastrado ou consta em nossa lista com nome ou imagem diferente."
        );
      } else {
        alert("Artista adicionado. Confira nossa lista.");
        conjuntoImagens.push(imagemEnviada);
        conjuntoNomes.push(nomeEnviado.toUpperCase());
        conjuntoGeneros.push(generoEnviado.toUpperCase());
      }
    } else {
      alert("Formato de imagem inválido. Formato aceito: .jpg/.JPG");
      document.getElementById("imagemArtista").value = "";
      document.getElementById("nomeArtista").value = "";
      document.getElementById("nomeGenero").value = "";
    }
    listarItensNaTela(conjuntoImagens, conjuntoNomes, conjuntoGeneros);
    document.getElementById("imagemArtista").value = "";
    document.getElementById("nomeArtista").value = "";
    document.getElementById("nomeGenero").value = "";
  } else {
    alert("Preencha todos os campos.");
  }
}

function listarItensNaTela(imagem, nome, genero) {
  var elementosTela = document.getElementById("listaArtistas");
  elementosTela.innerHTML = "";

  for (var x = 0; x < imagem.length; x++) {
    var elementosTelaNovos =
      "<img class='imgArtista' src=" +
      imagem[x] +
      ">" +
      "<p class='pNomeGenero'>" +
      nome[x] +
      "</p>" +
      "<p class='pNomeGenero'>" +
      genero[x] +
      "</p>";
    elementosTela.innerHTML += elementosTelaNovos;
  }
}

function removerArtista() {
  var removerNome = document.getElementById("nomeArtista").value;
  var removerGenero = document.getElementById("nomeGenero").value;
  var removerImagem = document.getElementById("imagemArtista").value;

  if (removerNome != "" && removerGenero != "" && removerImagem != "") {
    if (
      conjuntoNomes.includes(removerNome.toUpperCase()) &&
      conjuntoImagens.includes(removerImagem) &&
      conjuntoGeneros.includes(removerGenero.toUpperCase())
    ) {
      var posicaoNomeArtista = conjuntoNomes.indexOf(removerNome.toUpperCase());
      var posicaoImagemArtista = conjuntoImagens.indexOf(removerImagem);
      var posicaoGeneroArtista = conjuntoGeneros.indexOf(
        removerGenero.toUpperCase()
      );

      alert("Artista removido.");
      conjuntoNomes.splice(posicaoNomeArtista, 1);
      conjuntoImagens.splice(posicaoImagemArtista, 1);
      conjuntoGeneros.splice(posicaoGeneroArtista, 1);
    } else {
      alert(
        "Este artista não foi cadastrado ou não consta com esses dados em nossa lista."
      );
    }
    listarItensNaTela(conjuntoImagens, conjuntoNomes, conjuntoGeneros);

    document.getElementById("imagemArtista").value = "";
    document.getElementById("nomeArtista").value = "";
    document.getElementById("nomeGenero").value = "";
  } else {
    alert("Preencha todos os campos.");
  }
}