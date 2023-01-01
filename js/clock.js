let getName = prompt("Adinizi Giriniz:")
let myName = document.querySelector("#myName")

if(getName <= 0) {
    alert('Boş giriş yaptınız')
    location.reload();
} else {
myName.innerHTML=`${getName}`
}

const DAYS = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
function showTime() {
    let dateTime = new Date()
    let d = DAYS[dateTime.getDay()]
    let h = dateTime.getHours()
    let m = dateTime.getMinutes()
    let s = dateTime.getSeconds()

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    document.querySelector("#myClock").innerHTML = `${h}: ${m}: ${s}  ${d}`
}

setInterval(showTime, 1000)
showTime()


