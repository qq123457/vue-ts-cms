export interface IProp {
  prop?: string;
  label: string;
  minWidth?: number;
  slotName?: string;
}

export interface ITable {
  tableData: any[];
  tableItems: IProp[];
}
