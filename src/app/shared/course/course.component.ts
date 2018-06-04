import { Component, Input } from "@angular/core";
import { CourseModel } from './course.model';
@Component({
    selector: 'course-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
})

export class CourseComponent {
    @Input() data: CourseModel;
    
    ngOnInit() {
    }

}