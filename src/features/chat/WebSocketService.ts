import { Client, Message, over, Frame } from "stompjs";
import SockJS from "sockjs-client";
import { store } from "@/app/store";
import { addMessage } from "@/features/chat/chatSlice";
import { ChatMessage } from "@/features/chat/chatSlice";

class WebSocketService {
  private stompClient: Client | null = null;

  connect() {
    const socket = new SockJS("http://localhost:8080/ws");
    this.stompClient = over(socket);

    const headers = {
      login: "",
      passcode: "",
    };

    this.stompClient.connect(headers, this.onConnect, this.onError);
  }

  private onConnect = () => {
    console.log("Connected to WebSocket");
    this.stompClient?.subscribe("/user/queue/messages", (message: Message) => {
      const chatNotification: ChatMessage = JSON.parse(message.body);
      console.log("Received message:", chatNotification);
      store.dispatch(addMessage(chatNotification));
    });
  };

  private onError = (error: string | Frame) => {
    console.error("WebSocket connection error:", error);
  };

  sendMessage(message: ChatMessage) {
    if (this.stompClient && this.stompClient.connected) {
      console.log("Sending message:", message);
      this.stompClient.send("/app/chat", {}, JSON.stringify(message));
    } else {
      console.error("Cannot send message, WebSocket is not connected");
    }
  }
}

const webSocketService = new WebSocketService();
export default webSocketService;
