let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

const DescargarCurriculum = document.querySelector("#Btn_Descargar");

DescargarCurriculum.addEventListener('click', (e) => {
    e.preventDefault()

    // URL del archivo que deseas descargar
    const urlArchivo = '/Mi Curriculum Develop 2.0.pdf';

    const enlace = document.createElement('a');
    enlace.href = urlArchivo;
    enlace.target = '_blank';
    enlace.download = 'Curriculum_Lassorela.pdf';

    // Simula un clic en el enlace para iniciar la descarga
    enlace.click();
});