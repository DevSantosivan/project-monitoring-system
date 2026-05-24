import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  tab: string = 'overview';

  project: any;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');

    // 🔥 SAMPLE DATA (palitan mo later ng API / service)
    const projects = [
      {
        id: '25EB0001',
        contractName: 'Road Rehab Project',
        contractor: 'RNV Construction',
        engineer: 'J. Marcial',
        coordinator: 'Pam',
        progress: 80,
        status: 'ON PROCESS',
        targetDate: 'May 18, 2026',
        startDate: 'Jan 10, 2026',
        delayReason: 'Weather delay',
        issues: [
          { title: 'Material delay', severity: 'medium', date: '2026-05-20' },
          { title: 'Site access issue', severity: 'high', date: '2026-05-22' },
        ],
        documents: [
          { name: 'Blueprint.pdf', size: '2MB' },
          { name: 'Design.docx', size: '1MB' },
        ],
        history: [
          { progress: 20, date: '2026-02-01', note: 'Started project' },
          { progress: 50, date: '2026-04-01', note: 'Foundation done' },
          { progress: 80, date: '2026-05-10', note: 'Ongoing works' },
        ],
      },
    ];

    this.project = projects.find((p) => p.id === id);
  }

  goBack() {
    history.back();
  }
}
