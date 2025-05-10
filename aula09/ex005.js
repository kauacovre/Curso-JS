    var corpo = window.document.body
    var p1 = window.document.getElementsByTagName('p')[1]
    p1.style.color = 'red'
    corpo.style.backgroundColor = 'antiquewhite'

    /* Opção 1
        var d = window.document.getElementById('msg') 
    */

    /* Opção 2
        window.document.getElementById ('msg').innerText = "Loading..."
    */

    /* Opção 3
        var d = window.document.getElementsByName("msg")[0]
    */

    /* Opção 4
        var d = window.document.getElementsByClassName('msg')[0]
    */

    /* Opção 4 - quando for Class utilizar .msg; quando for ID utilizar #msg */
    var d = window.document.querySelector('div#msg')

    d.style.color = 'white'
    d.innerText = "Loading..."
    d.style.background = 'blue'