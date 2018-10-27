import {IColumn} from './column.model';
export interface IRow {
    name?: string;
    columns?: IColumn[];
}

export class Row implements IRow{
    constructor(name?: string,columns?: IColumn[]){}
}