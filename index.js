const readline = require('readline-sync')

const credentials = require('./credencials.json')



const content = {}

content.searchTerm = readline.question('Qual o termo de busca? ')

content.ROC = readline.setPrint('ok','ok')

console.log(content)














//console.log(credentials.nome)
