const write =  require("fs").writeFileSync
const input=require('readline-sync').question;
const read =  require("fs").readFileSync
trabalho = 0
id=0
function cadrastroo(){
       b = input("digite o nome: ")
       c = input("digite a matricula: ")
       d = input("digite a idade: ")
       e = input("digite a nota: ")
         
       conteudo = read("trabalho.csv", {encoding: "utf-8"})
      if(conteudo=="sep=;\nid;nome;matricula;idade;nota"){
            id=1
      }
      
      trabalho = "\n"+id+";"+b+";"+c+";"+d+";"+e+";"
       write("trabalho.csv",trabalho.toString(), {flag: "a"});
}

cadrastroo()