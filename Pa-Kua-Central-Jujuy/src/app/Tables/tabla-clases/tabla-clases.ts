import { Component } from '@angular/core';
import { Clases } from '../../models/clases/clases';
import { ClasesServices } from '../../services/clasesServices/clases-services';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla-clases',
  imports: [CommonModule],
  templateUrl: './tabla-clases.html',
  styleUrl: './tabla-clases.css',
})
export class TablaClases {
  clases!: Array<Clases>;
  constructor(private serviceClases: ClasesServices, private router:Router) {
    this.clases = new Array<Clases>();  
    this.listarClases();
  //  this.iniciarVariable();
  }
  iniciarVariable() {
    this.clases = new Array<Clases>();
  } 
  listarClases() {
    this.clases = this.serviceClases.getClases();
    console.log(this.clases);
  }
  registrarClase(){
    this.router.navigate(['registrarClases',"0"]); 
  }
  modificiarClase(id: string){
    this.router.navigate(['registrarClases',id]);   
  }

}
