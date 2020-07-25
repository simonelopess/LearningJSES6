//Transforme o objeto abaixo em uma constructor function

// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar(){
//         console.log(this.nome + 'andou')
//     }
// }

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;

    this.andar = function(){
        console.log(nome + ' andou')
    }

}

//Crie 3 pessoas , João - 20 anos
//Maria - 25 anos , Bruno - 15 anos

const Joao = new Pessoa('João', 20);
Joao.andar();

const Maria = new Pessoa('Maria', 25);
Maria.andar();

const Bruno = new Pessoa('Bruno', 15);
Bruno.andar();





//Crie um Constructor Function (DOM) para manipulação
// de listas de elementos do Dom. Deve conter as seguintes
// propriedades e métodos


// elements, retorna Nodelist com os elementos selecionados
// addClass (classe), adiciona a classe a todos os elementos
// removeClass (classe), remove a classe a todos os elementos



function DOM(seletor){
    
    const elementList = document.querySelectorAll(seletor);
    this.elementos = elementList;
    this.addClass = function(classe){
        elementList.forEach((element)=>{
            element.classList.add(classe)
        })
    }

    this.removeClass = function(classe){
        elementList.forEach((element)=>{
            element.classList.remove(classe)
        })
    }

}