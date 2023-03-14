import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const authenticated = await this.loginService.isAuthenticated();
    if (!authenticated) {
      this.router.navigate(['/login']);
    }
    return authenticated;
  }
}
