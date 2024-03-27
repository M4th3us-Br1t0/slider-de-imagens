//Crie um carrossel (slider) de imagens conforme layout do figma
//https://www.figma.com/file/zBKnYG9UNdUiIr8ClQTWSG/DESAFIO---HTML%2FCSS%2FJS-INTERMEDI%C3%81RIO?type=design&node-id=0-1&mode=design

//DICA DE CÓDIGO: SEMPRE QUE O SITE INICIAR COM ALGUM ESTILO, CRIAR A CLASSE E JA COLOCAR NO CÓDIGO.

//Pega toodos os elemento que tem a classe .pagina que são no caso as imagens
const imagens = document.querySelectorAll(".pagina")

//Pega pelo ID a imagem de seta voltar
const setaVoltar = document.getElementById("seta-voltar")

//Pega pelo ID a imagem de seta avancar
const setaAvancar = document.getElementById("seta-avancar")

//Contador iniciando em 0
let imagemAtual = 0;

//Ficar escutando o metodo "click" para quando for clicado chamar a função que esta dentro.
setaAvancar.addEventListener("click", function () {

    //Essa condição verificar se a imagemAtual é identica ao tamanho do array de imagens -1.
    //O -1 serve por causa que o array sempre comea com "0" se nao fizemos isso essa condição nunca vai ser valida e vai dar erro.
    if (imagemAtual === imagens.length - 1) {
        //o return aqui serve para parar a função e não executar nada mais do código abaixo disso.
        return;
    }    

    //Contador incrementando.
    imagemAtual++

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
})

//Ficar escutando o metodo "click" para quando for clicado chamar a função que esta dentro.
setaVoltar.addEventListener("click", function () {

    //Condição que serve para verifiar se é a primeira imagem e não continuar voltando.
    if(imagemAtual === 0){
        //o return aqui serve para parar a função e não executar nada mais do código abaixo disso.
        return
    }

    //Contador decrementando.
    imagemAtual--

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
})

//Função que mostra a imagem adicionando a classe mostrar que seta o display: block
//e esconde a imagem adicionando a classe que seta display: none
function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar");
    imagens[imagemAtual].classList.remove("esconder");
}

//Script para esconder a imagem, setamos a primeira pagina com a classse .mostrar que esta setada com display: block. Esta função vai tirar essa classe e adicionar a classe esconder aonde esta setada como display: none
function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove("mostrar")
    imagemAberta.classList.add("esconder")
}

//Essa função basicamente verifica se a imagemAtual é diferente de 0, se isso for valido ja nao é a primeira imagem.
//Se nao for a primeira iamgem vou aplicar a regra de remover e adicionar a classe opacidade.
//Se a imagem atual for diferente de 0 e tambem ser igual ao tamanho do array -1, eu sei que cheguei na ultima imagem, então aplico a remoção e adição das classes de opacidade.
//isso tudo com as setas correspondentes.
function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove("opacidade")
    }else{
        setaVoltar.classList.add("opacidade")
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (chegouNaUltimaImagem){
        setaAvancar.classList.add("opacidade")
    }else{
        setaAvancar.classList.remove("opacidade")
    }
}