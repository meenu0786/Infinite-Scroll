import { Action } from '@ngrx/store';

export class GetTrans implements Action {
    readonly type = ActionTypes.LoadItems;
    constructor(public payload: { cursor: string; limit: number }) { }
}

export class LoadTrans implements Action {
    readonly type = ActionTypes.LoadSuccess;

    constructor(public payload: []) { }
}

export enum ActionTypes {
    LoadItems = '[Transaction] Load items from server',
    LoadSuccess = '[Transaction] Load success'
}

export type ActionsUnion = LoadTrans | GetTrans;
