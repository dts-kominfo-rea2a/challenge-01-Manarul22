// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: "Andi",
  gender: "Male",
  age: 24,
  email: "andi@gmail.com",
  favoriteColor: ["purple, black, blue"],
  isHavePet: true,
  education: [
    {
      name: "SD 01",
      city: "Jakarta",
      graduate: 2016,
    },
    {
      name: "SMP 02",
      city: "Jakarta",
      graduate: 2019,
    },
    {
      name: "SMA 03",
      city: "Tangerang",
      graduate: 2022,
    },
  ],
  favoriteRestaurant: ["Baso Pengkolan", "Baso Aci", "Mie Ayam Tawon"],
};
const secondUser = {
    name: "Sutomo",
    gender: "Male",
    age: 24,
    email: "sutomo@gmail.com",
    favoriteColor: ["magenta, ocean, lightblue"],
    isHavePet: true,
    education: [
      {
        name: "SD 01",
        city: "Jakarta",
        graduate: 2016,
      },
      {
        name: "SMP 02",
        city: "Jakarta",
        graduate: 2019,
      },
      {
        name: "SMA 03",
        city: "Tangerang",
        graduate: 2022,
      },
    ],
    favoriteRestaurant: ["Baso Ceu Onah", "Baso EMas", "Mie Ayam Kangkung"],
  };

const desc = "Data User :";

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [desc, firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
