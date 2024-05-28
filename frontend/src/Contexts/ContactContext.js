import React,{createContext, useContext} from 'react'
import UseLocalStorage from '../Hooks/UseLocalStorage';
const ContactContexts=createContext();

export function useContactContext(){
    return useContext(ContactContexts)
}

export default function ContactContext({children}) {

    const [contacts,setContacts]=UseLocalStorage('Contacts',[]);

    const createContext=(id,name)=>{
        setContacts((prevValue)=>{
            return [...prevValue,{id,name}]
        })
    }
  return (
    <ContactContexts.Provider value={{contacts,createContext}}>
        {children}
    </ContactContexts.Provider>
  )
}
