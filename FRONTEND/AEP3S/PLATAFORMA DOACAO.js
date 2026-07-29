class Alimento {
    constructor(nome, dataValidade, estabelecimento) {
        this.nome = nome;
        this.dataValidade = new Date(dataValidade);
        this.estabelecimento = estabelecimento;
    }

    getValidadeFormatada() {
        const dataAjustada = new Date(this.dataValidade.getTime() + this.dataValidade.getTimezoneOffset() * 60000);
        return dataAjustada.toLocaleDateString('pt-BR');
    }
}

class FilaDoacoes {
    constructor() {
        this.itens = [];
    }

    inserir(novoAlimento) {
        let adicionado = false;

        for (let i = 0; i < this.itens.length; i++) {
            if (novoAlimento.dataValidade < this.itens[i].dataValidade) {
                this.itens.splice(i, 0, novoAlimento);
                adicionado = true;
                break;
            }
        }

        if (!adicionado) {
            this.itens.push(novoAlimento);
        }
    }

    removerProximo() {
        if (this.estaVazia()) {
            return null;
        }
        return this.itens.shift();
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    tamanho() {
        return this.itens.length;
    }
}

const minhaFila = new FilaDoacoes();

const formDoacao = document.getElementById('formDoacao');
const corpoTabelaFila = document.getElementById('corpoTabelaFila');
const contadorFila = document.getElementById('contadorFila');

formDoacao.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeAlimento').value;
    const dataValidade = document.getElementById('dataValidade').value;
    const estabelecimento = document.getElementById('estabelecimento').value;

    if (!nome || !dataValidade || !estabelecimento) {
        alert("Por favor, preencha todos os campos do cadastro!");
        return;
    }

    const novoItem = new Alimento(nome, dataValidade, estabelecimento);

    minhaFila.inserir(novoItem);

    formDoacao.reset();

    renderizarFila();
});

function renderizarFila() {
    corpoTabelaFila.innerHTML = "";

    contadorFila.innerText = `Fila: ${minhaFila.tamanho()} itens`;

    if (minhaFila.estaVazia()) {
        corpoTabelaFila.innerHTML = `
            <tr id="linhaVazia">
                <td colspan="5" class="text-center text-muted py-4">
                    <i class="bi bi-inbox fs-3 d-block mb-2 text-opacity-50"></i>
                    Nenhum alimento na fila de doações no momento.
                </td>
            </tr>`;
        return;
    }

    minhaFila.itens.forEach((alimento, index) => {
        const posicao = index + 1;
        
        const classeBadge = posicao === 1 ? 'bg-danger' : 'bg-secondary';
        const textoBadge = posicao === 1 ? 'URGENTE (1º)' : `${posicao}º`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><span class="badge ${classeBadge}">${textoBadge}</span></td>
            <td class="fw-bold text-dark">${alimento.nome}</td>
            <td><span class="text-muted"><i class="bi bi-shop me-1"></i>${alimento.estabelecimento}</span></td>
            <td><span class="text-danger fw-bold"><i class="bi bi-calendar-event me-1"></i>${alimento.getValidadeFormatada()}</span></td>
            <td class="text-end">
                <button class="btn btn-sm btn-outline-primary fw-bold" onclick="atenderDoacao()">
                    <i class="bi bi-check2-circle me-1"></i>Resgatar
                </button>
            </td>
        `;
        corpoTabelaFila.appendChild(tr);
    });
}

window.atenderDoacao = function() {
    const itemRemovido = minhaFila.removerProximo();
    
    if (itemRemovido) {
        alert(`Sucesso! A ONG confirmou a retirada de: "${itemRemovido.nome}" fornecido por "${itemRemovido.estabelecimento}".`);
    }
    
    renderizarFila();
};
