// Unificamos las materias que vienen de los archivos externos
const baseDeDatos = {
    anatomia: preguntasAnatomia, 
    bioquimica: preguntasBioquimica
// ... el resto de tu código (mazoActual, funciones, etc.) queda igual
};
let mazoActual = [];
let indiceActual = 0;
let respondido = false;

// Cargar niveles Leitner del almacenamiento del navegador
let nivelesLeitner = JSON.parse(localStorage.getItem('odontoLeitner')) || {};

function actualizarTemas() {
    // 1. Obtenemos qué materia eligió el usuario (ej: 'anatomia' o 'bioquimica')
    const materia = document.getElementById('selector-materia').value;
    const selectorTema = document.getElementById('selector-tema');
    const selectorSubtema = document.getElementById('selector-subtema');
    
    // 2. Limpiamos el selector de temas para que no se amontonen los de la materia anterior
    selectorTema.innerHTML = '<option value="">-- Seleccionar Tema --</option>';
    selectorSubtema.innerHTML = '<option value="">-- Seleccionar Subtema --</option>';
    selectorSubtema.disabled = true;

    // 3. Verificamos si la materia elegida existe en nuestro "Unificador" (baseDeDatos)
    if (materia && baseDeDatos[materia]) {
        
        // Extraemos los nombres de las carpetas/temas (ej: "Esplacnocráneo", "Enzimas")
        const temas = Object.keys(baseDeDatos[materia]);
        
        // 4. Llenamos el selector con los temas encontrados
        temas.forEach(tema => {
            let opt = document.createElement('option');
            opt.value = tema; 
            opt.textContent = tema;
            selectorTema.appendChild(opt);
        });
        
        // 5. Si hay temas, habilitamos el selector y el botón de inicio
        selectorTema.disabled = false;
        document.getElementById('btn-comenzar').disabled = false;
        
        cambiarAvatar("🦷", `¡Genial! Elegiste ${materia}. Ahora elegí un tema.`);
        
    } else {
        // Si no hay materia seleccionada, bloqueamos todo
        selectorTema.disabled = true;
        document.getElementById('btn-comenzar').disabled = true;
    }
}
function actualizarSubtemas() {
    const materia = document.getElementById('selector-materia').value;
    const tema = document.getElementById('selector-tema').value;
    const selectorSubtema = document.getElementById('selector-subtema');
    
    // 1. Limpiamos lo que hubiera antes
    selectorSubtema.innerHTML = '<option value="">-- Seleccionar Subtema --</option>';

    // 2. Verificamos que la ruta en la base de datos exista
    if (materia && tema && baseDeDatos[materia][tema]) {
        const subtemas = Object.keys(baseDeDatos[materia][tema]);
        
        subtemas.forEach(st => {
            let opt = document.createElement('option');
            opt.value = st; 
            opt.textContent = st;
            selectorSubtema.appendChild(opt);
        });
        
        // 3. ¡IMPORTANTE! Desbloqueamos el selector
        selectorSubtema.disabled = false;
        cambiarAvatar("🧠", "¡Casi listo! Solo falta el subtema.");
    } else {
        selectorSubtema.disabled = true;
    }
}

function activarBotonInicio() {
    const subtema = document.getElementById('selector-subtema').value;
    const btn = document.getElementById('btn-comenzar');
    
    // Si hay algo seleccionado, habilitamos el botón (disabled = false)
    if (subtema !== "") {
        btn.disabled = false;
        cambiarAvatar("🔥", "¡Todo listo! Dale a Iniciar.");
    } else {
        btn.disabled = true;
    }
}
function comenzarEstudio() {
   const materia = document.getElementById('selector-materia').value;
    const tema = document.getElementById('selector-tema').value;
    const subtema = document.getElementById('selector-subtema').value;

    if (!materia || !tema || !subtema) return;
   mazoActual = baseDeDatos[materia][tema][subtema];
            
            if (!mazoActual || mazoActual.length === 0) {
                throw new Error("No hay preguntas en este subtema");
            }
    indiceActual = 0;
    
    document.getElementById('pantalla-inicio').style.display = 'none';
    document.getElementById('pantalla-estudio').style.display = 'flex';
    document.getElementById('titulo-pantalla').innerText = `${materia.toUpperCase()} > ${tema}`;
    
  // Al llegar a las preguntas, Moli te da la bienvenida
        cambiarAvatar("👨‍⚕️", "Primera pregunta. ¡Concentración!");
        
        mostrarPregunta();
}

function mostrarPregunta() {
    respondido = false;
    const q = mazoActual[indiceActual];
    const container = document.getElementById('opciones-container');
    
    document.getElementById('pregunta-texto').innerText = q.pregunta;
    document.getElementById('explicacion-box').style.display = 'none';
    document.getElementById('btn-next').style.visibility = 'hidden';
    container.innerHTML = '';

    // Creamos las opciones con su "ADN" (si son correctas o no)
    let opcionesParaMezclar = q.opciones.map((texto, index) => {
        return { texto: texto, esCorrecta: index === q.correcta };
    });

    // Mezclamos el mazo de opciones
    opcionesParaMezclar.sort(() => Math.random() - 0.5);

    // Creamos los botones
    opcionesParaMezclar.forEach((opc) => {
        const btn = document.createElement('button');
        btn.className = 'opcion-btn';
        btn.innerText = opc.texto;
        
        // AQUÍ ESTABA EL ERROR: Ahora le pasamos el botón y el dato de si es correcta
        btn.onclick = () => validarRespuesta(btn, opc.esCorrecta);
        
        container.appendChild(btn);
    });

    actualizarStatsLeitner();
}
// REEMPLAZA TU ANTIGUA validarRespuesta CON ESTA:
function validarRespuesta(btnElegido, esCorrecta) {
    if (respondido) return;
    respondido = true;
    
    const q = mazoActual[indiceActual];
    const btns = document.getElementsByClassName('opcion-btn');
    
    if (esCorrecta) {
        btnElegido.classList.add('correct');
        subirNivelLeitner(q.id);
        cambiarAvatar("💡", "¡Exacto! Estás afilado.");
    } else {
        btnElegido.classList.add('wrong');
        // Pintamos la correcta para que el usuario aprenda
        Array.from(btns).forEach(b => {
            if (b.innerText === q.opciones[q.correcta]) {
                b.classList.add('correct');
            }
        });
        resetLeitner(q.id);
        cambiarAvatar("🤔", "Casi, pero no. Repasalo abajo.");
    }

    Array.from(btns).forEach(b => b.disabled = true);
    document.getElementById('explicacion-texto').innerText = q.explicacion;
    document.getElementById('explicacion-box').style.display = 'block';
    document.getElementById('btn-next').style.visibility = 'visible';
}
function mostrarPista() {
    const q = mazoActual[indiceActual];
    cambiarAvatar("🧐", q.pista);
}

function cambiarAvatar(emoji, texto) {
    document.getElementById('avatar').innerText = emoji;
    document.getElementById('burbuja-avatar').innerText = texto;
}

/* SISTEMA LEITNER */
function subirNivelLeitner(id) {
    if (!nivelesLeitner[id]) nivelesLeitner[id] = 1;
    if (nivelesLeitner[id] < 5) nivelesLeitner[id]++;
    localStorage.setItem('odontoLeitner', JSON.stringify(nivelesLeitner));
}

function resetLeitner(id) {
    nivelesLeitner[id] = 1; // El error te castiga volviendo a la caja 1
    localStorage.setItem('odontoLeitner', JSON.stringify(nivelesLeitner));
}

function actualizarStatsLeitner() {
    const q = mazoActual[indiceActual];
    const nivel = nivelesLeitner[q.id] || 1;
    document.getElementById('box-level').innerText = `Caja Leitner: ${nivel}`;
    document.getElementById('contador').innerText = `Pregunta ${indiceActual + 1} de ${mazoActual.length}`;
}

// MODIFICACIÓN EN BOTÓN SIGUIENTE
document.getElementById('btn-next').onclick = () => {
    indiceActual = (indiceActual + 1) % mazoActual.length;
    
    // Moli reacciona al pasar de pregunta
    cambiarAvatar("🦷", "¡Dale, una más y sos odontólogo/a!");
    
    mostrarPregunta();
}

// MODIFICACIÓN EN VOLVER INICIO
function volverInicio() {
    document.getElementById('pantalla-inicio').style.display = 'flex';
    document.getElementById('pantalla-estudio').style.display = 'none';
    
    // Animación y mensaje de Moli al salir
    cambiarAvatar("👋", "¿Y ahora con qué seguimos? ¡No aflojes!");
    
    // Pequeño efecto de salto al avatar para llamar la atención
    const avatar = document.getElementById('avatar');
    avatar.classList.add('jump-animation');
    setTimeout(() => avatar.classList.remove('jump-animation'), 500);
}