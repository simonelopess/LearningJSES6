// const Dom = {
//     seletor: 'li', 
//     element(){
//         return document.querySelector(this.seletor);        
//     },
//     ativar(){
//         this.element().classList.add('ativar')
//     }
// }


//criando um objeto e métodos
function Dom(seletor){
    this.element = function(){
        return document.querySelector(seletor);        
    }
    this.ativar = function(chave){
        this.element().classList.add(chave)
    }
}

const lista = new Dom('ul');
lista.ativar();

const lastLi = new Dom('li:last-child');
lastLi.ativar('ativar');