let words = "Nayla hamidatun Nafidha";

let jumlahAlph = 0;
let jumlahVocal = 0;
let hurufAlph = "";
let hurufVocal = "";

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
    hurufAlph += words[i];
  }
  if (combineVocal.includes(words[i])) {
    jumlahVocal++;
    hurufVocal += words[i];
  }
}
console.log(jumlahAlph);
console.log(jumlahVocal);
console.log(hurufAlph);
console.log(hurufVocal);
