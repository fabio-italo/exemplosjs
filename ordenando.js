const numeros = [];

// Função para adicionar valores ao vetor
function add() {
    const input = document.getElementById("numero").value; //capturando campo de entrada
    const numero = Number(input);

    if (!isNaN(numero)) {
        numeros.push(numero);
        document.getElementById("numero").value = ''; //limpa o cache
        exibirNumeros();

    } else {
        alert("Por favor, insira um número válido.");
    }
}
function exibirNumeros() {
    const listaValores = document.getElementById("listaValores");
    listaValores.innerHTML = numeros.map(num => `<li>${num}</li>`).join('');
}
function swap(arr, pos1, pos2) {
    const temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
}

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Troca
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Troca
    }
    return arr;
}
function particionamento(arr, inicio, fim, pivot) {
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, fim);
    return i + 1;
}

function quickSort(arr, inicio, fim) {
    if (inicio < fim) {
        const pivotIndex = particionamento(arr, inicio, fim, arr[fim]);
        quick_sort(arr, inicio, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, fim);
    }
    return arr;
}

function ordenar() {
    const algoritmoSelecionado = document.getElementById("algoritmos").value;
    let arrayParaOrdenar = [...numeros];

    if (algoritmoSelecionado === "bubbleSort") {
        arrayParaOrdenar = bubbleSort(arrayParaOrdenar);
    } else if (algoritmoSelecionado === "selectionSort") {
        arrayParaOrdenar = selectionSort(arrayParaOrdenar);
    } else if (algoritmoSelecionado === "quickSort") {
        arrayParaOrdenar = quickSort(arrayParaOrdenar);
    } else if (algoritmoSelecionado === "swap") {
        arrayParaOrdenar = swap(arrayParaOrdenar);
    } else if (algoritmoSelecionado === "particionamento") {
        arrayParaOrdenar = particionamento(arrayParaOrdenar);
    }

    const resultados = arrayParaOrdenar.map(num => `<li>${num}</li>`).join('');
    document.getElementById("resultado").innerHTML = `Números ordenados: <ul>${resultados}</ul>`;
}

function shuffler() {
    const listaValores = document.getElementById("listaValores");
    const valores = Array.from(listaValores.children).map(li => eval(li.innerHTML));

    // Função para embaralhar
    for (let i = valores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [valores[i], valores[j]] = [valores[j], valores[i]]; // Troca
    }

    const novosItens = valores.map(num => `<li>${num}</li>`).join('');
    listaValores.innerHTML = novosItens;
    document.getElementById("resultado").innerHTML = `Números misturados: <ul>${novosItens}</ul>`;
}