function Popup(props) {
    return (
        <div>
            <div>{props.children}</div>
            <button onClick= { ()=> props.onClose} >Redirect</button>
        </div>
    )
}
export default Popup;