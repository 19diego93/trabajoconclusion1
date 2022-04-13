let autos = require("./autos/autos")

var venta = true 

let enVenta=[]

let ganancias=[]

let concesionaria = {  
   "buscarAuto"(serial){
      /*let car = this.autos.filter(coche=>(coche.patente == serial)
         return car
   });
   if (coche)
   */
         
   for (let i=0 ; i < this.autos.length ; i++ ){
            if (serial == this.autos[i].patente ){
               return(this.autos[i])               
            }
         }return(null)
     
   },
   "autos": autos,

   "venderAuto"(serial){
      
      if(this.buscarAuto(serial).vendido == true){
         return "no se puede vender"
      }else{
      this.buscarAuto(serial).vendido = venta
      return "vendido"
      }
   },
   "autosParaLaVenta"() {
   
      for( let i = 0; i < autos.length; i++){
         if (autos[i].vendido == false){
        enVenta.push(autos[i])
         } 
      }return enVenta
      
      /*
         let listar = this.autos.filter(function(auto) {
             auto.vendido == false
         })
         return listar;
      */
      
      /*let listar = this.autos.filter(function(vend){
      vend.vendido==false})
      return listar*/

   },
   
   "autosNuevos"(){
      let nuevos = autos.filter(auto=>(auto.km <100))
      return nuevos
         },

   "autos0KM"(){
     this.autosParaLaVenta()
     let ceros = enVenta.filter(i=>(i.km<100))
     return ceros    
   },

   "listaDeVentas"(){
            for (let i = 0;i<this.autos.length;i++){
         if(this.autos[i].vendido == true){
            ganancias.push(this.autos[i].precio)
         }
      }  return ganancias
   },

  "totalDeVentas"(){   
              let res= ganancias.reduce((acc, item)=>{
            return  acc = acc + item; 
          }, 0);  
         return res
   }
  }
 
console.log(concesionaria.autos0KM())

console.log(concesionaria.listaDeVentas())

/console.log(concesionaria.venderAuto("JJK116"))

console.log(concesionaria.venderAuto("APL123"))

console.log(concesionaria.listaDeVentas())

console.log(concesionaria.totalDeVentas())






