import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserInfoService } from 'src/app/shared/services/user-info.service';
import { Users } from 'src/app/shared/services/users.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  users: Observable<any>;
  userValue='';

  constructor(public authService: AuthService, private db: AngularFireDatabase) {
    this.users=db.list('users').valueChanges()
   }

   onSubmit(){
     this.db.list('users').push({content:this.userValue})
     console.log("onSubmit() called")
   }
  ngOnInit(): void {
    // this.userInfoService.getUser().subscribe(data=>{
    //   this.users=data.map(e=>{
    //     return {
    //       id:e.payload.doc.id,
    //       ...(e.payload.doc.data() as Record<string,unknown>)
    //     } as Users;
    //   })
    // });
  }

  // create(user:Users){
  //   this.userInfoService.createUser(user);
  // }
  // update(user:Users){
  //   this.userInfoService.updateUser(user);
  // }
  // delete(id:string){
  //   this.userInfoService.deleteUser(id)
  // }
}
