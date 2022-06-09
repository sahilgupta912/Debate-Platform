import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { resolve } from 'dns';
import { rejects } from 'assert';
import { map, Observable } from 'rxjs';
import { async } from '@firebase/util';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  isLogged = false

  private userCollection: AngularFirestoreCollection<User> | undefined;
  userName: any
  contribution: any

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  })
  
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        this.isLogged = true
      this.userName=user.displayName
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
        this.isLogged = false
      }
    });
  }
  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['popularDebate']);
        });
        this.userCollection = this.afs.collection('users');
        this.userCollection.valueChanges().subscribe(user => {
          user.forEach(user => {
            if (user.email == email)
              this.userName = user.name
            this.contribution = user.contributions;
          });
        })
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign up with email/password
  SignUp(name:string,email: string, password: string) {
    // this.createUser(this.form.value)
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user)=> {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        // this.SendVerificationMail();
        // this.SetUserData(result.user);
        name=name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

        user.user?.updateProfile({
          displayName:name
        })

        window.alert("User has been created!!!" + name)
        this.userName = name;
        return this.afs.collection('users').doc(email).set({
          uid: user.user?.uid,
          name:name,
          email:email,
          password:password,
          contributions: 0
        }).then((user) => {

          this.router.navigate(['popularDebate'])
        })
      })
      .catch((error) => {
        window.alert(error.message);
      });

  }
  // createUser(data:any){
  //   return new Promise<any>((resolve, reject)=>{
  //     this.afs.collection("users").add(data).then(res=>{}, err=> reject(err));
  //   });
  // }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  async delete() {
    (await this.afAuth.currentUser)?.delete()
    const res = await this.afs.collection('users').doc(this.userData.email).delete().then(() => {
      this.SignOut()
      this.router.navigate(['debate'])
    })
    window.alert("user account has been deleted!")

  }
  // Reset Forggot password
  /*ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }*/
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null) ? true : false;
  }
  // Sign in with Google
  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
  //     if (res) {
  //       this.router.navigate(['dashboard']);
  //     }
  //   });
  // }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        // this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  /*SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      name:user.name,
      password:user.password
    };
    return userRef.set(userData, {
      merge: true,
    });
  }*/
  // Sign out
  SignOut() {
    // window.alert("User has been signed out")
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['signIn']);
    });
  }
}