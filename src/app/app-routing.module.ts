import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributionDebateComponent } from './components/contribution-debate/contribution-debate.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DebateContentComponent } from './components/debate-content/debate-content.component';
import { DebateComponent } from './components/debate/debate.component';
import { NewDebateComponent } from './components/new-debate/new-debate.component';
import { PopularDebateComponent } from './components/popular-debate/popular-debate.component';
import { RecentDebateComponent } from './components/recent-debate/recent-debate.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path:'' , redirectTo:'/signIn', pathMatch:'full'},
  { path:'signIn', component:SignInComponent },
  { path:'signUp', component:SignUpComponent},
  { path:'debate', component:DebateComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'debateContent', component:DebateContentComponent },
  { path:'popularDebate', component:PopularDebateComponent },
  { path:'recentDebate', component:RecentDebateComponent },
  { path:'contributionDebate', component:ContributionDebateComponent },
  { path:'newDebate', component:NewDebateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
