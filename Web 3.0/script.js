// programação dos filmes durante a semana
const programacao = {
    segunda: {
        nome: "segunda-feira",
        filmes: [
            ["14:00", "Shrek 🐸"],
            ["16:00", "A Era do Gelo 🐘"],
            ["19:00", "As Branquelas 👱‍♀️👱‍♀️"]
        ]
    },

    terca: {
        nome: "terça-feira",
        filmes: [
            ["14:00", "Divertida Mente 2 🧠"],
            ["16:00", "Minha Mãe é uma Peça 👩‍👦"],
            ["19:00", "Homem-Aranha: Através do Aranhaverso 🕷️"]
        ]
    },

    quarta: {
        nome: "quarta-feira",
        filmes: [
            ["14:00", "A Era do Gelo 🐘"],
            ["16:00", "Shrek 🐸"],
            ["19:00", "Divertida Mente 2 🧠"]
        ]
    },

    quinta: {
        nome: "quinta-feira",
        filmes: [
            ["14:00", "As Branquelas 👱‍♀️👱‍♀️"],
            ["16:00", "Homem-Aranha: Através do Aranhaverso 🕷️"],
            ["19:00", "Minha Mãe é uma Peça 👩‍👦"]
        ]
    },

    sexta: {
        nome: "sexta-feira",
        filmes: [
            ["14:00", "Minha Mãe é uma Peça 👩‍👦"],
            ["16:00", "Divertida Mente 2 🧠"],
            ["19:00", "Shrek 🐸"]
        ]
    },

    sabado: {
        nome: "sábado",
        filmes: [
            ["12:00", "Shrek 🐸"],
            ["14:00", "Divertida Mente 2 🧠"],
            ["16:00", "Homem-Aranha: Através do Aranhaverso 🕷️"],
            ["18:00", "Minha Mãe é uma Peça 👩‍👦"],
            ["20:00", "A Era do Gelo 🐘"],
            ["22:00", "As Branquelas 👱‍♀️👱‍♀️"]
        ]
    },

    domingo: {
        nome: "domingo",
        filmes: [
            ["12:00", "Minha Mãe é uma Peça 👩‍👦"],
            ["14:00", "A Era do Gelo 🐘"],
            ["16:00", "As Branquelas 👱‍♀️👱‍♀️"],
            ["18:00", "Shrek 🐸"],
            ["20:00", "Homem-Aranha: Através do Aranhaverso 🕷️"],
            ["22:00", "Divertida Mente 2 🧠"]
        ]
    }
};

// mostra as sessões do dia escolhido
const seletorDias = document.getElementById("seletor-dias");

if (seletorDias) {
    const botoesDias = document.querySelectorAll(".dia-botao");
    const listaSessoes = document.getElementById("lista-sessoes");
    const tituloDia = document.getElementById("titulo-dia");
    const descricaoDia = document.getElementById("descricao-dia");

    function mostrarProgramacao(diaEscolhido) {
        const dia = programacao[diaEscolhido];

        tituloDia.textContent = "Sessões de " + dia.nome;
        descricaoDia.textContent = dia.filmes.length + " sessões disponíveis. Escolha seu filme!";

        listaSessoes.innerHTML = "";

        dia.filmes.forEach(function(filme, indice) {
            const cartao = document.createElement("article");
            cartao.className = "sessao-card";

            const horario = document.createElement("div");
            horario.className = "sessao-hora";
            horario.textContent = filme[0];

            const informacoes = document.createElement("div");
            informacoes.className = "sessao-info";

            const nomeFilme = document.createElement("h3");
            nomeFilme.textContent = filme[1];

            const descricao = document.createElement("p");
            descricao.textContent = "Sala " + (indice + 1) + " • Sessão disponível";

            const etiqueta = document.createElement("span");
            etiqueta.className = "sessao-etiqueta";
            etiqueta.textContent = "Exibição";

            informacoes.appendChild(nomeFilme);
            informacoes.appendChild(descricao);
            informacoes.appendChild(etiqueta);

            cartao.appendChild(horario);
            cartao.appendChild(informacoes);

            listaSessoes.appendChild(cartao);
        });
    }

    botoesDias.forEach(function(botao) {
        botao.addEventListener("click", function() {
            botoesDias.forEach(function(item) {
                item.classList.remove("selecionado");
            });

            botao.classList.add("selecionado");
            mostrarProgramacao(botao.dataset.dia);
        });
    });

    mostrarProgramacao("segunda");
}

// validação e confirmação do formulário
const formulario = document.getElementById("formulario-contato");

if (formulario) {
    const retorno = document.getElementById("retorno");
    const botaoEnviar = document.getElementById("botao-enviar");

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        botaoEnviar.disabled = true;
        botaoEnviar.textContent = "Enviando...";

        retorno.classList.remove("visivel");

        // envio para demonstrar o funcionamento
        setTimeout(function() {
            retorno.textContent = "✓ Mensagem enviada com sucesso! Obrigado por entrar em contato com a Toca da Pipoca.";
            retorno.classList.add("visivel");

            formulario.reset();

            botaoEnviar.disabled = false;
            botaoEnviar.textContent = "Enviar mensagem →";
        }, 800);
    });
}