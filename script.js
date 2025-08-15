console.clear()
const s = document.querySelector(".sec")
const m = document.querySelector(".min")
const h = document.querySelector(".hour")
setInterval(() => {
    const now = new Date()
    const sec = now.getSeconds()
    const min = now.getMinutes()
    const hs = now.getHours()

    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6 + sec * 0.1}deg)`
    h.style.transform = `rotate(${hs * 30 + min * 0.5}deg)`
    console.log(now)

}, 1000)