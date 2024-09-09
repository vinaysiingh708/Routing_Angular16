import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  activeRoute: ActivatedRoute =inject(ActivatedRoute);
  course:any;
  router:Router = inject(Router);

  ngOnInit(): void {
    // this.activeRoute.data.subscribe((data) => {
    //   this.course = data
    // })

   // this.course=this.router.getCurrentNavigation().extras.state; // not working
   this.course= history.state

  }

}
