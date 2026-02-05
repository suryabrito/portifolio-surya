// 1. Criamos uma variável 'contador' para controlar qual imagem deve aparecer
let contador = 1;

// 2. A função 'seltInterval' de 5000 mlisegundos (5 segundos)
// ela vai executar a 'proxImg' repetidamente a cada 5000 milisegundos
// (5 segundos )

setInterval(function() {
    proxImg();
},5000);

// 3. Essa é a função responsável por trocar as imagens.
function proxImg() {
    // Toda vez que a função roda, somamos +1 ao contador para ir para a próxima imagem
    
    contador++;
    // Lógica de repetição
    // Como agora utilizamos 4 imagens, iremos reiniciar para 1 e o carrosel voltará
    //para o início (loop) 
    if (contador > 4) {
        contador = 1;
    }

    //MANIPULAÇÃO DO HTML (DOM):
    // Aqui o JavaScript procura no HTML, o elemento que tem o id "radio" + o número do contador
    // O '.checked = true' marca aqueles inputs de radio automaticamente
    // Quando o rádio é marcado, o CSS que configuramos irá mudar a imagem automaticamente.

    document.getElementById("radio" + contador)= true;  

}