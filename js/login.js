/*------------------------------------------------------------------ */
/*----------------------LOGICA PARA EL LOGIN-------------------------*/
/*------------------------------------------------------------------ */


const USUARIO_FICTICIO = {
    email: "tenis",
    password: "123"
}

/*Comportamiento para ir al perfil de usuario */

const linkPerfil = document.getElementById('link-perfil');

if (linkPerfil) { // Buens práctica: verificar que el elemento exista en la página
    linkPerfil.addEventListener('click', (e) => {
        const estaLogueado = localStorage.getItem('sesionActiva') === 'true';

        /*Si no esta logueado va al login */
        if (!estaLogueado) {
            e.preventDefault();
            window.location.href = 'pages/user/login.html';
        }
    });
}


/*Comportamiento para iniciar sesion */
const formLogin = document.getElementById('form-login');
const inputEmail = document.getElementById('login-email');
const inputPassword = document.getElementById('login-password');

if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue


        const emailIngresado = inputEmail.value.trim();
        const passwordIngresado = inputPassword.value;

        if (emailIngresado === USUARIO_FICTICIO.email && passwordIngresado === USUARIO_FICTICIO.password) {

            //se guarda en la memoria del navegador que el usuario inició sesión
            localStorage.setItem('sesionActiva', 'true');
            localStorage.setItem('usuarioActual', JSON.stringify(USUARIO_FICTICIO));

            // se redirige a la pantalla de Perfil
            window.location.href = 'perfilUsuario.html';



        } else {

            alert("No existe");
        }
    });
}



/*Comportamiento para cerrar sesion */

const cerrarSesion = document.getElementById('cerrar-sesion');

if (cerrarSesion) {
    cerrarSesion.addEventListener('click', (e) => {

        e.preventDefault();
        localStorage.removeItem('sesionActiva');
        localStorage.removeItem('usuarioActual');
        window.location.href = '../../index.html';

    });
}