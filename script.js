const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const imagem = document.getElementById("imagem");
const btnAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista");

btnAdicionar.addEventListener("click", () => {

    if (titulo.value === "" || descricao.value === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const item = document.createElement("details");

    const resumo = document.createElement("summary");
    resumo.textContent = titulo.value;

    const texto = document.createElement("p");
    texto.textContent = descricao.value;

    item.appendChild(resumo);
    item.appendChild(texto);

    if (imagem.files.length > 0) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(imagem.files[0]);
        item.appendChild(img);
    }

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.className = "remover-item";
    botaoRemover.addEventListener("click", () => {
        lista.removeChild(item);
    });
    item.appendChild(botaoRemover);

    lista.appendChild(item);

    titulo.value = "";
    descricao.value = "";
    imagem.value = "";
});