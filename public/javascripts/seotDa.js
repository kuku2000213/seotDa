document.addEventListener("DOMContentLoaded", function () {
    start()
})

const paes = []

paes.push({
    path: "/images/pae/1_1.png",
    code: 11,
    number: 0
})
paes.push({
    path: "/images/pae/1_2.png",
    code: 12,
    number: 1
})
paes.push({
    path: "/images/pae/2_1.png",
    code: 21,
    number: 2
})
paes.push({
    path: "/images/pae/2_2.png",
    code: 22,
    number: 3
})
paes.push({
    path: "/images/pae/3_1.png",
    code: 31,
    number: 4
})
paes.push({
    path: "/images/pae/3_2.png",
    code: 32,
    number: 5
})
paes.push({
    path: "/images/pae/4_1.png",
    code: 41,
    number: 6
})
paes.push({
    path: "/images/pae/4_2.png",
    code: 42,
    number: 7
})
paes.push({
    path: "/images/pae/5_1.png",
    code: 51,
    number: 8
})
paes.push({
    path: "/images/pae/5_2.png",
    code: 52,
    number: 9
})
paes.push({
    path: "/images/pae/6_1.png",
    code: 61,
    number: 10
})
paes.push({
    path: "/images/pae/6_2.png",
    code: 62,
    number: 11
})
paes.push({
    path: "/images/pae/7_1.png",
    code: 71,
    number: 12
})
paes.push({
    path: "/images/pae/7_2.png",
    code: 72,
    number: 13
})
paes.push({
    path: "/images/pae/8_1.png",
    code: 81,
    number: 14
})
paes.push({
    path: "/images/pae/8_2.png",
    code: 82,
    number: 15
})
paes.push({
    path: "/images/pae/9_1.png",
    code: 91,
    number: 16
})
paes.push({
    path: "/images/pae/9_2.png",
    code: 92,
    number: 17
})
paes.push({
    path: "/images/pae/10_1.png",
    code: 101,
    number: 18
})
paes.push({
    path: "/images/pae/10_2.png",
    code: 102,
    number: 19
})

function start() {
    let paeBack1 = document.createElement("img")
    paeBack1.setAttribute("src", "/images/pae/back.png")
    paeBack1.setAttribute("class", "userPae")
    paeBack1.setAttribute("id", "hisPae1")

    let paeBack2 = document.createElement("img")
    paeBack2.setAttribute("src", "/images/pae/back.png")
    paeBack2.setAttribute("class", "userPae")
    paeBack2.setAttribute("id", "hisPae2")

    let myPae1 = document.createElement("img")
    myPae1.setAttribute("src", paes[0].path)
    myPae1.setAttribute("class", "userPae")
    myPae1.setAttribute("id", "myPae1")

    let myPae2 = document.createElement("img")
    myPae2.setAttribute("src", paes[7].path)
    myPae2.setAttribute("class", "userPae")
    myPae2.setAttribute("id", "myPae2")
    // firstPae.setAttribute("float", "left")
    // firstPae.setAttribute("margin", "50px")
    // firstPae.setAttribute("margin-left", "100px")

    document.getElementById('myPan').appendChild(myPae1)
    document.getElementById('myPan').appendChild(myPae2)

    document.getElementById('hisPan').appendChild(paeBack1)
    document.getElementById('hisPan').appendChild(paeBack2)
}

function call(){
    let hisPae1 = document.getElementById("hisPae1")
    let hisPae2 = document.getElementById("hisPae2")
    let myPae1 = document.getElementById("myPae1")
    let myPae2 = document.getElementById("myPae2")

    let realHisPae1 = document.createElement("img")
    let realHisPae2 = document.createElement("img")
    let realMyPae1 = document.createElement("img")
    let realMyPae2 = document.createElement("img")

    realHisPae1.setAttribute("src", paes[4].path)
    realHisPae1.setAttribute("class", "userPae")
    realHisPae1.setAttribute("id", "realHisPae1")

    realHisPae2.setAttribute("src", paes[5].path)
    realHisPae2.setAttribute("class", "userPae")
    realHisPae2.setAttribute("id", "realHisPae2")

    realMyPae1.setAttribute("src", paes[0].path)
    realMyPae1.setAttribute("class", "userPae")
    realMyPae1.setAttribute("id", "realMyPae1")

    realMyPae2.setAttribute("src", paes[7].path)
    realMyPae2.setAttribute("class", "userPae")
    realMyPae2.setAttribute("id", "realMyPae2")

    hisPae1.remove()
    hisPae2.remove()
    myPae1.remove()
    myPae2.remove()

    document.getElementById("realPan").appendChild(realHisPae1)
    document.getElementById("realPan").appendChild(realHisPae2)
    document.getElementById("realPan").appendChild(realMyPae1)
    document.getElementById("realPan").appendChild(realMyPae2)
}