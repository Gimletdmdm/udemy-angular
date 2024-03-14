import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    test : Date = new Date();
    focus: any;
    focus1: any;
    constructor() { }

    ngOnInit() {}
}
