import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Debate } from 'src/app/shared/services/debate';
import { DebateService } from 'src/app/shared/services/debate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-debate',
  templateUrl: './debate.component.html',
  styleUrls: ['./debate.component.css']
})
export class DebateComponent implements OnInit {
  

  constructor(public authService: AuthService,public debateService: DebateService, private router:Router) { }

  ngOnInit(): void {
  }
  debateContent(Debate:Debate){
    
    this.router.navigate(['debateContent'],{state:{debate:Debate} })
  }
}