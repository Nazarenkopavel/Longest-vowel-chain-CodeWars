/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
*/
function solve(s) {
  let reg = /[B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z]/gi;
  return s
    .replace(reg, " ")
    .split(" ")
    .map(el => el.length)
    .sort((a, b) => b - a)[0];
}
/*
   function solve(s){
    return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
   }
   */
console.log(solve("chrononhotonthuooaos")); // 5
console.log(solve("iiihoovaeaaaoougjyaw")); // 8
