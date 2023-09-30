const rumus = require('./rumus');

const sisi= 5;
const panjang = 6;
const lebar= 4;

const luasPersegi = rumus.luasPersegi(sisi);
const kelilingPersegi = rumus.kelilingPersegi(sisi);

const luasPersegiPanjang = rumus.luasPersegiPanjang(panjang, lebar);
const kelilingPersegiPanjang = rumus.kelilingPersegiPanjang(panjang, lebar);

console.log(`Luas Persegi: ${luasPersegi}`);
console.log(`Keliling Persegi: ${kelilingPersegi}`);
console.log(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);