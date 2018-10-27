import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-section',
  templateUrl: './section-edit.component.html',
})
export class SectionEditComponent {
    section: Section;
    constructor(public activeModal:NgbActiveModal){}
}
