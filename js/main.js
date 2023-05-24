function agregar(){
    const textoinput=document.getElementById("inputpushme").value;
    const nuevalista=document.createElement("li");
    const nuevoboton=document.createElement("button");
    const checkboton=document.createElement("button");
    const textoNuevoElemento = document.createTextNode(textoinput);
    nuevalista.appendChild(textoNuevoElemento);

    const lista = document.querySelector(".Lista");
    lista.appendChild(nuevalista);
    nuevalista.appendChild(nuevoboton);
    nuevalista.appendChild(checkboton);
    nuevoboton.innerHTML="Eliminar";
    checkboton.innerHTML="Check";
    document.getElementById("inputpushme").value = "";
}