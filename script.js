document.body.getElementsByTagName("footer")[0].classList.toggle("hidden")
document.getElementById("format").classList.toggle("hidden")
document.getElementById("blank1").classList.toggle("hidden")
document.getElementById("blank2").classList.toggle("hidden")
document.getElementById("blank3").classList.toggle("hidden")

let cvc
let mm
let yy
let namee
let number
let numlen






document.getElementById('cvcinp').addEventListener("keyup", function(){
    cvc = document.getElementById("backcardd")
    cvc.textContent = this.value;
    
})
document.getElementById('mminp').addEventListener("keyup", function(){
    mm = document.body.getElementsByTagName("span")[0]
    mm.textContent = this.value;
})
document.getElementById('yyinp').addEventListener("keyup", function(){
    yy = document.body.getElementsByTagName("span")[2]
    yy.textContent = this.value;
})
document.getElementById('nameinp').addEventListener("keyup", function(){
    namee = document.getElementById("frontname")
    namee.textContent = this.value.toUpperCase();
})

document.getElementById("numberinp").addEventListener("keyup", function(event){
    number = document.getElementById("frontcenter")
    let numberdisvalue = this.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ')
    number.textContent = numberdisvalue.trim()
    numlen = number.textContent.length;
})


document.body.getElementsByClassName("confirm")[0].addEventListener("click", function(){
    let happen = true;
    if(mm==0 || yy==0 || numlen !=19){
        document.getElementById("numberinp").classList.toggle("active")
        document.getElementById("yyinp").classList.toggle("active")
        document.getElementById("cvcinp").classList.toggle("active")

        document.getElementById("format").classList.toggle("hidden")
        document.getElementById("blank1").classList.toggle("hidden")
        document.getElementById("blank2").classList.toggle("hidden")
        document.getElementById("blank3").classList.toggle("hidden")
        happen = false
    }else{
        document.getElementById("numberinp").classList.remove("active")
        document.getElementById("yyinp").classList.remove("active")
        document.getElementById("cvcinp").classList.remove("active")

        // document.getElementById("format").classList.add("hidden")
        // document.getElementById("blank1").classList.add("hidden")
        // document.getElementById("blank2").classList.add("hidden")
        // document.getElementById("blank3").classList.add("hidden")

        // document.getElementById("format").classList.remove("hidden")
        // document.getElementById("blank1").classList.remove("hidden")
        // document.getElementById("blank2").classList.remove("hidden")
        // document.getElementById("blank3").classList.remove("hidden")

        happen = true;

    }

    if(happen == true){
        document.body.getElementsByTagName("main")[0].classList.add("hidden")
        document.body.getElementsByTagName("footer")[0].classList.remove("hidden")
    }

})

document.body.getElementsByClassName("confirm")[1].addEventListener("click", function(){
    document.body.getElementsByTagName("main")[0].classList.remove("hidden")
    document.body.getElementsByTagName("footer")[0].classList.add("hidden")
})

