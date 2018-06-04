
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'hello-world',
  template: `
    <h1>Hello World {{name ? toUpperCase() : 'noname'}}</h1>
    <input type="text" id="input" #inputName/>
    <button (click)="onClick($event)" [value]="name">Click</button>
    <!-- Obligatorio utilizar $event -->
  `,
})

export class Hola implements OnInit {

    @Input() name = 'Ra';
    // @Input() address =  {
    //     city: 'ag',
    //     cp: '40003'
    // }

    @Output() changeName:EventEmitter<string> = new EventEmitter();

    
    @ViewChild('inputName') input;
    

    toUpperCase() {
      return this.name.toUpperCase();
    }
  
    ngOnInit() {
    }

    onClick(event: MouseEvent, type) {
        // this.changeName().emit(this.input.);
    }
  
  }
  