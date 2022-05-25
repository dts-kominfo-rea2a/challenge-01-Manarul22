// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    "name": "Andi",
    "age": 24
};
const secondUser = {
    "name":"Sutomo",
    "age": 25
};

const desc = "data user : \n";

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [desc, firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};