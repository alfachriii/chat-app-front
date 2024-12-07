import { IoClose } from "react-icons/io5";
import { useAuthStore } from "../store/auth.store";
import toast from "react-hot-toast";

const ProfilePic = () => {
  const {
    profilePicUrl,
    setProfilePicUrl,
    profilePicModal,
    closeProfilePicModal,
  } = useAuthStore();

  const handleClose = () => {
    setProfilePicUrl("");
    closeProfilePicModal();
  };
  if (profilePicModal && !profilePicUrl) return toast.error("No photo profile", { duration: 1000 });
  if (!profilePicModal) return null;
  return (
    <div className="absolute top-0 right-0 w-screen h-screen bg-sky-50 bg-opacity-90 flex flex-col z-50">
      {/* header */}
      <div className="w-full h-10 p-10 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src={profilePicUrl} alt="" className="size-12 rounded-full" />
          <h4 className="font-medium text-lg">al</h4>
        </div>
        <button className="p-2 rounded-full" onClick={handleClose}>
          <IoClose className="text-2xl" />
        </button>
      </div>
      <div className="w-full h-full flex justify-center">
        <img src={profilePicUrl} alt="" className="size-96 mt-10" />
      </div>
    </div>
  );
};

export default ProfilePic;
