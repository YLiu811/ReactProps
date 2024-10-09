function Popup(props) {
    const handleClick = props.onClose;
    return (
        <div>
            <div>{props.children}</div>
            <button onClick={handleClick}>Close</button>
        </div>
    )
}
export default Popup;