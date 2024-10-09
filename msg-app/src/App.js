import Notification from './Notificaton';
import Popup from './Popup';
import './App.css';

function App() {
  function goToNextPage () {
    window.location.href = 'https://reactjs.org';
  }

  return (
    <div className="App">
      <Popup onClose={goToNextPage}>
        <Notification title = "Notice" message="This is the first urgent msg." severity = "urgent" />
      </Popup>
    </div>
  );
}

export default App;
