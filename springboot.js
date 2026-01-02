async function cargar() {
    const texto=document.getElementById("titulo")
    const respuesta=await fetch("http://localhost:8090/api/saludo")
    const datos=await respuesta.text()
    texto.innerText = datos
}
cargar();