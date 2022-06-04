export interface IProp {
  prop?: string;
  label: string;
  minWidth?: number;
  slotName?: string;
}

export interface ITable {
  propList: IProp[];
  showIndexColumn: boolean;
  showSelectColumn: boolean;
  title: string;
}
