import { Component } from '@angular/core';
import { IDeactiveComponent } from '../Services/authguard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactiveComponent {
    firstName: string ='';
    lastName: string ='';
    country: string ='usa';
    message: string ='';

    isSubmitted: boolean = false;

    OnSubmit(){
      this.isSubmitted = true;
    }

    canExit(){
          if( (this.firstName || this.lastName || this.message) && !this.isSubmitted){
            return confirm('You have unsaved changes.Do you want to navigate away?')
          }else{
            return true;
          }
    }
}
