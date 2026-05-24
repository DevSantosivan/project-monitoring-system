import { Component } from '@angular/core';

import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { ChartCardComponent } from '../../shared/components/chart-card/chart-card.component';
import { TableComponent } from '../../shared/components/table/table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatCardComponent, ChartCardComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  stats = [
    {
      title: 'Total Projects',
      value: '24',
      icon: 'bx bx-folder',
    },

    {
      title: 'On Process',
      value: '12',
      icon: 'bx bx-loader-circle',
    },

    {
      title: 'Approved',
      value: '8',
      icon: 'bx bx-check-circle',
    },

    {
      title: 'Delayed',
      value: '4',
      icon: 'bx bx-error-circle',
    },
  ];

  projects = [
    {
      name: 'Project Alpha',
      status: 'Approved',
      owner: 'John Doe',
      progress: 100,
    },
    {
      name: 'Project Beta',
      status: 'On-Process',
      owner: 'Jane Smith',
      progress: 60,
    },
    {
      name: 'Project Gamma',
      status: 'Lacking Docs',
      owner: 'Mike Lee',
      progress: 30,
    },
  ];
}
