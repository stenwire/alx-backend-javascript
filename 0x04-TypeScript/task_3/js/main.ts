/// <reference path="./crud.d.ts"

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";
import { insertRow } from "./crud";

let row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
}

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);