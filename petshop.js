//Exercícios da Aula:

//1- Refatorar Funções;
//2- Converter o dado JSON recebido e passar para nossa lista de Pets;
//3- Criar uma função que cadastre um novo animal e ao mesmo tempo já avise se precisamos dar a vacina ou não!
//4- Aplicar o método de array filter para criar uma função onde se possa filtrar os pets pelo nome
//5- Desafio: Calcular quantos serviços em geral foram realizados pelo Petshop!!!!! (aplicando o método reduce)


const NOME_SISTEMA = "Petshop do Diogo";

console.log("-----------------------------")
console.log(NOME_SISTEMA);
console.log("-----------------------------")

let nome = "Apolo"
let idade = 8;
let raca = "Boxer";
let dono = "Fábio";
let sexo = "Macho";
let peso = 34.3;
let vacinado = true;
let servicos = ["Cirurgia"];


let pet = {
    nome: "Lili",
    idade:32,
    raca: "Poodle",
    dono: "Márcia",
    sexo: "Fêmea",
    peso: 3,
    vacinado: false,
    servicos: ["Cirurgia", "Vacina"]
}


let listaPets = [
    
{
    nome: "Apolo",
    idade: 8,
    raca: "Boxer",
    dono: "Fábio",
    sexo: "Macho",
    peso: 34.3,
    vacinado: true,
    servicos: ["Cirurgia"]
},

{
    nome: "Lili",
    idade: 32,
    raca: "Poodle",
    dono: "Márcia",
    sexo: "Fêmea",
    peso: 3,
    vacinado: false,
    servicos: ["Cirurgia", "Vacina"]
},

]

const cadastrarPet = (nome, idade, raca, dono, sexo, peso, vacinado, servicos) => {

    let pet = {
        nome: nome,
        idade: idade,
        raca: raca,
        dono: dono,
        sexo: sexo,
        peso: peso,
        vacinado: vacinado,
        sevicos: servicos,
    }  

    listaPets.push(pet)
    // console.log("o Pet " + nome + " " + "foi adicionado com sucesso");
}

cadastrarPet ("Tico", 10, "Gato", "Maria", "Macho", 3, true, ["Banho"]);

// console.log (listaPets);

const visualizarPets = () => {

    for (i=0; i < listaPets.length; i++) {

        console.log("-----------------------------");
        console.log("Nome do pet:", listaPets[i].nome);
        console.log("Raça do pet:", listaPets[i].raca); 
        console.log("Dono do pet:", listaPets[i].dono); 
        console.log(listaPets[i].vacinado?"O Pet já está vacinado":"O Pet precisa de vacina"); 

    }
}

const darVacina = pet => {

        if (pet.vacinado == true) {
            console.log("O Pet" + " " + pet.nome + " " + "Não precisa vacinar!");
        }else {
            console.log("O Pet" + " " + pet.nome + " " + "Vamos vacinar!");
        }
    }


let json = `[{"nome":"Bob","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]},{"nome":"xuxu","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]},{"nome":"Xorão","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]}]`

//Geralmente quando usamos JSON dentro do Javascript definimos ele com as crases fora dos colchetes e caixas, do contrário o Javascript vai confundir com as aspas dos atributos!!



// Uma forma de resolver:

// const darEntradaPets = json => {
    
//     let petsRecebidos = JSON.parse(json);
    
//     for (let i=0; i < petsRecebidos.length; i++) {
        
//         let pet = petsRecebidos[i];
        
//         cadastrarPet (pet.nome, pet.idade, pet.raca, pet.dono, pet.sexo, pet.peso, pet.vacinado, pet.servicos);
//     }  
// } 

// darEntradaPets(json);
// console.log(listaPets);



// //Outra forma de resolver:

// const darEntradaPets = json => {
// let petsRecebidos = JSON.parse(json);
// listaPets = [...listaPets, ...petsRecebidos];
// }

// darEntradaPets(json);
// console.log(listaPets);



// Outro jeito de escrever:

// const darEntradaPets = (json) => listaPets = [...listaPets, ...(JSON.parse(json))];

// darEntradaPets(json);
// console.log(listaPets);


// let numeroArray = [1, 2, 3];
// let numero = [4, 5, 6];

// const teste = [...numeroArray, ...numero];


// console.log(teste);



const darEntradaPets = (json, acaoVacinar, acaoCadastrar) => {
    
    let petsRecebidos = JSON.parse(json);

    for (let i=0; i < petsRecebidos.length; i++) {
                
        let pet = petsRecebidos[i];
                
        acaoCadastrar (pet.nome, pet.idade, pet.raca, pet.dono, pet.sexo, pet.peso, pet.vacinado, pet.servicos);
                
        // acaoVacinar (pet);
    }
} 

    darEntradaPets(json, darVacina, cadastrarPet);
    // console.log(listaPets);

    // visualizarPets();


// Aplicando o método de array filter para criar uma função onde se possa filtrar os pets pelo nome

// Solução 1

// let filtrarPetsNome = listaPets.filter(animal => animal.nome == "Apolo");

// console.log(filtrarPetsNome);


// Solução 2

// let filtrarPetsNome = listaPets.filter(animal => animal.nome.indexOf("Apolo") != -1);

// console.log(filtrarPetsNome);


// Solução 3 (usuário pode digitar um nome variável)

let filtrarPetsNome = animalNome => listaPets.filter(animal => animal.nome.indexOf(animalNome) != -1);

// console.log(filtrarPetsNome("Lili"));


// Solução 3 - Outra forma 

// let filtrarPetsNome = function (animalNome) {return listaPets.filter(function(animal) {return animal.nome.indexOf(animalNome) != -1})};


// console.log(filtrarPetsNome("Apolo"));


// Template String - Outra forma de escrever uma variável ou número dentro da string, para o código ficar mais limpo - Forma: `${dados}` 

//Exemplo:

// for (var dados in carros) {
//     console.log (`${dados} é ${carros[dados]}`);
// }

//*Aqui lembrar que não precisamos usar a declaração de variável "var, let ou const" no for, porém quando não usamos ele automaticamente cria uma variável do tipo global, ou seja, como se fosse um "var"

