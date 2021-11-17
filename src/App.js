import { ChatEngine} from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";
import LoginForm from './components/LoginForm';

import "./App.css";

const App = () => {
   if(!localStorage.getItem('username')) return <LoginForm />
   
   
    return (
        <ChatEngine
            height="100vh"
            projectID="
            c23b866f-9484-43be-80b3-52de2e314fb2"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')} 
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    )
};

export default App;