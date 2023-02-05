clockElement = document.querySelector('.clock');

//method setInterval digunakan untuk update waktu tiap detik 
setInterval(function(){

    // new Date untuk mendapatkan waktu sekarang
    const now = new Date();

    // getHours digunakan untuk mengambil data jam dari Date()
    const hours = now.getHours().toString().padStart(2, '0');
    
    // getMinutes digunakan untuk mengambil data menit dari Date()
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    // getSeconds digunakan untuk mengambil data detik dari Date()
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // time digunakan untuk membuat format jam dari variable yang telah dibuat
    const time = hours + " : " + minutes + " : " + seconds;

    clockElement.textContent = time;
}, 1000);