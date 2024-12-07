import Chat from "../components/Chat";
import Intro from "../components/Intro";
import Settings from "../components/settings/Settings";
import ChatList from "../components/ChatList";
import ProfilePic from "../components/ProfilePic";

const HomePage = () => {
  return (
    <>
    <ProfilePic />
      <div className="w-screen h-screen flex bg-sky-50 text-slate-700">
        <div className="w-2/5 h-full">
          {/* <Settings /> */}
          <ChatList />
        </div>
        <div className="w-3/5 h-screen bg-[#e4eef3] text-slate-700">
          <Chat />
          {/* <Intro /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
