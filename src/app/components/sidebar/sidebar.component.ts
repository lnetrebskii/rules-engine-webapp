import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/sources-list', title: 'Cameras',  icon: 'videocam', class: '' },
    { path: '/sensors-list', title: 'Traffic Lights',  icon: 'traffic', class: '' },
    { path: '/frontiers-list', title: 'Frontiers',  icon: 'directions_car', class: '' },
    { path: '/upgrade', title: 'Dashboard',  icon:'dashboard', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
