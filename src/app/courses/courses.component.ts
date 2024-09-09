import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  coursesService = inject(CourseService);
  AllCourses: Course[] ;
  activateRoute: ActivatedRoute = inject(ActivatedRoute);
  searchString: string;

  ngOnInit(){
   ///this.searchString = this.activateRoute.snapshot.queryParams['search'];
  // this.searchString = this.activateRoute.snapshot.queryParamMap.get('search');
  // console.log(this.searchString);

  this.activateRoute.queryParamMap.subscribe( (data)=> {
    this.searchString = data.get('search');

    if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
      //  this.coursesService.getAllcourses().subscribe((data: Course[]) => {
        //  this.AllCourses = data;
     // });

     this.AllCourses = this.activateRoute.snapshot.data['courses'];
   }else{
      this.AllCourses = this.coursesService.courses
                        .filter(x => x.title.toLocaleLowerCase()
                        .includes(this.searchString.toLocaleLowerCase()));
   }

  })

}

}
