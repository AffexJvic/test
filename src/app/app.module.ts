import { AuthService } from './auth.service';
import { WindowRefService } from './windowref.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './navbar/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { ContentComponent } from './content/content.component';
import { CallbackComponent } from './callback/callback.component';

const appRoutes: Routes = [
  { path: 'callback', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    NavbarComponent,
    ContentComponent,
    CallbackComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // set to true for debugging purposes only
    ),
    HttpClientModule,  
  ],
  providers: [
    LoginService,
    WindowRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
