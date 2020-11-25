import { Action } from '@ngrx/store';



export const start_loading = " [UI] Start Loading "
export const stop_loading = " [UI] Stop Loading "


export class StartLoading implements Action {

  readonly type = start_loading
}
export class StopLoading implements Action {

  readonly type = stop_loading
}


export type UIActions = StartLoading | StopLoading;
