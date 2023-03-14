import { Injectable } from '@angular/core';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  User,
} from '@angular/fire/auth';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { addDoc } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { Formulario } from './datos.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private usersCollection: AngularFirestoreCollection<User>;
  private userId = new Subject<string>();
  formulariosCollection: any;

  setUserId(userId: string) {
    this.userId.next(userId);
  }

  get userId$() {
    return this.userId.asObservable();
  }
  usuario: any = {};
  public mostrar: boolean = false;

  constructor(private auth: Auth) {
    const auth2 = getAuth();
    onAuthStateChanged(auth2, (user) => {
      if (user) {
        const uid = user;
        this.usuario = uid;
        console.log('usuario', this.usuario);
      } else {
      }
    });
  }

  

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  
 

  async isAuthenticated(): Promise<boolean> {
    const user = await this.auth.currentUser;
    return user !== null;
  }

  async getCurrentUser(): Promise<User> {
    const user = await this.auth.currentUser;
    return user;
  }

  logout() {
    signOut(this.auth);
    localStorage.removeItem('isLoggedin');
  }
  isLoggedIn() {
    this.mostrar = false;
    const user = localStorage.getItem('email')!;
    if (user.length == 0) {
      this.mostrar = true;
    }
    return this.mostrar;
  }

  


}
