import { Routes } from '@angular/router';

export const routes: Routes = [
  //   {
  //     path: '',
  //     loadComponent: () =>
  //       import('./pages/login/login.component').then((m) => m.LoginComponent),
  //   },

  {
    path: '',
    loadComponent: () =>
      import('./core/layout/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent,
      ),

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },

      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects.component').then(
            (m) => m.ProjectsComponent,
          ),
      },
      {
        path: 'projects/:id',
        loadComponent: () =>
          import('./pages/project-details/project-details.component').then(
            (m) => m.ProjectDetailsComponent,
          ),
      },

      {
        path: 'create-project',
        loadComponent: () =>
          import('./pages/create-project/create-project.component').then(
            (m) => m.CreateProjectComponent,
          ),
      },

      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/reports/reports.component').then(
            (m) => m.ReportsComponent,
          ),
      },
    ],
  },
];
