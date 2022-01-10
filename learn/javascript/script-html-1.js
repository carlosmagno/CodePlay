const txt1 = document.getElementById('txt1')
const txt2 = document.getElementById('txt2')
const txt3 = document.getElementById('txt3')
const txt4 = document.getElementById('txt4')
const txt5 = document.getElementById('txt5')
const txt6 = document.getElementById('txt6')

const view1 = document.getElementById('view1')
const view2 = document.getElementById('view2')
const view3 = document.getElementById('view3')
const view4 = document.getElementById('view4')
const view5 = document.getElementById('view5')
const view6 = document.getElementById('view6')

window.onload = function(){
    var str;
    var a;
    /**
     * 
     */
    str =  
    '<html>\n'+
    ' <head>\n'+
    '  <title>Iniciando em HTML/title>\n'+
    ' </head>\n'+
    ' <body>\n'+
    '  <p>Olá mundo! Eu sou um parágrafo.</p>\n'+
    '  <!-- Isto é um comentário em HTML. Tudo que for excrito entre essas tags não será renderizado pelo navegador. Você pode usar comentários para explicar ou colocar lembretes em trechos do seu código. -->'+
    ' </body>\n'+
    '</html>';
    txt1.value= str
    view1.innerHTML = 
    '<p>Olá mundo! Eu sou um parágrafo.</p>\n'

    str =
    "<h1>Hierarquia de título nível 1</h1>\n"+
    "<h2>Hierarquia de título nível 2</h2>\n"+
    "<h3>Hierarquia de título nível 3</h3>\n"+
    "<h4>Hierarquia de título nível 4</h4>\n"+
    "<h5>Hierarquia de título nível 5</h5>\n"+
    "<h6>Hierarquia de título nível 6</h6>\n"+
    "<p>Eu sou um parágrafo. Aqui vai o seu texto...</p>\n"+
    "<p>Eu sou outro parágrafo. Aqui vai mais texto...</p>\n"+
    '<p> A tag <span style="color:red">span</span> é usada para agrupar elementos inline para fins de estilo. '
    txt2.value = str
    a = txt2.value.replace(/\\n/g, '<br>')
    view2.innerHTML = a

    str=
    '<p>Usamos a tag "strong" para indicar que uma palavra ou expressão dentro do nosso texto é <strong>de forte importância</strong>. Se quisermos apenas colocar uma palavra em <b>negrito</b> usamos a tag "b" de "bold".</p>\n\n'+
    '<p>Para enfatizar uma expressão usamos a tag "em", por exemplo: "O certo não é <em>nós semos fortes</em>, mas sim <em>nós somos fortes</em>. Se quisermos apenas deixar uma palavra em <i>itálico</i>, não levando em conta a semântica usamos a tag "i" de "italic".</p>\n\n'+
    '<p>O elemento "mark" é usado para <mark>destacar texto.</mark></p>\n\n'+
    '<p>Exemplos do elemento "time". Deve ser usado para datas que podem ser calculadas:</p>\n\n<p>* O horário do vôo é as <time>20:00</time>. (Simples).</p>\n\n<article>* Esse artigo foi publicado em <time pubdate>2021-01-15</time>. (Usando o atributo pubdate).</article>\n\n<p>* Esse artigo foi publicado em <time datetime="2021-01-15 22:00">15 de janeiro as 22:00</time>. (Usando o atributo datetime).</p>\n\n'
    txt3.value = str
    a = txt3.value.replace(/\\n/g, '<br>')
    view3.innerHTML = a

    str=
    '<p>O elemento "br" insere uma quebra de linha (do inglês "break row"), por exemplo:<br>Esta frase está em uma nova linha. </p>\n\n'+
    '<hr>\n<p>O elemento "hr" insere uma linha horizontal, como acima.</p>\n\n'+
    '<p>O elemento "cite" é usado para fazer referência a um trabalho criativo e o elemento "blockquote" para citar um trecho deste trabalho. Usado para dar crédito corretamente aos autores de artigos, notícias, poemas etc... Por exemplo:</p>\n\n<blockquote cite="link da fonte da informação">"O Presidente fulano é acusado de crime..."</blockquote><cite>-The New York Times</cite></p>\n\n'+
    'O elemento "abbr" é usado para abreviação. Exemplo: "Hoje tem votação no <abbr title="Big Brother Brasil">BBB</abbr>". '
    txt4.value = str
    a = txt4.value.replace(/\\n/g, '<br>')
    view4.innerHTML = a

    str=
    '<p>O elemento "br" insere uma quebra de linha (do inglês "break row"), por exemplo:<br>Esta frase está em uma nova linha. </p>\n\n'
    txt5.value = str
    a = txt5.value.replace(/\\n/g, '<br>')
    view5.innerHTML = a

    // const str =  '<html>\n  <head>\n    <title>Iniciando em HTML/title>\n  </head>\n  <body>\n    <p>Olá mundo! Eu sou um parágrafo.</p>\n  <!--Este é um comentário em HTML. Usando essas tags de abertura e fechamento, tudo o que escrever entre elas será ignorado pelo navegador ao renderizar a página.-->\n  </body>\n</html>';
    // txt1.value= str
    // const a = txt1.value.replace(/\\n/g, '<br>')
    // view1.innerHTML = a
}

