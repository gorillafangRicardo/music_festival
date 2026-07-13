document.addEventListener('DOMContentLoaded', function(){
    crearGaleria()
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    const cantidad_imagenes = 16;

    for(let i = 1; i <= cantidad_imagenes; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = `imagen galeria`

        //event handler
        imagen.onclick = function(){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)

    }
}


function mostrarImagen(i){
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = `imagen galeria`



    //generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal


    //BOTON CERRAR MODAL

    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModalBtn


    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)


    //agergar al html
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fadeOut')

    setTimeout(() => {
            modal?.remove()

            const body = document.querySelector('body');
            body.classList.remove('overflow-hidden');
    }, 500);

}