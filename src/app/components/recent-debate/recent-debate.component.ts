import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DebateService } from 'src/app/shared/services/debate.service';
import { Debate } from 'src/app/shared/services/debate';

@Component({
  selector: 'app-recent-debate',
  templateUrl: './recent-debate.component.html',
  styleUrls: ['./recent-debate.component.css']
})
export class RecentDebateComponent implements OnInit {

  constructor(public authService: AuthService,public debateService: DebateService, private router:Router) { }

  ngOnInit(): void {
  }
  debateContent(Debate:Debate){
    
    this.router.navigate(['debateContent'],{state:{debate:Debate} })
  }
}
