import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menus = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: 'bx bxs-dashboard',
    },

    {
      label: 'Projects',
      route: '/projects',
      icon: 'bx bx-folder',
    },

    {
      label: 'Create Project',
      route: '/create-project',
      icon: 'bx bx-plus-circle',
    },

    {
      label: 'Reports',
      route: '/reports',
      icon: 'bx bx-bar-chart-alt-2',
    },
  ];
}
