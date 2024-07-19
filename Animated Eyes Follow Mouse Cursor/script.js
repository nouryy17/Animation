let eye=document.querySelectorAll(".eye")
console.log(eye.dataset.top)
document.querySelector("body").addEventListener('mousemove',function (event) {
        const x=((event.clientX)*100)/(window.innerHeight)
        const y=((event.clientY)*100)/(window.innerHeight)
        // eye.dataset.top=y + "%"
        // eye.dataset.left=x + "%"
        eye.dataset.top=eye
        eye.dataset.left=` ${x} %`
        // eye.forEach(function (eye) {
        //     let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
        //     let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2)
        //     let radian = Math.atan2(event.pageX - x , event.pageY - y)
        //     let rot= (radian * (180 / Math.PI) * -1) +0
        //     eye.style.transform = "rotate("+ rot+"deg)" 
    
        // })
    
})   


