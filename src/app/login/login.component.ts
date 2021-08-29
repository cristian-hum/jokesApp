import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('init login component');
  }

  ngOnDestroy() {
    console.log('destroy login component');
  }

  onLoginBtnClick = () => {
    this.router.navigate(['/home']);
  };
}
