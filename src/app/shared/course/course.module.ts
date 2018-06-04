import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        CourseComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // MatCardModule,
        // MatButtonModule,
    ],
    exports: [CourseComponent]
})

export class CourseModule {

}