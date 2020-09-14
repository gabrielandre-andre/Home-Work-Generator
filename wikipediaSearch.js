function wikipediaSearch(a,b,c,d,e,f){
    const input = {
  "articleName": a,
  "lang": "pt"
    };
    b = f
    c = wikipedia.content.algo("web/WikipediaParser/0.1.2")
    d = wikipedia.algo.pipe(input)
    .then(function(response) {
        e = response.get()
    });


}

module.exports = wikipediaSearch