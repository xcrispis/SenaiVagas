export const usuarioAutenticado = () => localStorage.getItem('token-senaivagas') !== null

// Define a constante parseJwt
export const parseJwt = () => {
    // Define a variável base64 que recebe o payload do token
    var base64 = localStorage.getItem('token-senaivagas')!.split('.')[1]

    // Retorna o payload convertido de base64 para string e de string para JSON

    return JSON.parse(window.atob(base64))
}