//Passo 1: recuperar tipo do ingresso e quantidade

function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeString = document.getElementById('qtd').value;

//Passo 2: diminuir quantidade de ingressos da quantidade disponível de acordo com a compra

    let ingressosString = document.getElementById(('qtd-') + tipoIngresso.toLowerCase());
    // O método toLowerCase() é uma função em JavaScript que é usada para converter uma string em minúsculas
    let ingressosNumero = parseInt(ingressosString.textContent);

    if(quantidadeString.trim() === '' || !/^\d+$/.test(quantidadeString) || /[+-]/.test(quantidadeString)){ // ===, também conhecido como "igualdade estrita", verifica se os valores são iguais e do mesmo tipo de dados. Ele não faz conversão de tipos antes da comparação.
        //!/^\d+$/.test(quantidadeString) verifica se na condição existe algum caractere que não seja um número.
        
        alert('Por favor, insira o número de ingressos que deseja comprar!\n\nAtenção, insira apenas números para a quantidade de ingressos.\nNão é permitido o uso de quaisquer caractere especial neste campo!');
        return;
    }

    let quantidade = parseInt(quantidadeString);
    
    if(ingressosNumero >= quantidade){
        let atualizacaoIngressos = ingressosNumero - quantidade;
        ingressosString.textContent = atualizacaoIngressos;
    } else {
        let palavraIngresso = quantidade > 1 ? 'ingressos' : 'ingresso'; 
        alert(`Infelizmente a quantidade de: ${quantidade} ${palavraIngresso} não está disponível no momento\nExistem atualmente ${ingressosNumero} ${palavraIngresso} liberados para compra. `);
    }

}
