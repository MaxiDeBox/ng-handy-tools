import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomDirectiveDirective } from "./directives/base-custom-directive/custom-directive.directive";
import {FormControl, FormsModule} from "@angular/forms";
import {PasswordValidatorDirective} from "./directives/validation-directive/password-validator.directive";
import {AutofocusDirective} from "./directives/autofocus-directive/autofocus.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, CustomDirectiveDirective, PasswordValidatorDirective, AutofocusDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-handy-tools';
  password = new FormControl('');
}
