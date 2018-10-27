export interface IColumn{
    name?:string;   
}
export class Column implements IColumn {
    constructor(name?:string){};
}