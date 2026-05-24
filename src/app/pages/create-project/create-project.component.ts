import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  imports: [FormsModule, ReactiveFormsModule],
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group({
      id: [`25EB${Math.floor(1000 + Math.random() * 9000)}`],
      contractName: ['', Validators.required],
      contractor: ['', Validators.required],
      engineer: ['', Validators.required],
      coordinator: ['', Validators.required],
      startDate: [new Date().toISOString().slice(0, 10), Validators.required],
      targetDate: ['', Validators.required],
      progress: [0, [Validators.min(0), Validators.max(100)]],
      delayReason: [''],
    });
  }

  goBack() {
    this.router.navigate(['/projects']);
  }
  submit() {
    if (this.form.invalid) return;

    const payload = {
      ...this.form.value,
      progress: Number(this.form.value.progress),
      delayReason: this.form.value.delayReason || undefined,
    };

    console.log('New Project:', payload);

    // TODO: call service here (Firebase / API)
    this.router.navigate(['/app/projects']);
  }
}
