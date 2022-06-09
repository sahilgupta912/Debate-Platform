import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { DebateService } from './shared/services/debate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'debate';
  constructor(public authService: AuthService,
              public debateService:DebateService){}
}
