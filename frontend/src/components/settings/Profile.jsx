import {
  FaArrowLeft,
  FaCheck,
  FaRegFolderOpen,
  FaRegTrashAlt,
} from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { IoCamera } from "react-icons/io5";
import { useAuthStore } from "../../store/auth.store";
import { useState } from "react";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const Profile = ({ isOpen, onClose }) => {
  const [showPhotoOptions, setShowPhotoOptions] = useState(false);
  const { authUser, showProfilePicModal, setProfilePicUrl, profilePicUrl, updateProfile, isUpdateProfilePic } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleShowProfilePic = () => {
    setProfilePicUrl(authUser.profilePic);
    
    
    showProfilePicModal();
  };

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    if (!imageFile) return;

    if(imageFile.size > 2005000) return toast.error("Max file size 2MB")

    const reader = new FileReader();

    reader.readAsDataURL(imageFile);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  console.log(authUser.profilePic)
  if (!isOpen) return null;
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-between p-5">
        <div className="flex items-center gap-5">
          <button onClick={onClose} className="p-2 rounded-full">
            <FaArrowLeft className="cursor-pointer" />
          </button>
          <h1 className="text-xl font-medium">Profile</h1>
        </div>
      </div>
      <div className="overflow-y-auto">
        <div className="w-full flex py-7 items-center justify-center bg-[#e4eef3]">
          <div className="relative">
            <img
              src={selectedImg || authUser.profilePic || "/avatar.png"}
              alt=""
              className="size-44 rounded-full"
            />
            <div className="relative">
              <button
                className="absolute bottom-0 right-0 p-2 rounded-full bg-sky-50 cursor-pointer"
                onClick={() => setShowPhotoOptions(!showPhotoOptions)}
              >
                <IoCamera className="text-3xl text-sky-600" />
              </button>
              {showPhotoOptions ? (
                <div className="absolute -right-36 top-1 space-y-2 py-3 bg-sky-50 shadow-md shadow-slate-400">
                  <button
                    className="flex gap-2 px-2"
                    onClick={handleShowProfilePic}
                  >
                    <GrView className="text-xl" />
                    <p>View photo</p>
                  </button>
                  <label className="flex gap-2 px-2 cursor-pointer">
                    <FaRegFolderOpen className="text-xl" />
                    <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  // disabled={isUpdatingProfile}
                />
                    <p>Upload photo</p>
                  </label>
                  <button className="flex gap-2 px-2 pt-2 border-t border-slate-400">
                    <FaRegTrashAlt className="text-xl" />
                    <p>Delete photo</p>
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="name">
          <form action="" className="flex flex-col p-5 px-7 gap-5">
            <label>
              <span className="font-medium text-sky-600">Your name</span>
            </label>
            <div>
              <input
                type="text"
                placeholder={authUser.name}
                className="w-11/12 placeholder:text-slate-700 bg-transparent outline-none"
              />
              <button>
                <FaCheck />
              </button>
            </div>
            <span className="text-xs text-slate-500">
              This is not your username or PIN. This name will be visible to
              your seechat contacts.
            </span>
          </form>
        </div>
        <div className="about">
          <form action="" className="flex flex-col p-5 px-7 gap-5">
            <label>
              <span className="font-medium text-sky-600">About</span>
            </label>
            <div>
              <input
                type="text"
                placeholder={authUser.about}
                className="w-11/12 placeholder:text-slate-700 bg-transparent outline-none"
              />
              <button>
                <FaCheck />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
