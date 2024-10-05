import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { JobserviceService } from './jobservice.service';
import { Job } from './job';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobApplication';
  onSummit(f:NgForm){
    console.log(f.value);
  }

  constructor(private jobService: JobserviceService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const job: Job = {
        firstName: form.value.firstname,
        lastName: form.value.lastname,
        email: form.value.email,
        presentAddress: form.value.paddress,
        temporaryAddress: form.value.taddress,
        gender: form.value.gender,
        age: form.value.age,
        dOB: form.value.date,
        cgpa: form.value.cgpa,
        skills: this.getSelectedSkills(form)
      };

      this.jobService.saveJob(job).subscribe(response => {
        console.log('Job saved successfully:', response);
        form.reset(); // Reset form after successful submission
      }, error => {
        console.error('Error saving job:', error);
      });
    }
  }

  getSelectedSkills(form: NgForm): string[] {
    const skills: string[] = [];
    const checkboxes = form.controls['skills']; // Update this line
    for (let skill in checkboxes.value) {
      if (checkboxes.value[skill]) {
        skills.push(skill);
      }
    }
    return skills;
  }

}
