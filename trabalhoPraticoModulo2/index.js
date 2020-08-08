import fs from 'fs';
let objEstados = [];
let objCidades = [];
try {
    const Estados = fs.readFileSync('Estados.json', 'utf-8');
    const Cidades = fs.readFileSync('Cidades.json', 'utf-8');
    objEstados = JSON.parse(Estados);
    objCidades = JSON.parse(Cidades);
    allStates(objEstados);
    //allCidades(objEstados);
} catch (err) {
    console.log('error')
}
async function gerarEstados() {
    for (let i = 0; objEstados.length; i++) {
        const estado = objEstados[i];
        fs.writeFileSync(`./estados/${estado.Sigla}.json`, JSON.stringify(objCidades.filter(cidade => {
            return cidade.Estado == estado.ID;
        }).map(cidade => {
            return cidade.Nome;
        })));
    }
}
async function allStates(param) {
    let vetor = [];
    for (let i = 0; i < param.length; i++) {
        vetor.push(await countCidades(param[i].Sigla));
    }
    vetor.sort((a, b) => a.Quantidade - b.Quantidade);
    console.log(vetor[0].Quantidade + vetor[1].Quantidade + vetor[2].Quantidade + vetor[3].Quantidade + vetor[4].Quantidade);
}

async function allCidades(param) {
    let vetor = [];
    for (let i = 0; i < param.length; i++) {
        vetor.push(await letterLengthCidades(param[i].Sigla));
    }
    console.log(vetor);
}

async function countCidades(param) {
    const content = fs.readFileSync(`./estados/${param}.json`, 'utf-8');
    return { Estado: param, Quantidade: JSON.parse(content).length };
}

async function letterLengthCidades(param) {
    const content = fs.readFileSync(`./estados/${param}.json`, 'utf-8');
    return JSON.parse(content).map(cidade => {
        return { cidade, Estado: param, tamanho: cidade.trim().length };
    }).sort((a, b) => a.tamanho - b.tamanho).slice(0, 1);
}