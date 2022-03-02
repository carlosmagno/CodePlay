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
    if(txt1){
        str =  
        '<header >\n'+
        ' <nav>\n'+
        '    <ul>\n'+
        '       <li><a href="#">Home</a></li>\n'+
        '       <li><a href="#">Sobre</a></li>\n'+
        '       <li><a href="#">Contato</a></li>\n'+
        '    </ul>\n'+
        ' </nav>\n'+
        '</header>\n'+
        '  <hr>\n'+
        '  <p>Olá devplayer! Eu sou um parágrafo. Acima de mim está um cabeçalho simples do site com um menu de navegação simples!</p>\n';
        txt1.value= str
        a = txt1.value.replace(/\\n/g, '<br>')
        view1.innerHTML = a
    }

    if(txt2){
        var str1="<body>"
        var str2="</body>"
        txt2.value = str1+"\n"+view2.innerHTML+"\n"+str2
        //a = txt2.value.replace(/\\n/g, '<br>')
        //view2.innerHTML = a
    }

    //Conteúdos laterais e rodapé
    if(txt3){
        var str1="<body>"
        var str2="</body>"
        //str=
        //'<aside></aside>'+
        //'aguardando edição'
        //txt3.value = str1+"\n"+view3.innerHTML+"\n"+str2
        txt3.value = view3.innerHTML
        //txt3.value = str
        //a = txt3.value.replace(/\\n/g, '<br>')
        //view3.innerHTML = a  
    }

    //Containers
    if(txt4){
        str=
        'aguardando edição'
        txt4.value = str
        a = txt4.value.replace(/\\n/g, '<br>')
        view4.innerHTML = a
    }

    if(txt5){
        str=
        '<ol>Lista ordenada\n <li>Opção 1</li>\n <li>Opção 2</li>\n</ol>\n\n'+
        '<ul>Lista não ordenada\n <li>Opção 1</li>\n <li>Opção 2</li>\n</ul>\n\n'+
        '<p><b>Exemplo de tabela simples com cabeçalho</b></p>\n\n'+
        '<table>\n <tr>\n  <th>Nome</th>\n  <th>Função</th>\n </tr>\n <tr>\n  <td>Carlos</td>\n  <td>Aluno</td>\n </tr>\n <tr>\n  <td>João</td>\n  <td>Professor</td>\n </tr>\n</table>\n\n'+
        '<p><b>Exemplo de tabela com estrutura mais completa e estilo inline</b></p>\n\n'+
        '<table style="border:solid 1px blue">\n <thead style="background-color:black;color:white">\n  <tr>\n   <th>Iten</th>\n   <th>Valor</th>\n  </tr>\n </thead>\n <tbody style="background-color:gray;color:white">\n  <tr>\n   <td>Feijão</td>\n   <td>R$10,00</td>\n  </tr>\n  <tr>\n   <td>Arroz</td>\n   <td>R$ 5,00</td>\n  </tr>\n </tbody>\n <tfoot style="background-color:blue;color:white">\n  <tr>\n   <th>Total</th>\n   <td>R$15,00</td>\n  </tr>\n </tfoot>\n</table>'
        txt5.value = str
        a = txt5.value.replace(/\\n/g, '<br>')
        view5.innerHTML = a
    }

    if(txt6){
        str=
        '<code>var a = "variavel;"</code><br><br>\n\n'+
        '<p><b>Link simples e com imagem</b></p>\n\n'+
        '<a href="https://google.com">Google</a><br><br>\n\n'+
        '<a href="https://masterplanilhas.blogspot.com"><img src="../../../arquives/images/logo-master-planilhas.png"></img></a>'
        txt6.value = str
        a = txt6.value.replace(/\\n/g, '<br>')
        view6.innerHTML = a
    }


}