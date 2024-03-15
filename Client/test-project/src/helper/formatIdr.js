function formatIDR(amount) {
    // Menggunakan fungsi toLocaleString() untuk memformat angka menjadi format mata uang Rupiah
    return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

export default formatIDR