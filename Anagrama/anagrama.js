/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const anagrama = (palabra1, palabra2) => {
    let str1 = palabra1.toLowerCase();
    let str2 = palabra2.toLowerCase();

    if(str1 === str2) return false;

    if(str1.lenght !== str2.lenght) return false;

    let ordenado1 = str1.split('').sort().join('');
    let ordenado2 = str2.split('').sort().join('');

    return ordenado1 === ordenado2;
}

console.log(anagrama('amor', 'roma'));
console.log(anagrama("Hola", "Halos"));
console.log(anagrama("amor", "amor"));
console.log(anagrama("gato", "toga"));
console.log(anagrama("arca", "cara"));




