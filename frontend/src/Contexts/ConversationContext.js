import React, { createContext, useContext } from 'react'
import UseLocalStorage from '../Hooks/UseLocalStorage';
import { useContactContext } from './ContactContext';
const ConversationContexts = createContext();

export function useConversationContext() {
    return useContext(ConversationContexts)
}

export default function ConversationContext({ children }) {
    const { contacts } = useContactContext();

    const [Conversations, setConversations] = UseLocalStorage('Conversation', []);

    const createConversation = (recipients) => {
        setConversations(prevValue =>[...prevValue,{recipients,messages:[]}])
        }
    // const formattedConversations=Conversations.map((conversation)=>{
    //     var recipient=conversation.recipients.map(recipent=>{
    //         var contact=contacts.filter(contact=>contact.id===recipent);
    //         return {id:recipent,name:contact.name}
    //     })
    //     return {...Conversations,recipient}
    // })

    return (
        <ConversationContexts.Provider value={{ Conversations, createConversation }}>
            {children}
        </ConversationContexts.Provider>
    )
}