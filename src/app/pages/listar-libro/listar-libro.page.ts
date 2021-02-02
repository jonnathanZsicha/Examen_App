import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LibroServiceService } from 'src/app/services/libro-service.service';

@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.page.html',
  styleUrls: ['./listar-libro.page.scss'],
})
export class ListarLibroPage implements OnInit {

  libros: Observable<any[]>;

  constructor(public libroService : LibroServiceService ) { 

    this.libros = this.libroService.getContactos();
  }


  ngOnInit() {

    
  }

}
