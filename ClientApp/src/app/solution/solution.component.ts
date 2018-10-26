import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'solution',
  templateUrl: './solution.component.html',
})
export class SolutionComponent implements OnInit {
    tabs: Tab[];

    constructor(){
        
    }
    ngOnInit(): void {
        this.tabs = [] as Tab[];

        let sections = [] as Section[];
        sections.push(this.makeTab1Section());
        sections.push(this.makeTab1Section2());

        let tab2Sections = [] as Section[];
        tab2Sections.push(this.makeTab2Section());
        tab2Sections.push(this.makeTab2Section2());

        let tab1 = {name: "kontaktTab",sections: sections} as Tab;
        let tab2 = {name: "salgsTab", sections: tab2Sections} as Tab;

        this.tabs.push(tab1);
        this.tabs.push(tab2);
    }

    private makeTab1Section(): Section{
        let col1 = {name: "Org nummer"};
        let col2 = {name: "åpent fra"};
        let col3 = {name: "åpent til"};

        let section1_1_rows = [] as Row[];
        let section1_1_row_1 = {columns: [col1]};
        let section1_1_row_2 = {columns:[col2,col3]};

        section1_1_rows.push(section1_1_row_1);
        section1_1_rows.push(section1_1_row_2);

        return {name:"KontaktInformasjon",rows: section1_1_rows};
    }
    private makeTab1Section2(): Section{
        let col1 = {name: "postadresse"};
        let col2 = {name: "postnummer"};

        
        let section1_1_row_1 = {columns: [col1]};
        let section1_1_row_2 = {columns:[col2]};

        let section1_1_rows = [] as Row[];
        section1_1_rows.push(section1_1_row_1);
        section1_1_rows.push(section1_1_row_2);

        return {name:"Adresse",rows: section1_1_rows};
    }
    private makeTab2Section(): Section{
        let col1 = {name: "salg total"};
        let col2 = {name: "min salg"};
        let col3 = {name: "max salg"};

        let section1_1_rows = [] as Row[];
        let section1_1_row_1 = {columns: [col1]};
        let section1_1_row_2 = {columns:[col2,col3]};

        section1_1_rows.push(section1_1_row_1);
        section1_1_rows.push(section1_1_row_2);

        return {name:"Salgstall",rows: section1_1_rows};
    }
    private makeTab2Section2(): Section{
        let col1 = {name: "ukens selger"};
        let col2 = {name: "mnds selger"};

        
        let section1_1_row_1 = {columns: [col1]};
        let section1_1_row_2 = {columns:[col2]};

        let section1_1_rows = [] as Row[];
        section1_1_rows.push(section1_1_row_1);
        section1_1_rows.push(section1_1_row_2);

        return {name:"Datert salgsinformasjon",rows: section1_1_rows};
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
interface Tab{
    name: string;
    sections: Section[];
}
interface Section{
    name: string;
    rows: Row[];
}
interface Row{
    columns: Column[];
}
interface Column{
    name: string;
}