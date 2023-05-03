import { Component } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '173146039572-9g0c7n3vjn3e06dqj15jokeiie78khd9.apps.googleusercontent.com' ,
  scope: 'openid profile email',
}

export interface UserInfo{
  info:{
    sub: string,
    email: string,
    name: string,
    picture: string
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginText = "Please login to Openkart using Google Account";

  constructor(private oAuthService: OAuthService){}

  onLogIn(){

    this.oAuthService.configure(oAuthConfig)
    this.oAuthService.loadDiscoveryDocument().then(
      ()=>{
        this.oAuthService.tryLoginImplicitFlow().then(
          ()=> {
            if (!this.oAuthService.hasValidAccessToken()){
              this.oAuthService.initLoginFlow()

            }else{
              this.oAuthService.loadUserProfile().then(
                (userProfile: UserInfo)=>{
                  this.loginText = 'Welcome Mr/Miss'+userProfile.info.name;
                }
              )
            }
          }
        )
      }
    )

  }


  onLogOut(){
    this.oAuthService.logOut();
  }
}
