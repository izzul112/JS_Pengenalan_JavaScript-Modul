// Operator Aritmatika
let a = 2, b = 5, c = "10"
console.log("a + b = " + (a + b));
console.log("a + c = " + (a + c));
console.log("a - b = " + (a - c));
console.log("a * b = " + (a * c));
console.log("b / a = " + (b / a));
console.log("b % a = " + (b % a));
console.log("b ** a = " + (b ** a));

// Operator Perbandingan
let a = 5, b = 10, c = "5"

console.log("a == c -> " + (a == c));
console.log("a === c -> " + (a === c));
console.log("a != c -> " + (a != c));
console.log("a !== c -> " + (a !== c));
console.log("a > b -> " + (a > b));
console.log("a >= b -> " + (a >= b));
console.log("a < b -> " + (a < b));
console.log("a <= b -> " + (a <= b));


// Percabangan
// Percabangan if
let tahun = 2020

if (tahun % 4 == 0) {
    console.log(tahun + " adalah tahun kabisat");
} else {
    console.log(tahun + "bukan tahun kabisat");
}

// Percabangan If Else
let tahun = 2020

if (tahun % 4 == 0) {
    console.log(tahun + " adalah tahun kabisat");
} else {
    console.log(tahun + "bukan tahun kabisat");
}

// Percabangan If-Else If-Else

let nilai = 80

if (nilai > 80) {
    console.log("Excellent");
} else if (nilai <= 80 && nilai > 70) {
    console.log("Good");
} else if (nilai <= 70 && nilai > 60) {
    console.log("Not Bad");
} else {
    console.log("So bad");
}

// looping (perulangan)
// For Loop

for (let index = 1; index <= 10; index++) {
    console.log("Perulangan ke-" + index);
}

// For/In Loop
let siswa = {
    nama: "Kusuma Seta",
    gender: "Wanita",
    jurusan: "RPL",
    usia: "300",
    alamat: "Ngantru"
}

for (key in siswa) {
    console.log(key);
}

// For/Of Loop
let presiden = ["Soekarno", "Soeharto", "Habibie", "Gus Dur", "Megawati", "SBY", "Jokowi"]
for (pres of presiden) {
    console.log(pres);
}

// While Loop
let laptop = ["Lenovo", "HP", "Acer", "Asus"]
let i = 0
while (laptop[i]) {
    console.log(laptop[i]);
    i++
}

// Do... While Loop
let gadget = ["Xiaomi", "Samsung", "Motorola", "Sony Ericson"]
let i = 0
do {
    console.log(gadget[i]);
    i++
} while (gadget[i])

// Fungsi

luasLingkaran = (r) => {
    return 3.14 * (r ** 2)
}
console.log("Luas Lingkaran dengan r = 10 adalah " + luasLingkaran(10));

// Class

class PersegiPanjang {
    constructor(p, l) {
        this.panjang = p
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

let tanah = new PersegiPanjang(10, 50)
console.log("Luas Tanah = " + tanah.luas());
console.log("Keliling Tanah = " + tanah.keliling());

// Inheritance / Pewarisan

class PersegiPanjang {
    constructor(p, l) {
        this.panjang = p
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

class Balok extends PersegiPanjang {
    constructor(p, l, t) {
        super(p, l)
        this.tinggi = t
    }

    luas = () => {
        return (2 * this.panjang * this.lebar) + (2 * this.panjang * this.tinggi) +
            (2 * this.tinggi * this.lebar)
    }

    volume = () => {
        return this.panjang * this.lebar * this.tinggi
    }
}

let lemari = new Balok(10, 5, 2)
console.log("Luas Lemari = " + lemari.luas());
console.log("Volume Lemari = " + lemari.volume());

// JSON

let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 }
]
console.log(JSON.stringify(barang));