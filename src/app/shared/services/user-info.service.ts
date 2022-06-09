import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {


  constructor(private firestore: AngularFirestore, public db:AngularFireDatabase) { }

  // getUser(){
  //   return this.firestore.collection('users').snapshotChanges();
  // }

  // createUser(user: Users){
  //   return this.firestore.collection('users').add(user);
  // }

  // updateUser(user:Users){
  //   delete user.id;
  //   this.firestore.doc('users/' + user.id).update(user);
  // }

  // deleteUser(userId:string)
  // {
  //   this.firestore.doc('users/'+ userId).delete();
  // }
}
