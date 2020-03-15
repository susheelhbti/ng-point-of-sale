import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  login(username: string, password: string) {
    if (username === '' && password === '1') {
      this.router.navigate(['dashboard'])
    } else {
      this.router.navigate(['login'])
    }
  }
}
