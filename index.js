const readline = require('readline-sync')

const credentials = require('./credencials.json')

const wikipedia = {}

wikipedia.wikipediaSearch = require('./wikipediaSearch.js')

const content = {}

const Algorithmia = require("algorithmia");



content.searchTerm = readline.question('Qual o termo de busca? ')


content.ROC = readline.questionInt('RESUMO[1] || COMPLETO[2] ')

async function wikipediaSearch(){

        const input = {
        "articleName": content.searchTerm,
        "lang": "pt"
        };
        wikipedia.content = await Algorithmia.client(credentials.algorithmia)
        wikipedia.algo = await wikipedia.content.algo("web/WikipediaParser/0.1.2")
        wikipedia.pipe = await wikipedia.algo.pipe(input)
        wikipedia.Response = await wikipedia.pipe.get()

                //console.log(wikipedia.Response)


        return wikipedia.Response


        

}


async function printarLogs(){

    await wikipediaSearch()
    
    if(content.ROC == 1){
        console.log(wikipedia.Response.summary)
    }else if(content.ROC == 2){
        console.log(wikipedia.Response.content)
    }else{
        console.log("VALOR INVÁLIDO, TENTE NOVAMENTE!")
    }

}

printarLogs()

