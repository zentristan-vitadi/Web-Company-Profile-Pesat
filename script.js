// ambil semua tombol yang memiliki kelas "filter-btn"
// (All ,design grafis, desain 3d, fotografi)

// format queryselectorAll = dokumen.queryselcteorAll (.nama kelas);
const semua_tombol = document.querySelectorAll(".filter-btn");
const semua_gambar = document.querySelectorAll(".gambar");

// karna setiap button harus bisa di klik, dan menjalankan fungsi yang sama
// kita akan gunakan perulangan

semua_tombol.forEach((tombol_satuan) => {
    tombol_satuan.addEventListener("click", () => {
        // mengubah tampilan saat active
        // hapus class active dari semua button
        semua_tombol.forEach((btn) => btn.classList.remove("active"));

        // tambahkan class active ke tombol yang sedang active
        tombol_satuan.classList.add("active");

        // selanjutnya ambil kategori dari tombol yang di klik 
        // contoh: <button data-filter="fotografi"> ->  nilainya "fotografi"
        const filter = tombol_satuan.getAttribute("data-filter");

        semua_gambar.forEach((gambar_satuan) => {
            if(filter === "all" || gambar_satuan.classList.contains(filter)){
                gambar_satuan.style.display = "block";
            } else{
                gambar_satuan.style.display = "none";
            }
        });
    });
});

