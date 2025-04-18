const theme = localStorage.getItem("toolpad-mode");
export { theme };
export { default as ChatBot } from "./pages/ChatBot/chatBot.tsx";
export { default as Dashboard } from "./pages/Dashboard";
export { default as App } from "./App.tsx";
export { default as ChattingPage } from "./pages/ChatBot/chattingPage.tsx";
export { default as InputArea } from "./pages/ChatBot/components/inputArea.tsx";
export { default as questionArea } from "./pages/ChatBot/components/questionArea.tsx";
export { default as responseArea } from "./pages/ChatBot/components/responseArea.tsx";
export { default as Chats } from "./pages/ChatBot/Chats.tsx";
export { default as Login } from "./pages/Auth/Login.tsx";
export { default as Logout } from "./pages/Auth/Logout.tsx";
export { default as Register } from "./pages/Auth/Register.tsx";
export { default as CyberNews } from "./pages/CyberNews.tsx";
export { default as UserProfile } from "./pages/ChatBot/UserProfile.tsx";
