import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'al-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {


  public prefix = 'app';
  public dashboardPath = `${this.prefix}/dashboard`;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigateToDashboard(): void{
    this.router.navigate([this.dashboardPath]);
  }

}
