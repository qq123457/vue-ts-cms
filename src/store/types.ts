import { ILoginState } from './login/types';
import { ISystemState } from './main/system/types';
export interface IRootState {
  name: string;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[];
  entireUsers: any[];
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
}

export type IStoreType = IRootState & IRootWithModule;
