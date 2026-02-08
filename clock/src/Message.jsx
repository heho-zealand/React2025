const Message = ({ messageText }) => { // messageText er en prop, som vi sender ind i komponenten
    return (
        <div className="Message">
            <h1>{messageText}</h1> 
        </div>
    );
}
/*
function Message({ messageText }) { // messageText er en prop, som vi sender ind i komponenten
    return (
        <div className="Message">
            <h1>{messageText}</h1> 
        </div>
    );
}
*/

export default Message;