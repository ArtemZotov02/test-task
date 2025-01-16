import { HeaderData } from "../components/common/header/Header.types";

interface ActionHeader {
  type: string;
  payload: HeaderData;
}

const defaultHeader: HeaderData = {
  logo: '',
  menu: [],
  login: '',
  registration: ''
}

export const set_header = 'set_header'
export const fetch_header = 'asyncSet_header'

export const headerDataState = (state = defaultHeader , action: ActionHeader):HeaderData => {
  switch (action.type) {
    case set_header: 
      return {...state, ...action.payload}
    default: 
      return state
  }
}

export const loadHeaderData = (payload:HeaderData) => ({type:set_header, payload})

export const fetchHeader = (url:string, method:(data: HeaderData) => ActionHeader) => ({
  type: fetch_header, 
  payload: {
    url,       
    method    
  }
});

