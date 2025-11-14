import { Component, inject, OnInit } from '@angular/core';
import { MisMateriasComponent } from './mis-materias/mis-materias';
import { CommonModule } from '@angular/common';
import { SubjectsService } from '../../../core/services/subjects/subjects-service';
import { StudentSubjectView } from '../../../core/services/subjects/student-subject-view';
@Component({
  selector: 'app-student-subjects',
  standalone: true,
  imports: [MisMateriasComponent, CommonModule],
  templateUrl: './student-subjects.html',
  styleUrls: ['./student-subjects.css']
})


export class StudentSubjects implements OnInit {

  private subjectsService = inject(SubjectsService);

  subjects: StudentSubjectView[] = [];
  isLoading = false;
  hasError = false;


  ngOnInit(): void {
    this.loadSubjects();
  }

  private loadSubjects(): void {
    this.isLoading = true;
    this.hasError = false;

    this.subjectsService.getMySubjects().subscribe({
      next: (subjects: StudentSubjectView[]) => {
        this.subjects = subjects;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

}
