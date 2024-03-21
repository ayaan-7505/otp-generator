function displaydata(){
    let a=Math.floor(0+Math.random()*10)
    let b=Math.floor(0+Math.random()*10)
    let c=Math.floor(0+Math.random()*10)
    let d=Math.floor(0+Math.random()*10)
    document.getElementById("a").innerHTML=a
    document.getElementById("b").innerHTML=b
    document.getElementById("c").innerHTML=c
    document.getElementById("d").innerHTML=d
}

function cleardata(){
    document.getElementById("a").innerHTML=" "
    document.getElementById("b").innerHTML=" "
    document.getElementById("c").innerHTML=" "
    document.getElementById("d").innerHTML=" "
}

