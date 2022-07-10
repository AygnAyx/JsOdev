let userName = prompt("Adınız:")
myName.innerHTML += userName;
function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay()
    let day =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s + " " + day[d];
    setTimeout(showTime, 1000);//Fonksiyonu 1000ms de bir tekrar çağırıyor.
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // 10'dan küçük sayıların başına 0 koyuyor.
    return i;
  }