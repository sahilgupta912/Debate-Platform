import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DebateComponent } from './components/debate/debate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatCardModule} from '@angular/material/card'
import {MatDividerModule} from '@angular/material/divider';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';
import { UserInfoService } from './shared/services/user-info.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebateContentComponent } from './components/debate-content/debate-content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PopularDebateComponent } from './components/popular-debate/popular-debate.component';
import { RecentDebateComponent } from './components/recent-debate/recent-debate.component';
import { ContributionDebateComponent } from './components/contribution-debate/contribution-debate.component';
import { NewDebateComponent } from './components/new-debate/new-debate.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    DebateComponent,
    DebateContentComponent,
    DashboardComponent,
    PopularDebateComponent,
    RecentDebateComponent,
    ContributionDebateComponent,
    NewDebateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
  ],
  providers: [AuthService,UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
