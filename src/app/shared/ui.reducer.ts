import * as uiactions from './ui.actions'
export interface State{
  isloading:boolean;
}


const initialState:State = {
  isloading : false
};


export function uiRecucer(state = initialState,action:uiactions.UIActions){

switch(action.type){

  case uiactions.start_loading:
  return {
    isloading : true
  };
  case uiactions.stop_loading:
  return{
    isloading : false
  };
  default:{
    return state;
  };

}
}

export const getisLoading = (state:State) => state.isloading
