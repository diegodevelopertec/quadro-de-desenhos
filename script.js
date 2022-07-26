let currentColor='black'
let canDraw=false
let mouseX
let mouseY
document.querySelectorAll('.colorArea .color').forEach(item=>{
    item.addEventListener('click',colorClickEvent)
})


let screen=document.querySelector('#tela')
let cxt=screen.getContext('2d')



screen.addEventListener('mousedown',mouseDownEvent)
screen.addEventListener('mousemove',mouseMoveEvent)
screen.addEventListener('mouseup',mouseUpEvent)
document.querySelector('.clear').addEventListener('click',clearScreen)


function colorClickEvent(e){

    let color=e.target.getAttribute('data-color')
    currentColor=color

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')

}

function mouseDownEvent(e){
    canDraw=true
     mouseX=e.pageX - screen.offsetLeft
   mouseY=e.pageY - screen.offsetTop

}

function mouseUpEvent(){
    canDraw=false

}

function mouseMoveEvent(e){

    if(canDraw){
            draw(e.pageX,e.pageY)


    }
    

}

function draw(x,y){

        let pointX=x-screen.offsetLeft
        let pointY=y-screen.offsetTop

        cxt.beginPath()
        cxt.lineWidth=5
        cxt.lineJoin='round'
        cxt.moveTo(mouseX,mouseY)
        cxt.lineTo(pointX,pointY)
        cxt.closePath()
        cxt.strokeStyle=currentColor
        cxt.stroke()

        mouseX=pointX
        mouseY=pointY
}

function clearScreen(){
    cxt.setTransform(1,0,0,1,0,0)
    cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height)


}