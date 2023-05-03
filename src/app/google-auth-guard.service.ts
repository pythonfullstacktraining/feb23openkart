import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";



@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private oAuthService: OAuthService, private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       if (this.oAuthService.hasValidAccessToken()){
        return true;
       }else{
        this.router.navigate(['/'])
        return false;
       }
    }


    
}