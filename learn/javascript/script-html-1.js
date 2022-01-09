const txt1 = document.getElementById('txt1')
const view1 = document.getElementById('view1')

window.onload = function(){

    // const str =  '<html>\n<head>\n<title>Iniciando em HTML/title>\n</head>\n<body>\n<p>Olá mundo! Eu sou um parágrafo.</p>\n</body>\n</html>';
    // txt1.value= str
    // const a = txt1.value.replace(/\\n/g, '<br>')
    // view1.innerHTML = a

    const str =  '<html>\n  <head>\n    <title>Iniciando em HTML/title>\n  </head>\n  <body>\n    <p>Olá mundo! Eu sou um parágrafo.</p>\n  <!--Este é um comentário em HTML. Usando essas tags de abertura e fechamento, tudo o que escrever entre elas será ignorado pelo navegador ao renderizar a página.-->\n  </body>\n</html>';
    txt1.value= str
    const a = txt1.value.replace(/\\n/g, '<br>')
    view1.innerHTML = a
}

