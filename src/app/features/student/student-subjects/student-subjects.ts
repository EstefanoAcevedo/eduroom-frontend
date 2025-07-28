import { Component } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { MisMateriasComponent } from './mis-materias/mis-materias';

@Component({
  selector: 'app-student-subjects',
  standalone: true,
  imports: [MisMateriasComponent],
  templateUrl: './student-subjects.html',
  styleUrls: ['./student-subjects.css']
})
export class StudentSubjects {
  subjects: any[] = [];

  constructor(private subjectsService: SubjectsService) {
    this.subjects = this.subjectsService.getSubjects();
  }
}
