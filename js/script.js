// Mostrar un mensaje de bienvenida solo una vez
window.onload = function() {
    // Comprobar si el mensaje ya ha sido mostrado
    if (!localStorage.getItem('welcomeMessageShown')) {
        // Si no se ha mostrado, mostramos el mensaje
        alert("¡Bienvenido a mi página web!");
        
        // Y marcamos que ya ha sido mostrado, para que no vuelva a aparecer
        localStorage.setItem('welcomeMessageShown', 'true');
    }
}


// Función para mostrar el horario
function mostrarHorario() {
    const container = document.getElementById("horario-container");

    // Si el contenido ya ha sido insertado, lo eliminamos
    if (container.innerHTML !== "") {
        container.innerHTML = ""; // Borra el contenido actual
        return; // Sale de la función si el contenido ya está visible
    }

    // Inserta el horario dinámicamente en la tabla con nombres completos de las asignaturas
    container.innerHTML = `
        <table>
            <tr>
                <th>Días/Horas</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
            </tr>
            <tr>
                <td>8:15 - 9:10</td><td>Sistemas informáticos</td><td>Programación</td><td>Sistemas informáticos</td><td>Programación</td><td>Lenguajes de marcas y sistemas de gestión de información</td>
            </tr>
            <tr>
                <td>9:10 - 10:05</td><td>Sistemas informáticos</td><td>Bases de datos</td><td></td><td>Entornos de desarrollo</td><td></td>
            </tr>
            <tr>
                <td>10:05 - 11:00</td><td>Bases de datos</td><td>Programación</td><td>Sistemas informáticos</td><td>Lenguajes de marcas y sistemas de gestión de información</td><td>Programación</td>
            </tr>
            <tr>
                <td>11:00 - 11:55</td><td>Sistemas informáticos</td><td>Bases de datos</td><td>Programación</td><td>Sistemas informáticos</td><td>Entornos de desarrollo</td>
            </tr>
            <tr>
                <td>11:55 - 12:50</td><td>Programación</td><td>Programación</td><td>Lenguajes de marcas y sistemas de gestión de información</td><td>Bases de datos</td><td>Sistemas informáticos</td>
            </tr>
            <tr>
                <td>12:50 - 13:45</td><td>Bases de datos</td><td>Programación</td><td>Programación</td><td>Sistemas informáticos</td><td>Lenguajes de marcas y sistemas de gestión de información</td>
            </tr>
            <tr>
                <td>13:45 - 14:40</td><td>Lenguajes de marcas y sistemas de gestión de información</td><td>Programación</td><td>Sistemas informáticos</td><td>Bases de datos</td><td>Programación</td>
            </tr>
            <tr>
                <td>14:40 - 15:35</td><td>Programación</td><td>Lenguajes de marcas y sistemas de gestión de información</td><td>Bases de datos</td><td>Programación</td><td>Sistemas informáticos</td>
            </tr>
        </table>
    `;
}



// Función para mostrar las asignaturas
function mostrarAsignaturas() {
    const container = document.getElementById("asignaturas-container");
    
    // Si el contenido ya ha sido insertado, lo eliminamos
    if (container.innerHTML !== "") {
        container.innerHTML = ""; // Borra el contenido actual
        return; // Sale de la función si el contenido ya está visible
    }

    // Inserta el contenido dinámicamente
    container.innerHTML = `
        <div class="contenido-curso">
            <h3>PRIMER CURSO:</h3>
            <p>En el primer curso, los estudiantes adquieren conocimientos fundamentales en tecnologías web y sistemas informáticos, así como bases de datos, y programación. Estas asignaturas proporcionan las bases necesarias para continuar con la creación de aplicaciones web avanzadas en el segundo curso.</p>
            <ul>
                <li>Sistemas informáticos</li>
                <li>Bases de datos</li>
                <li>Programación</li>
                <li>Lenguajes de marcas y sistemas de gestión de información</li>
                <li>Entornos de desarrollo</li>
                <li>Formación y orientación laboral</li>
            </ul>
        </div>
        <div class="contenido-curso">
            <h3>SEGUNDO CURSO:</h3>
            <p>El segundo curso se enfoca en el desarrollo web avanzado, donde se cubren tanto el desarrollo web en el lado del cliente como del servidor. Los estudiantes aprenden a trabajar con bases de datos avanzadas, a diseñar interfaces web complejas, y a gestionar el despliegue de aplicaciones web en entornos de producción.</p>
            <ul>
                <li>Desarrollo web en entorno cliente</li>
                <li>Desarrollo web en entorno servidor</li>
                <li>Despliegue de aplicaciones web</li>
                <li>Diseño de interfaces web</li>
                <li>Proyecto de desarrollo de aplicaciones web</li>
                <li>Formación en centros de trabajo</li>
            </ul>
        </div>
    `;
}



// Función para mostrar la descripción del curso elegido
function mostrarCurso(curso) {
    const descripcionCurso = document.getElementById("descripcion-curso");

    // Limpiar cualquier contenido previo
    descripcionCurso.innerHTML = '';

    // Mostrar el contenido del curso dependiendo de la elección
    if (curso === 'daw') {
        descripcionCurso.innerHTML = `
            <h2>Curso de Desarrollo de Aplicaciones Web (DAW)</h2>
            <p><strong>Formación en desarrollo web y tecnologías asociadas</strong></p>
            <p>El curso de Desarrollo de Aplicaciones Web (DAW) tiene como objetivo capacitar a los estudiantes en el diseño, desarrollo, implementación y mantenimiento de aplicaciones web modernas. A lo largo de este curso, se abordan temas como programación web, desarrollo de bases de datos, y creación de interfaces de usuario eficientes y accesibles. Además, los estudiantes aprenderán sobre el uso de frameworks modernos y cómo integrar tecnologías como HTML, CSS, JavaScript y bases de datos.</p>
            <p>Este curso es ideal para aquellos interesados en convertirse en desarrolladores web, con un enfoque en la creación de aplicaciones funcionales y escalables para el entorno digital actual.</p>
        `;
    } else if (curso === 'dam') {
        descripcionCurso.innerHTML = `
            <h2>Curso de Desarrollo de Aplicaciones Multiplataforma (DAM)</h2>
            <p><strong>Formación en desarrollo de aplicaciones para múltiples plataformas</strong></p>
            <p>El curso de Desarrollo de Aplicaciones Multiplataforma (DAM) está diseñado para capacitar a los estudiantes en la creación de aplicaciones que funcionan en múltiples sistemas operativos y dispositivos. Los temas incluyen el desarrollo de aplicaciones móviles y de escritorio, así como la integración de bases de datos y la creación de interfaces de usuario atractivas y funcionales. Los estudiantes aprenderán lenguajes de programación como Java y Kotlin, y trabajarán con frameworks para el desarrollo de apps multiplataforma.</p>
            <p>Este curso es perfecto para aquellos interesados en desarrollar aplicaciones que funcionen tanto en dispositivos móviles como en escritorios, con un enfoque en la integración multiplataforma.</p>
        `;
    } else if (curso === 'asir') {
        descripcionCurso.innerHTML = `
            <h2>Curso de Administración de Sistemas Informáticos en Red (ASIR)</h2>
            <p><strong>Formación en administración de sistemas y redes informáticas</strong></p>
            <p>El curso de Administración de Sistemas Informáticos en Red (ASIR) está diseñado para capacitar a los estudiantes en el mantenimiento y gestión de sistemas informáticos y redes. En este curso, se cubren temas como la administración de servidores, redes locales y sistemas operativos, así como la seguridad informática y el manejo de infraestructuras tecnológicas.</p>
            <p>Este curso es ideal para quienes desean ser especialistas en la gestión y mantenimiento de sistemas informáticos, garantizando el funcionamiento eficiente y seguro de redes y servidores en entornos profesionales.</p>
        `;
    } else if (curso === 'smr') {
        descripcionCurso.innerHTML = `
            <h2>Curso de Sistemas Microinformáticos y Redes (SMR)</h2>
            <p><strong>Formación en montaje y mantenimiento de sistemas y redes</strong></p>
            <p>El curso de Sistemas Microinformáticos y Redes (SMR) se enfoca en la instalación, configuración y mantenimiento de equipos informáticos y redes de computadoras. A lo largo del curso, los estudiantes aprenderán sobre el montaje de PC, la instalación de sistemas operativos y el manejo de redes de computadoras. Además, se abordarán temas como la seguridad informática y la resolución de problemas técnicos.</p>
            <p>Este curso es ideal para quienes buscan adquirir habilidades prácticas en el mantenimiento de equipos y redes informáticas, con una fuerte orientación al diagnóstico y resolución de problemas.</p>
        `;
    }
}



// Función para redirigir a la página de horarios
function irHorario() {
    window.location.href = 'enlaces/Horario.html'; // Cambia a la URL de tu página de horarios
}

// Función para redirigir a la página de asignaturas
function irAsignaturas() {
    window.location.href = 'enlaces/Asignaturas.html'; // Cambia a la URL de tu página de asignaturas
}

// Función para redirigir a la página de cursos
function irCurso() {
    window.location.href = 'enlaces/Curso.html'; // Cambia a la URL de tu página de cursos
}