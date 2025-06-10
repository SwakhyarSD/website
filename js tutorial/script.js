const PI= 3.14159;
let radius;


document.getElementById(`button`).onclick= function(){
    radius= document.getElementById(`myInput`).value;
    radius= Number(radius);
    circumference=  (4/3)*PI * radius**3;
    document.getElementById(`heading`).textContent= `Volume of the sphere is : ${circumference}`;
}


