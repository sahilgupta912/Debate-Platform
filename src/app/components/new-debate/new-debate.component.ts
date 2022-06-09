import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DebateService } from 'src/app/shared/services/debate.service';

@Component({
  selector: 'app-new-debate',
  templateUrl: './new-debate.component.html',
  styleUrls: ['./new-debate.component.css']
})
export class NewDebateComponent implements OnInit {

  options=[
    {name:"Tech",value:1},
    {name:"Nature",value:2},
    {name:"Politics",value:3},
    {name:"Entertainment",value:4},
    {name:"Education",value:5},
    {name:"Health",value:6},
    {name:"Life",value:7}
  ]
  category:string=''

  constructor(
    public authService:AuthService,
    public debateService:DebateService) { }

  ngOnInit(): void {
  }
  // selectChanger(event:any){
  //   this.category=event.target.value
  // }

  // createNewDebate(title:string, description:string){
  //   this.debateService.createDebate(title,description,this.category)
  // }

}
