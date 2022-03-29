import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-factorial',
    templateUrl: './cuerpo.funcFactorial.html',
    styleUrls: ['./cuerpo.funcFactorial.css']
  })
  
  
  export class FactorialComp implements OnInit {
   numero : Number= 0
   resultado : Number = 0
   constructor(){}
  
  ngOnInit() {}
  
      Factorial(numero : Number) {
        let resultadofinal: Number = 1
        for(let i=1; i<=numero; i++){
            resultadofinal = Number(resultadofinal) * i
        }
          this.resultado = resultadofinal
      }
    }