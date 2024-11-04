import "./ChatPage.css";


export default function ChatPage() {
    return (
        <div className="chat-page">
            <div id="messages"></div>
            <input type="text" id="message" placeholder="Digite sua mensagem"/>
            <button id="send">Enviar</button>
        </div>
    )
}