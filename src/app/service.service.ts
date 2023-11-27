import { Injectable } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private loginService : LoginService) { 
    
  }
}
