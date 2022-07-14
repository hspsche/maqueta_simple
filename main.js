console.log("Script funcionando");

const preguntasDataBase = [];

function iniciarApp() {

	img = document.getElementById("img").value;
	consigna = document.getElementById("consigna").value;
	opcion1 = document.getElementById("opcion1").value;
    opcion2 = document.getElementById("opcion2").value;
	opcion3 = document.getElementById("opcion3").value;
	opcionCorrecta = document.getElementById("opcioncorrecta").value;

    const monitor = document.getElementById("monitor");
    monitor.textContent = '';

    class Pregunta {
        constructor(img, consigna, opcion1, opcion2, opcion3, opcionCorrecta) {
            this.img = img;
            this.consigna = consigna;
            this.opcion1 = opcion1;
            this.opcion2 = opcion2;
            this.opcion3 = opcion3;
            this.opcionCorrecta = opcionCorrecta;
        }
    }
    
    const nuevaPregunta = new Pregunta(
        img,
        consigna,
        opcion1,
        opcion2,
        opcion3,
        opcionCorrecta
    );

    preguntasDataBase.push(nuevaPregunta);

        const monitorHeaderContainer = document.createElement('div');
        monitorHeaderContainer.textContent = `Objetos agregados: ${preguntasDataBase.length}`;
        monitorHeaderContainer.classList.add('monitor-header');

        const monitorBodyContainer = document.createElement('div');
        monitorBodyContainer.classList.add('monitor-body');

        const nLeftContainer = document.createElement("div");
        nLeftContainer.classList.add('left-container');

            const nLline1 = document.createElement("div");
            nLline1.textContent = '{';
            nLline1.classList.add('monitor-content');

            nLline2 = document.createElement("div");
            nLline2.textContent = 'img:';
            nLline2.classList.add('monitor-content2');

            const nLline3 = document.createElement("div");
            nLline3.textContent = 'consigna:';
            nLline3.classList.add('monitor-consigna');

            const nLline4 = document.createElement("div");
            nLline4.textContent = 'opcion1:';
            nLline4.classList.add('monitor-content2');

            const nLline5 = document.createElement("div");
            nLline5.textContent = 'opcion2:';
            nLline5.classList.add('monitor-content2');

            const nLline6 = document.createElement("div");
            nLline6.textContent = 'opcion3:';
            nLline6.classList.add('monitor-content2');

            const nLline7 = document.createElement("div");
            nLline7.textContent = 'opcionCorrecta:';
            nLline7.classList.add('monitor-content2');

            const nLline8 = document.createElement("div");
            nLline8.textContent = '}';
            nLline8.classList.add('monitor-content');

        const nRightContainer = document.createElement("div");
        nRightContainer.classList.add('right-container');

            const nRline1 = document.createElement("div");
            nRline1.textContent = '';
            nRline1.classList.add('monitor-content3');

            const nRline2 = document.createElement("div");
            nRline2.textContent = ` ${nuevaPregunta.img},`;
            nRline2.classList.add('monitor-rcontent');

            const nRline3 = document.createElement("div");
            nRline3.textContent = ` ${nuevaPregunta.consigna},`;
            nRline3.classList.add('monitor-consigna2');

            const nRline4 = document.createElement("div");
            nRline4.textContent = ` ${nuevaPregunta.opcion1},`;
            nRline4.classList.add('monitor-rcontent');

            const nRline5 = document.createElement("div");
            nRline5.textContent = ` ${nuevaPregunta.opcion2},`;
            nRline5.classList.add('monitor-rcontent');

            const nRline6 = document.createElement("div");
            nRline6.textContent = ` ${nuevaPregunta.opcion3},`;
            nRline6.classList.add('monitor-rcontent');

            const nRline7 = document.createElement("div");
            nRline7.textContent = ` ${nuevaPregunta.opcionCorrecta}`;
            nRline7.classList.add('monitor-rcontent');

            const nRline8 = document.createElement("div");
            nRline8.textContent = ' ';
            nRline8.classList.add('monitor-content3');
    

    monitor.appendChild(monitorHeaderContainer)
    monitor.appendChild(monitorBodyContainer);

    monitorBodyContainer.appendChild(nLeftContainer);
    monitorBodyContainer.appendChild(nRightContainer);

    nLeftContainer.appendChild(nLline1);
    nLeftContainer.appendChild(nLline2);
    nLeftContainer.appendChild(nLline3);
    nLeftContainer.appendChild(nLline4);
    nLeftContainer.appendChild(nLline5);
    nLeftContainer.appendChild(nLline6);
    nLeftContainer.appendChild(nLline7);
    nLeftContainer.appendChild(nLline8);

    nRightContainer.appendChild(nRline1);
    nRightContainer.appendChild(nRline2);
    nRightContainer.appendChild(nRline3);
    nRightContainer.appendChild(nRline4);
    nRightContainer.appendChild(nRline5);
    nRightContainer.appendChild(nRline6);
    nRightContainer.appendChild(nRline7);
    nRightContainer.appendChild(nRline8);


enviarObjeto();

function enviarObjeto() {
    setTimeout(limpiarFormulario, 2000);
} 

}

function limpiarCampos() {
    formulario.reset();

    monitor.textContent = '';
}

function limpiarFormulario() {
    formulario.reset();
}
