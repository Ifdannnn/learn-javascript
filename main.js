let words = "Nayla hamidatun Nafidha";

let jumlahAlph = 0;
let jumlahVocal = 0;

for (let i = 0; i < words.length; i++) {
  // this for the alph
  let letter = "abcdefghijklmnopqrstuvwxyz";
  let letterUp = letter.toUpperCase();
  combineLetter = letter + letterUp;

  // this for the vocal
  let vocal = "aiueo";
  let vocalUp = vocal.toUpperCase();
  combineVocal = vocal + vocalUp;
  if (combineLetter.includes(words[i]) && !combineVocal.includes(words[i])) {
    jumlahAlph++;
  }
  if (combineVocal.includes(words[i])) {
    jumlahVocal++;
  }
}
console.log(jumlahAlph);
console.log(jumlahVocal);
