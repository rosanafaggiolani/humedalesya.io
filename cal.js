let hora; 
hora = prompt ("Ingresa la hora por favor: ");

if (hora >=6 && hora<=12){
 alert("¡🙌Buenos días!");
   }else if (hora >=13 && hora <=18){
     alert("¡😃Buenas tardes!");

   }else {
     alert("¡🥱Buenas noches!");


   }let edad;
   edad = prompt ("Introduce tu edad");
   if (edad >=18){
       alert("Puedes entrar, eres mayor de edad.");
   } else {
       alert("Eres menor de edad, puedes entrar bajo tu responsabilidad")
   }

   alert("Comprando una remera con el logo ⚖ , colaboras con nuestra lucha")
   alert("Si vivis en San Nicolás o en un radio de 40 km no pagas envío")
   let codigo;
   codigo = prompt ("Ingresa 1 si vivis en San Nicolas o en un área de 40 km de lo contrario ingresa 2  ");
   if (codigo==1){
    alert("tu total a pagar es 1800, no pagas envio");
   }else {
   function calculaPrecioTotal(precio) {-
    var gastosEnvio = 800;
    var precioTotal = precio + gastosEnvio;
    alert("Pagas el envío, el total a pagar es: " + precioTotal);

  }
} 
    calculaPrecioTotal(1800);
    
    
    

