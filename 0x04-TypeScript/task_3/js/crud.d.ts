import {RowID, RowElement} from './interface'

export let insertRow: (row: RowElement) => RowID;
export let deleteRow: (rowid: RowID) => void;
export let updateRow: (rowid: RowID, row: RowElement) => RowID;
