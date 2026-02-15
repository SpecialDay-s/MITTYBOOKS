let paginaActual = 0;

/* 📖 TODAS LAS PÁGINAS DEL LIBRO */
const paginas = [
  {
    izquierda: {
      titulo: "DARLING",
      imagen: "fotos/IMG2.png",
      texto: "Amor, buenas noches. Sé que es tarde, pero la verdad quería hacerte este detalle por lo mucho que te amo. Tú sabes que hoy estaba mal, pero igualmente me disculpo. También me disculpo por lo del pollo, creo que hice mal en no exigir, pero dejando eso, encontré esto en mis recuerdos. Sé que son de Roblox, pero para mí es importante por todo lo que vivimos en esos tiempos."
    },
    derecha: {
      titulo: "HONEY",
      imagen: "fotos/IMG4.png",
      texto: "Amor, yo quiero estar toda mi vida contigo porque para mí eres la mejor persona del mundo. Para mí solo existes tú. Te amo mucho, demasiado, que cada vez que pienso en ti me pongo muy feliz y empiezo a llorar de felicidad."
    }
  },

  {
    izquierda: {
      titulo: "11 JUNIO",
      imagen: "fotos/IMG6.jpg",
      texto: "Amor, eres una gran persona. Sé que cumplirás cada una de tus metas y yo siempre te apoyaré en todo lo que tú quieras. Quiero que te vaya bien en tu carrera, con tu familia y que tú seas muy feliz porque eres una gran mujer y te lo mereces. Amor, quizá no me puedo comparar con las anteriores personas con las que estuviste, pero yo te amo mucho, nadie te amará como yo. Siempre te respetaré y te seré fiel con toda mi alma. Perdón por lastimarte y hacerte sentir triste, mi Ari. Intentaré cuidar más tu corazón."
    },
    derecha: {
      titulo: "Eternal Sunshine",
      imagen: "fotos/IMG5.png",
      texto: "Y por último quiero recordarte que yo siempre estaré para ti en las buenas y en las malas. Cada día intento mejorar para estar mejor y hacerte muy feliz y así será hasta que sea abuelita. Siempre resolveré los problemas para que estemos bien y cuidar mucho tu corazoncito, mi vida. Muchas gracias por las flores, soy la mujer más feliz del mundo y yo sé que quizá soy muy tonta, pero créeme que el amor que yo siento por ti es muy grande. Quisiera ser tu enamorada, tu novia y tu esposa."
    }
  }
];


/* ================= AUDIO ================= */

function fadeInAudio(audio) {
  audio.volume = 0;
  audio.play();

  let vol = 0;
  const intervalo = setInterval(() => {
    if (vol < 0.5) {
      vol += 0.02;
      audio.volume = vol;
    } else {
      clearInterval(intervalo);
    }
  }, 120);
}

/* ================= CONTROLES ================= */

function abrirLibro() {
  document.getElementById("portada").classList.add("oculto");
  document.getElementById("libro").classList.remove("oculto");

  const musica = document.getElementById("musica");
  fadeInAudio(musica);

  paginaActual = 0;
  renderPaginas();
}

function cerrarLibro() {
  document.getElementById("libro").classList.add("oculto");
  document.getElementById("portada").classList.remove("oculto");

  const musica = document.getElementById("musica");
  musica.pause();
  musica.currentTime = 0;
}

function siguientePagina() {
  if (paginaActual < paginas.length - 1) {
    paginaActual++;
    renderPaginas();
  }
}

function paginaAnterior() {
  if (paginaActual > 0) {
    paginaActual--;
    renderPaginas();
  }
}

/* ================= RENDER ================= */

function renderPaginas() {
  const izquierda = document.getElementById("izquierda");
  const derecha = document.getElementById("derecha");

  const pagina = paginas[paginaActual];

  izquierda.innerHTML = `
    <h2>${pagina.izquierda.titulo}</h2>

    <div class="marco-foto">
      <img src="${pagina.izquierda.imagen}" class="imagen-romantica">
      <span class="nota-foto">♥</span>
    </div>

    <p>${pagina.izquierda.texto}</p>
  `;

  derecha.innerHTML = `
    <h2>${pagina.derecha.titulo}</h2>

    <div class="marco-foto">
      <img src="${pagina.derecha.imagen}" class="imagen-romantica">
      <span class="nota-foto">♥</span>
    </div>

    <p>${pagina.derecha.texto}</p>

    <div class="controles">
      ${
        paginaActual > 0
          ? `<button onclick="paginaAnterior()">← Anterior</button>`
          : `<button onclick="cerrarLibro()">Cerrar</button>`
      }

      ${
        paginaActual < paginas.length - 1
          ? `<button onclick="siguientePagina()">Siguiente →</button>`
          : `<button onclick="cerrarLibro()">Cerrar</button>`
      }
    </div>
  `;

  izquierda.setAttribute("data-page", paginaActual * 2 + 1);
  derecha.setAttribute("data-page", paginaActual * 2 + 2);
}

/* ================= CORAZONES ================= */

function crearCorazones() {
  const contenedor = document.querySelector(".corazones-fondo");

  setInterval(() => {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "♥";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = 28 + Math.random() * 40 + "px";
    corazon.style.animationDuration = 6 + Math.random() * 6 + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 12000);

  }, 120);
}

crearCorazones();
