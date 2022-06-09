import { Injectable } from '@angular/core';
import { Debate } from 'src/app/shared/services/debate';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore } from '@google-cloud/firestore';
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class DebateService {

  debatesCollection:any
  recentDebates:Debate[]=[]
  popularDebates:Debate[]=[]
  debates:Debate[]=[]
  debateId=0

  debateForm= new FormGroup({
    title:new FormControl(''),
    description: new FormControl('')
  })
  id:string=''
  category:string=''
  // admin = require('firebase-admin')

  constructor(private afs:AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService:AuthService) { 

      this.debatesCollection=this.afs.collection('debates')

      this.debatesCollection.valueChanges().subscribe((debates: any[])=>{
        this.debates=debates
        this.popularDebates=debates.sort((a,b)=> (a.likes < b.likes)?1: ((b.likes < a.likes)?-1:0)).slice(0,6)
        this.recentDebates=debates.sort((a,b)=>( a.createdOn < b.createdOn )?1: ((b.createdOn < a.createdOn)?-1:0)).slice(0,6)
      })
    }

    selectChanger(event:any){
      this.category=event.target.value
    }

    createNewDebate(title:string, description:string){
      this.debateId++
      const todayDate=new Date()
      const col=this.afs.collection('debates').doc()
      
      .set({id:1,title:title, description:description, likes:0, contributions:0, 
        agree:[{point:'',postedBy:''}], disagree:[{point:'',postedBy:''}], 
      initiatedBy:this.authService.userName, category:this.category, createdOn:todayDate})
      .then((res)=>{
        this.afs.collection('debates').snapshotChanges().forEach((changes)=> {
          changes.map((a)=>{
            this.id=a.payload.doc.id;
          })
          this.afs.collection('debates').doc(this.id).update({id:this.id})
        });
        window.alert("New debate has been created!"+title)

    })
    

    }
    
    addAgree(point:string){
      
      let coll=this.afs.collection('recentDebates').doc(this.id)

      // coll.update({
      //   agree: this.firestore.FieldValue.arrayUnion({point:point,postedBy:this.authService.userName})
      // })
      coll.set(
        {  

        }
      )
      
      // let arrUnion=coll.update({
      //   // agree: firestore.FieldValue.arrayUnion({point:point, postedBy:this.authService.userName})
      // })
      console.log("new added point is:"+point)
    }
    addDisAgree(){
    }
    updateDebate(point:any){
    }
}
