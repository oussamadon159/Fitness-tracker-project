import { ActionReducerMap,createFeatureSelector,createSelector } from '@ngrx/store'
 import * as fromUi from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducer';


export interface State{
  ui : fromUi.State;
  auth:fromAuth.State;
}

export const reducers:ActionReducerMap<State> = {
  ui: fromUi.uiRecucer,
  auth:fromAuth.authRecucer
}


export const getLoadingState = createFeatureSelector<fromUi.State>('ui');
export const getisLoading = createSelector(getLoadingState,fromUi.getisLoading);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getisAuth = createSelector(getAuthState,fromAuth.getisAuth);


