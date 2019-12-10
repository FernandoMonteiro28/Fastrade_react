// Define a constante usuarioAutenticado
// que verifica se há um token no localStorage
export const usuarioAutenticado = () => localStorage.getItem('usuario-fastrade') !== null

// Define a constante parseJwt
<<<<<<< HEAD
export const parseJwt = () => {
=======
export const parseJwt  = () => {
>>>>>>> e6158c1c608df95232a1fdf9b1597e1f1a6739ee
    // Define a variável base64 que recebe o payload do token
    var base64 = localStorage.getItem('usuario-fastrade').split('.')[1]

    // Retorna o payload convertido de base64 para string e de string para JSON
    return JSON.parse(window.atob(base64))
}