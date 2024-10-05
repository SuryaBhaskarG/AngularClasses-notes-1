import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Job } from './job';
import { JobService } from './job.service'; // Add this line

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JobUi';
  selectedSkills: string[] = [];

  constructor(private jobService: JobService) {}

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
        skills: this.selectedSkills
      };

      this.jobService.saveJob(job).subscribe(response => {
        console.log('Job saved successfully:', response);
        form.reset(); // Reset form after successful submission
        this.selectedSkills = []; // Reset selected skills
      }, error => {
        console.error('Error saving job:', error);
      });
    }
  }

  onSkillChange(skill: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedSkills.push(skill);
    } else {
      this.selectedSkills = this.selectedSkills.filter(s => s !== skill);
    }
  }

  isSkillSelected(skill: string): boolean {
    return this.selectedSkills.includes(skill);
  }
}
