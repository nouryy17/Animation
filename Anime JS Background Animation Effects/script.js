let containner=document.querySelector(".containner")
for (let i = 0; i <=100; i++) {
   let blocks =document.createElement("div")
   blocks.classList.add("block")
   containner.appendChild(blocks)
}
function animBlocks() {
    anime({
        targets:".block",
        translateX:function () {
            return anime.random(-700,700);
        },
        translateY:function () {
            return anime.random(-700,700);
        },
        scale:function () {
            return anime.random(1,5);
        },
        easing:"linear",
        duration:3000,
       delay: anime.stagger(10),
       complete: animBlocks,



    })
}
animBlocks()