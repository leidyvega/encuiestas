import { Injectable } from '@angular/core';
import {

  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { Auth, getAuth, onAuthStateChanged } from '@angular/fire/auth';


import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  limit,
  orderBy,
  query,
  where,
  updateDoc,
} from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { Formulario } from './datos.interfaces';
import { LoginService } from './login.service';
@Injectable({
    providedIn: 'root',
})
export class encuestaService {
    userId: any;
    private formulariosCollection: AngularFirestoreCollection<Formulario>;
    usuarios: string;
    constructor(private firestore: Firestore, private auth: Auth, private loginService: LoginService,) {
        const auth2 = getAuth();
        onAuthStateChanged(auth2, (user) => {
          if (user) {
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.email;
            this.usuarios = uid;
    
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
      }
    
        addJob(formularios: Formulario) {
        formularios.userId = this.loginService.usuario;
        const cvprofileRef = collection(this.firestore, 'formularios');
        formularios.userId = this.auth.currentUser.uid;
        return addDoc(cvprofileRef, formularios);
      }
    
}

