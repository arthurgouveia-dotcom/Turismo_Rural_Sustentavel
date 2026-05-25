// Gerenciamento do EcoQuiz do Agrinho 2026
document.addEventListener("DOMContentLoaded", function () {
    const perguntas = document.querySelectorAll(".pergunta");
    const resultadoBox = document.getElementById("resultado-box");
    const placarTexto = document.getElementById("placar-texto");
    const reiniciarBtn = document.getElementById("reiniciar-btn");
    
    let perguntaAtual = 0;
    let totalAcertos = 0;

    // Monitora as respostas selecionadas pelo aluno
    const botoesOpcao = document.querySelectorAll(".opcao-btn");
    botoesOpcao.forEach(botao => {
        botao.addEventListener("click", function () {
            const ehCorreto = this.getAttribute("data-correto") === "true";
            
            if (ehCorreto) {
                totalAcertos++;
                alert("Excelente escolha! Turismo consciente fortalece nossa comunidade e protege o ecossistema! 🎒🍃");
            } else {
                alert("Incorreto. Lembre-se: o bom turista rural deixa apenas pegadas e leva apenas memórias e fotos! 🗺️❌");
            }

            // Oculta a pergunta respondida e avança no fluxo
            perguntas[perguntaAtual].classList.remove("active");
            perguntaAtual++;

            if (perguntaAtual < perguntas.length) {
                perguntas[perguntaAtual].classList.add("active");
            } else {
                mostrarResultados();
            }
        });
    });

    // Apresenta o resultado de acertos no final do trajeto
    function mostrarResultados() {
        resultadoBox.classList.remove("oculto");
        placarTexto.innerText = `Você concluiu o circuito com ${totalAcertos} de ${perguntas.length} acertos!`;
    }

    // Reinicia o quiz para uma nova tentativa
    reiniciarBtn.addEventListener("click", function () {
        perguntaAtual = 0;
        totalAcertos = 0;
        resultadoBox.classList.add("oculto");
        
        perguntas.forEach(p => p.classList.remove("active"));
        perguntas[0].classList.add("active");
    });
});
