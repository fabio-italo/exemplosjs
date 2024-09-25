var valores = [];

// Função para adicionar valores ao array
function add() {
    var input = document.getElementById("valor"); //capturando campo de entrada
    var numero = parseInt(input.value); // convertendo valor em inteiro

    // Verifica número válido
    if (!isNaN(numero) && valores.length < 7) {
        // Adicionando número ao array se não estiver já presente
        if (valores.indexOf(numero) === -1) {
            valores.push(numero);
            alert("Número adicionado: " + numero);
           
            // Adiciona o número à lista na página
            var lista = document.getElementById("lista-valores");
            var item = document.createElement("li");
            item.textContent = numero;
            lista.appendChild(item);

        } else {
            alert("Número já adicionado!");
        }
    } else if (valores.length >= 7) {
        alert("Máximo de 7 números atingido!");
    } else {
        alert("Por favor, insira um número válido.");
    }

    // Limpa o campo de entrada
    input.value = '';
}

// Função para chamar a função selecionada
function selecionarAlgoritmo() {
    var algoritmo = document.getElementById("algoritmo").value;

    switch (algoritmo) {
        case "bubble":
            bubble_Sort();
            break;
        case "selection":
            selection_Sort();
            break;
        case "quick":
            quick_Sort();
            break;
        default:
            alert("Selecione um algoritmo válido.");
    }
}

// FUNÇÃO SWAP 
const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
};

// FUNÇÃO SHUFFLE - MISTURAR
const shuffle = (array, swapCount) => {
    for (let i = 0; i < swapCount; i++) {
        const index1 = Math.floor(Math.random() * array.length);
        const index2 = Math.floor(Math.random() * array.length);
        swap(array, index1, index2);
    }
};

// FUNÇÃO BUBBLE SORT - ORDENAR
const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};

// FUNÇÃO SELECTION SORT
const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
    return array;
};

// FUNÇÃO QUICK SORT
const quick_sort = (array, start = 0, end = array.length - 1) => {
    if (start < end) {
        const pivotIndex = partition(array, start, end);
        quick_sort(array, start, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, end);
    }
    return array;
};

// FUNÇÃO PARTITION
const partition = (array, start, end) => {
    const pivot = array[end];
    let partitionIndex = start;
    for (let i = start; i < end; i++) {
        if (array[i] <= pivot) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, partitionIndex, end);
    return partitionIndex;
};