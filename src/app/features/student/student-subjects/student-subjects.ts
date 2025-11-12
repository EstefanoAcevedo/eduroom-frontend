import { Component, OnInit } from '@angular/core';
import { StudentSubjectView, SubjectApiService } from '../subjects.service';
import { MisMateriasComponent } from './mis-materias/mis-materias';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-subjects',
  standalone: true,
  imports: [MisMateriasComponent, CommonModule],
  templateUrl: './student-subjects.html',
  styleUrls: ['./student-subjects.css']
})
//export class StudentSubjects {
// subjects: any[] = [];

// constructor(private subjectsService: SubjectsService) {
//   this.subjects = this.subjectsService.getSubjects();
// }
//}

export class StudentSubjects implements OnInit {

  subjects: StudentSubjectView[] = [];
  isLoading = false;
  hasError = false;

  constructor(private subjectsService: SubjectApiService) { }

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
