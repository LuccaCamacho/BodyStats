document.getElementById("Calcular").addEventListener("click", function() {
    const sexo = document.getElementById("Sexo").value;
    const peso = parseFloat(document.getElementById("Peso").value);
    const altura = parseFloat(document.getElementById("Altura").value) / 100;
    const idade = parseFloat(document.getElementById("Idade").value);

    if (!sexo || !peso || !altura || !idade) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const imc = peso / (altura * altura);
    let gordura = 0;
    if (sexo === "Homem") {
        gordura = (1.20 * imc) + (0.23 * idade) - 16.2;
    } else if (sexo === "Mulher") {
        gordura = (1.20 * imc) + (0.23 * idade) - 5.4;
    }

    document.getElementById("Resultado").innerText = `Seu percentual de gordura é: ${gordura.toFixed(2)}%`;

    let recomendacaoText = "";
    let recomendacaoClass = "";

    // Corrigir a variável e melhorar o texto das recomendações
    if (gordura < 10) {
        recomendacaoText = "Seu percentual de gordura está muito baixo. Idealmente, para homens, a faixa ideal seria entre 10% a 20%.";
        recomendacaoClass = "MuitoRuim";
    } else if (gordura >= 10 && gordura <= 20) {
        recomendacaoText = "Seu percentual de gordura está ótimo! Para homens, a faixa ideal é entre 10% e 20%.";
        recomendacaoClass = "Bom";
    } else if (gordura > 20 && gordura <= 30) {
        recomendacaoText = "Seu percentual de gordura está um pouco alto. Para homens, a faixa ideal é entre 10% e 20%.";
        recomendacaoClass = "Ruim";
    } else {
        recomendacaoText = "Seu percentual de gordura está muito alto. Para homens, a faixa ideal é entre 10% e 20%.";
        recomendacaoClass = "MuitoRuim";
    }

    const recomendacaoElement = document.getElementById("Recomendacao");
    recomendacaoElement.innerText = recomendacaoText;
    recomendacaoElement.className = recomendacaoClass;
});

document.getElementById("btnIniciar").addEventListener("click", function() {
    document.getElementById("Corpo").scrollIntoView({
        behavior: "smooth", 
        block: "start"
    });
});

document.getElementById("Calcular").addEventListener("click", function() {
    document.getElementById("Perna").scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
});




