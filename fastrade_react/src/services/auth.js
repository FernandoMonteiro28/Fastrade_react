// Define a constante usuarioAutenticado
// que verifica se há um token no localStorage
export const usuarioAutenticado = () => localStorage.getItem('usuario-fastrade') !== null

// Define a constante parseJwt
<<<<<<< HEAD
export const parseJwt = () => {
=======
export const parseJwt  = () => {
>>>>>>> 459942d8808b1ba2efd9e3609a989951aa4bf142
    // Define a variável base64 que recebe o payload do token
    var base64 = localStorage.getItem('usuario-fastrade').split('.')[1]

    // Retorna o payload convertido de base64 para string e de string para JSON
    return JSON.parse(window.atob(base64))
}