import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Debate } from 'src/app/shared/services/debate';
import { DebateService } from 'src/app/shared/services/debate.service';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-debate-content',
  templateUrl: './debate-content.component.html',
  styleUrls: ['./debate-content.component.css']
})
export class DebateContentComponent implements OnInit {


  debate:any
  newAgree=''
  newDisAgree=''
  id:string=''
  agreeArr:{point:string, postedBy:string}[]=[]
  disagreeArr:{point:string,postedBy:string}[]=[]

  constructor(
    public authService:AuthService,
    public debateService:DebateService) { 

    }

  ngOnInit(): void {
    this.debate=history.state.debate
    this.id=this.debate.id
    this.agreeArr=this.debate.agree
    this.disagreeArr=this.debate.disagree

  }

  
}