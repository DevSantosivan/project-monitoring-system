import { Component } from '@angular/core';
import { Project, ProjectStatus } from '../../models/project.model';
import { AppButtonComponent } from '../../shared/components/app-button/app-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// ❗ import mo ito (kung nasa lib ka)
function computeStatus(p: any): ProjectStatus {
  if (p.progress >= 100) return 'APPROVED';
  if (p.delayReason) return 'WITH ISSUES';
  if (p.progress >= 50) return 'ON PROCESS';
  return 'DELAYED';
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [AppButtonComponent, CommonModule, FormsModule],
})
export class ProjectsComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  search = '';
  filterStatus: ProjectStatus | 'ALL' = 'ALL';
  getStatusColor(status: string): string {
    switch (status) {
      case 'APPROVED':
        return 'status-approved';
      case 'ON PROCESS':
        return 'status-process';
      case 'WITH ISSUES':
        return 'status-lacking';
      case 'DELAYED':
        return 'status-delayed';
      default:
        return '';
    }
  }
  projects: Project[] = [
    {
      id: '25EB0001',
      contractName: 'Road Rehab Project',
      contractor: 'RNV Construction',
      engineer: 'J. Marcial',
      coordinator: 'Pam',
      progress: 80,
      status: 'ON PROCESS',
      targetDate: 'May 18, 2026',
      delayReason: '',
    },
    {
      id: '25EB0002',
      contractName: 'Bridge Construction',
      contractor: 'JHR Enterprises',
      engineer: 'K. Flores',
      coordinator: 'Kevin',
      progress: 100,
      status: 'APPROVED',
      targetDate: 'May 20, 2026',
    },
  ];

  // ✅ FILTER + SEARCH + COMPUTED STATUS
  get filteredProjects() {
    const q = this.search.toLowerCase();

    return this.projects
      .map((p) => ({
        ...p,
        status: computeStatus(p), // computed status override
      }))
      .filter((p) => {
        const matchesSearch =
          !q ||
          p.id.toLowerCase().includes(q) ||
          p.contractName.toLowerCase().includes(q) ||
          p.contractor.toLowerCase().includes(q);

        const matchesFilter =
          this.filterStatus === 'ALL' || p.status === this.filterStatus;

        return matchesSearch && matchesFilter;
      });
  }
  goToView(id: string) {
    this.router.navigate(['/projects', id]);
  }

  goToCreate() {
    this.router.navigate(['../create-project'], { relativeTo: this.route });
  }
  // optional stats (if gagamit ka ng stat cards)
  get approvedCount() {
    return this.filteredProjects.filter((p) => p.status === 'APPROVED').length;
  }

  get onProcessCount() {
    return this.filteredProjects.filter((p) => p.status === 'ON PROCESS')
      .length;
  }

  get lackingCount() {
    return this.filteredProjects.filter((p) => p.status === 'WITH ISSUES')
      .length;
  }
}
