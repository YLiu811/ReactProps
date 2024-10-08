import Notification from './Notificaton';
import Popup from './Popup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Popup>
        <Notification title = "Notice" message="This is the first general msg." severity = "general" />    
        <Notification title = "Notice" message="This is the important msg." severity = "important" />
        <Notification title = "Notice" message="This is the first urgent msg." severity = "urgent" />
      </Popup>
    </div>
  );
}

export default App;
