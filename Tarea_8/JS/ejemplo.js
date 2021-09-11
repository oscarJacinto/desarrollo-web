import { peliculas, imprimircomb, ListarAccion, ListarPopulares } from "./Tareas.js";
peliculas();
imprimircomb();
var combo = document.getElementById("SelectGenero");
let lenguaje = combo.val;
combo.addEventListener('change',
    function() {
        var selectedOption = this.options[combo.selectedIndex];
        ListarAccion(selectedOption.text);
    });
ListarPopulares();