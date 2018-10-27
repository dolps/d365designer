import {IRow} from './row.model';

export interface ISection {
    name?: string;
    rows?: IRow[];
}

export class Section implements ISection{
    constructor(name?: string,rows?: IRow[]){}
}