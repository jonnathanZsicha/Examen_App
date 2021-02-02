import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/model/libro';
import { LibroServiceService } from 'src/app/services/libro-service.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.page.html',
  styleUrls: ['./crear-libro.page.scss'],
})
export class CrearLibroPage implements OnInit {

  libro : Libro = new  Libro();
  imgURL: string;

  constructor(private route: ActivatedRoute, private router: Router,
    public libroService: LibroServiceService) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.libro,);
    this.libroService.saveLibro(this.libro);

  }

}
