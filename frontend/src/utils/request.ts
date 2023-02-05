// .ts não são componentes simplesmente são scripts, componentes terminam com .tsx (isso quando o projeto é baseado em Typescript)

/** Operador de coalescência nula (??):
 *  
 *  \-> É um operador lógico que retorna o seu operando 
 *      do lado direito quando o seu operador do lado 
 *      esquerdo é null ou undefined. Caso contrário, 
 *      ele retorna o seu operando do lado esquerdo.
 *  
 */

// import.meta.env.VITE_BACKEND_URL -> definição de variavel de ambiente

export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";