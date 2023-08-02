const input=require('readline-sync').question;
function menuu(){
    while(true){
        console.log("2-cadastro de aluno")
        console.log("3-listar todos os alunos")
        console.log("4-listar aluno em específico")             
        console.log("5-atualizar aluno")            
        console.log("6-excluir aluno")            
        console.log("7-media")
        console.log("0-sair")
        var n = input("digite uma opcao: ")
        if(n >= 2 && n <= 7){
            return n
        }
        if(n == 0){
            return n
        }
    }
} 
console.log(menuu())