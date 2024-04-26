const botoes = document.querySelector(".botao");

for (let i=0;i<botoes.lenght;i++){
    botoes[i].onclik=function(){
        for(j=0;j<botoes.leght;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }
}