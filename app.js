let autos = require("./autos/autos")
let personas = require("./personas/personas")

var venta = true 

let enVenta=[]

let refiltrado = []

let ganancias=[]

let concesionaria = {  
   buscarAuto(serial){
     /* let car = this.autos.filter(coche=>(coche.patente == serial){
         
   });
   if (coche.patente != serial){
      return null
   }return car*/
   
         
   for (let i=0 ; i < this.autos.length ; i++ ){
            if (serial == this.autos[i].patente ){
               return(this.autos[i])               
            }
         }return(null)
     
   },
   autos: autos,

   venderAuto(serial){
      
      if(this.buscarAuto(serial).vendido == true){
         return "no se puede vender"
      }else{
      this.buscarAuto(serial).vendido = venta
      return "vendido"
      }
   },
   autosParaLaVenta() {
   
      let paravender = this.autos.filter(function(x){
         return x.vendido!==true
      });return paravender

    /*  
    for( let i = 0; i < this.autos.length; i++){
         if(this.autos[i] === false){
         enVenta.push(this.autos[i])
         } 
      }
      return enVenta*/
      
          /*this.autos.filter(function(auto) {
             if(auto.vendido === false){
                enVenta.push(auto)
                return enVenta
             }else{
                enVenta.filter(function(auto){
                   auto.vendido === false
                  refiltrado.push(auto)})
                }
         });return refiltrado*/
        
      
      /*autos.filter(function(auto){ (auto.vendido === false)
         enVenta.push(auto)
         
      });return enVenta*/
   },
         

   
   
   autosNuevos(){
      let nuevos = autos.filter(auto=>(auto.km <100))
      return nuevos
         },

   autos0KM(){
    concesionaria.autosParaLaVenta()
     let ceros = enVenta.filter(i=>(i.km<100))
     return ceros
       
   },

   listaDeVentas(){
            for (let i = 0;i<this.autos.length;i++){
         if(this.autos[i].vendido == true){
            ganancias.push(this.autos[i].precio)
         }
      }  return ganancias
   },

  totalDeVentas(){   
              let res= ganancias.reduce((acc, item)=>{
            return  acc = acc + item; 
          }, 0);  
         return res
   },

   puedeComprar:function(auto,persona){
      
      let pagoEnCuotas = (persona.capaciadDePagoEnCuotas)*(auto.cuotas);
      let pagar = (auto.precio);
      let puedePagar = (persona.capacidadDePagoTotal);

     if ((pagar < puedePagar)&&(pagar < pagoEnCuotas)){
        return true
     }else{ return false}       
        },

   autosQuePuedeComprar:function(x){
      let loCompra=[]
      this.autos.foreach(function(car){
         if (concesionaria.puedeComprar(car,x) === true){
loCompra.push(car)}
      });
       return loCompra
         
      


   },
   
}
  





//console.log(puedeComprar(1,0))



 
console.log(concesionaria.autosParaLaVenta())

//console.log(enVenta)

console.log(concesionaria.venderAuto("JJK116"))

console.log(concesionaria.autosParaLaVenta())

//console.log(concesionaria.venderAuto("APL123"))

//console.log(concesionaria.autos0KM())

//console.log(concesionaria.listaDeVentas())

//console.log(concesionaria.totalDeVentas())






