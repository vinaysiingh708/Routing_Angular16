import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCourses(){
    // when we naviagte using navigate and navigateByUrl by default the path is absolute path 
    //that is it will append parent or base url
    // ActivatedRoute provides relative path
    
    //this.router.navigate(['Course'],{relativeTo:this.activeRoute})
    //this.router.navigate(['Course']);
    this.router.navigateByUrl('Course');
  }
}
