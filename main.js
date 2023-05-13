const usuarios=[
    {id:1, nombre:"gaspi", contraseña:"loco"},
    {id:2, nombre:"bauti", contraseña:"abc123"},
    {id:3, nombre:"mati", contraseña:"abc123"},
];
let formulario= document.getElementById("formulario");
formulario.addEventListener("submit",(e)=>{
    let inputs=e.target.children;
    let nombredeusuario=inputs[0].value;
    let contraseñausuario=inputs[1].value;
    let usuarioencontrado = usuarios.find(item => item.nombre === nombredeusuario && item.contraseña === contraseñausuario);
    if (usuarioencontrado){
            window.location.href="index2.html";
    }
    else{
        alert("su usuario es invalido");
    }
})
