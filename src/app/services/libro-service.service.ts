import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Libro } from '../model/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroServiceService {

  constructor(public afs: AngularFirestore) { }

  saveLibro(libro: Libro){
    const refContacto = this.afs.collection("libros");
    if(libro.uid==null){
      libro.uid = this.afs.createId();
    }
      
    refContacto.doc(libro.uid).set(Object.assign({}, libro), { merge: true})
  }

  getContactos(): Observable<any[]>{
    return this.afs.collection("libros",).valueChanges();
  }


}
