import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DebateService } from 'src/app/shared/services/debate.service';
import { Debate } from 'src/app/shared/services/debate';


@Component({
  selector: 'app-contribution-debate',
  templateUrl: './contribution-debate.component.html',
  styleUrls: ['./contribution-debate.component.css']
})
export class ContributionDebateComponent implements OnInit {

  constructor(public authService: AuthService,
    public debateService:DebateService,
    public router:Router) { }

  ngOnInit(): void {
  }

  debateContent(Debate:Debate){
    this.router.navigate(['debateContent'],{state:{debate:Debate}})
  }

}
