// Variabel input string
const words = "Nayla hamidatun Nafidha";

// Variabel untuk menyimpan hasil
let nonVocalLetters = ""; // Huruf selain vokal
let vocalLetters = ""; // Huruf vokal

// Definisi huruf alfabet dan vokal
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const vowels = "aiueoAIUEO";

// Iterasi melalui setiap karakter pada string
for (const char of words) {
  // Cek jika karakter adalah huruf
  if (alphabet.includes(char)) {
    if (vowels.includes(char)) {
      // Tambahkan ke huruf vokal jika termasuk vokal
      vocalLetters += char;
      vocalLetters++;
    } else {
      // Tambahkan ke huruf non-vokal jika bukan vokal
      nonVocalLetters += char;
      nonVocalLetters++;
    }
  }
}

// Menampilkan hasil ke konsol
console.log("Huruf selain vokal:", nonVocalLetters);
console.log("Huruf vokal:", vocalLetters);
