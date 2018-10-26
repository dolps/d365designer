import { Component } from '@angular/core';

@Component({
  selector: 'solution',
  templateUrl: './solution.component.html',
})
export class SolutionComponent {
    constructor(){

    }
}

interface Solution {
    name: string;
    cards: Card[];
  }

interface Card{
    name: string;
    sections: Section[];
}
interface Section{
    header: string;
}