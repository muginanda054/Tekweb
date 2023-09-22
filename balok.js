function HitungBalok() {
    // Menggunakan id "inputVariable" sesuai dengan input yang ada di HTML
    const inputPanjangElement = document.getElementById("panjang");
    const inputLebarElement = document.getElementById("lebar");
    const inputTinggiElement = document.getElementById("tinggi"); 
    const hasilPerhitunganElement = document.getElementById("VolumeBalok");

    const panjang = parseFloat(inputPanjangElement.value);
    const lebar = parseFloat(inputLebarElement.value);
    const tinggi = parseFloat(inputTinggiElement.value);

        const volume = panjang * lebar * tinggi;
        hasilPerhitunganElement.innerText = `Volume Balok adalah ${volume}`;
    }   