import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

    activeRoute: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
       this.activeRoute.fragment.subscribe((data)=>{
            console.log(data);
            this.JumpToSection(data);
       })
    }

    JumpToSection(section){
        document.getElementById(section).scrollIntoView({behavior: 'smooth'})
    }

}