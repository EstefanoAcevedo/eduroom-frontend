import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CareerInterface } from '../../../core/models/careers/career-interface';
import { SubjectsInterface } from '../../../core/models/subjects/subjects-interface';
import { CareersService } from '../../../core/services/careers/careers-service';
import { SubjectsService } from '../../../core/services/subjects/subjects-service';

@Component({
  selector: 'app-subjects',
  imports: [ReactiveFormsModule],
  templateUrl: './subjects.html',
  styleUrl: './subjects.css'
})
export class Subjects {

  private formBuilder = inject(FormBuilder);
  private careersService = inject(CareersService);
  private subjectsService = inject(SubjectsService);

  ngOnInit() {
    this.getCareersWithSubjects();
  }

  isError: boolean = false;
  isLoading: boolean = true;
  isCareerMode: boolean = true;
  careers: CareerInterface[] = [];
  subjects: SubjectsInterface [] = [];

    /* Formulario de asignaturas */
  subjectForm = this.formBuilder.group({
    career: ['0', Validators.compose([Validators.required, Validators.min(1)])],
  })

  getCareersWithSubjects() {
    this.isLoading = true;
    this.careersService.getCareersWithSubjects().subscribe({
      next: (response => {
        this.careers = response;
        this.isLoading = false;
      }),
      error: (error => {
        console.error('Error al obtener las carreras', error)
        this.isLoading = false;
        this.isError = true;
      })
    })
  }

  getSubjectsByCareerIndex(index: number) {
    this.isCareerMode = false;
    this.subjects = this.careers[index].subjects || [];
  }

}

