import './Notification.css';

function Notification (props) {
    // <Notification title = "Notice" message="This is the first msg." severity = "general" />    
    // <Notification title = "Notice" message="This is the first msg." severity = "important" />
    // <Notification title = "Notice" message="This is the first msg." severity = "urgent" />
    return (
        <div className = {props.severity}>
            <h2> {props.title} </h2>
            <p> {props.message} </p>
        </div>
    )
}

export default Notification