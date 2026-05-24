import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() columns: string[] = [];
  @Input() rows: any[] = [];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Approved':
        return 'status-approved';
      case 'On-Process':
        return 'status-process';
      case 'Lacking Docs':
        return 'status-lacking';
      default:
        return '';
    }
  }
}
