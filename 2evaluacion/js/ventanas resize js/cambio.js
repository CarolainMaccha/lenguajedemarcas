function cambio() {

    titulo = document.getElementById("titular");
    caja1 = document.getElementById("izquierda");
    caja2 = document.getElementById("derecha");
   
    if (window.innerWidth <= 960) {
        titulo.innerHTML = "Las dos cajas en horizontal"
        caja1.className = "arriba";
        caja2.className = "abajo";
    }
    else{
        titulo.innerHTML = "Las dos cajas a derecha e izquierda"
        caja1.className = "izquierda";
        caja2.className = "derecha";
    }
}