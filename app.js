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
   //todas las funciones que probe , para vender por ahora funciona correctamente.
      let paravender = this.autos.filter(x=> (x.vendido!==true));
      return paravender

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
      let nuevos = this.autos.filter(auto=>(auto.km <100))
      return nuevos
         },

   autos0KM(){
    
     let ceros = this.autosParaLaVenta().filter(i=>(i.km<100))
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
//siendo auto un numero indice del array autos, y persona un numero indice del array personas.
   puedeComprar:function(car,ser){
      let pagoEnCuotas = (personas[ser].capacidadDePagoEnCuotas)*(this.autos[car].cuotas);
      let pagar = (this.autos[car].precio);
      let puedePagar = (personas[ser].capacidadDePagoTotal);

        return ((pagar < puedePagar)&&(pagar < pagoEnCuotas))     
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
  /**const autos = require("./autos")

const concesionaria = {
    
    autos: autos,

    buscarAuto: function(serial){
        for(let i=0; i<autos.length; i++){
            if(autos[i].patente == serial){
                return autos[i]
            }
        }
    return null;
    },
    
    venderAuto(serial){
        let vender = this.buscarAuto(serial);
            if(vender.vendido == false){
                return vender.vendido = true;
            }
    },
    autosParaLaVenta(){
        const venta = autos.filter(function(x){
           return x.vendido != true
         })
        return venta
    },
    autosNuevos(){
        let ceros = this.autosParaLaVenta().filter(function(y){
           return y.km < 100          
            
        })
        return ceros
   

},
 listaDeVentas(){
        const vendidos = autos.filter(function(filtro){
            return filtro.vendido == true
        })
        let lista = [];
        vendidos.map(function(e){
            lista.push(e.precio)
        })
        return lista
    },
    
totalDeVentas(){
 
if (this.listaDeVentas == []){
   return 0
   }else{
      let suma = this.listaDeVentas().reduce(function(acc, item){
         return acc += item ;
      }, 0);
      return suma
   }
},
   
   puedeComprar(auto,persona){
      let pagoEnCuotas = (persona.capacidadDePagoEnCuotas)*(auto.cuotas);
      let pagar = (auto.precio);
      let puedePagar = (persona.capacidadDePagoTotal);

        return ((pagar < puedePagar)&&(pagar < pagoEnCuotas))    
        },

  
  

   autosQuePuedeComprar(persona){

      let aVender = concesionaria.autosParaLaVenta().filter(auto=> {
         return concesionaria.puedeComprar (auto, persona)
      })
      return aVender;
      
   },
   
} */


/*console.log(concesionaria.puedeComprar(1,0))
console.log(concesionaria.puedeComprar(1,1))
console.log(concesionaria.puedeComprar(0,2))*/


console.log(concesionaria.autos0KM())
console.log(concesionaria.autosParaLaVenta())

console.log(enVenta)

console.log(concesionaria.venderAuto("JJK116"))

console.log(concesionaria.autosParaLaVenta())

console.log(concesionaria.venderAuto("APL123"))

//console.log(concesionaria.autos0KM())

//console.log(concesionaria.listaDeVentas())

//console.log(concesionaria.totalDeVentas())






