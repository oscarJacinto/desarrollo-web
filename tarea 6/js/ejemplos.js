const conten = document.querySelector('#principal');

    const Curso = 'DESAROLLO WEB';
    estudiante = ['Juan', 'Maria','Carlos','Karla'];
    nota = [10, 30, 20, 40];

console.log(conten);
let html;
if (nota<=10){
    html = `<font color="red">`
}
html=`<ul>
<dl>Curso: &nbsp &nbsp &nbsp ${Curso}</dl> 
<br>
<ol>Estudiante &nbsp &nbsp         Nota</ol>
<ol>${estudiante [0]} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp${nota [0]}</ol>
<ol>${estudiante [1]} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp${nota [1]}</ol>
<ol>${estudiante [2]} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp${nota [2]}</ol>
<ol>${estudiante [3]} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp${nota [3]}</ol>
</ul>`
conten.innerHTML=html;
