import PropTypes from 'prop-types'

function Popup(props) {
    return (
        <div>
            <div>{props.children}</div>
            <button onClick= { ()=> props.onClose} >{props.buttonText}</button>
        </div>
    )
}

Popup.propType = {
    onClose: PropTypes.func,
    buttonText: PropTypes.string
}
Popup.defaultProps = {
    onClose: () => {},
    buttonText: "Default"
}
export default Popup;