import './App.css';
import Login from './Components/Login';
import UseLocalStorage from './Hooks/UseLocalStorage';
import Dashboard from './Components/Dashboard';
import ContactContext from './Contexts/ContactContext';
import ConversationContext from './Contexts/ConversationContext';

function App() {
  const [userId, setId] = UseLocalStorage('id');
  const dashboard = (
    <ContactContext>
      <ConversationContext>
        <Dashboard id={userId} />
      </ConversationContext>
    </ContactContext>
  )
  return (
    userId ? dashboard : <Login setUserId={setId} />
  );
}

export default App;
