var circle=function(r){
this.radius=r;};

 
circle.prototype.area=function(){
return Math.PI*this.radius*this.radius;
}


var c=new circle(10);

alert(c.constructor);   
/*
Above alerts to the below:
Function(r){
This.radius=r;}
*/


alert(Object.getOwnPropertyNames(c));
/*
radius
*/

alert(Object.keys(c));
/*
radius
*/

