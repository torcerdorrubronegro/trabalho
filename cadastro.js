const write =  require("fs").writeFileSync
const input=require('readline-sync').question;
trabalho = 0
function cadrastroo(){
      a = input("digite o nome: ")
      b = input("digite a matricula: ")
      c = input("digite a idade: ")
      d = input("digite a nota: ")
      trabalho = a+";"b+";"c+";"d+";"
       write("trabalho.csv",trabalho.toString(), {flag: "a"});
}

cadrastroo()