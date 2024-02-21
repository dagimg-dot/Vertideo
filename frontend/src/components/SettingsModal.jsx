import useOutsideClick from "../hooks/useOutSideClick";
import Switch from "./Switch";

const SettingsModal = ({ toggleModal, btnRef }) => {
  const settingRef = useOutsideClick(() => {
    toggleModal();
  }, btnRef);

  return (
    <div
      ref={settingRef}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#181f21] rounded-lg text-lg text-[#bbb] shadow-lg shadow-black w-3/4"
    >
      <div className="flex flex-col p-4">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Settings</h1>
        </div>
        <div className="flex flex-col gap-4 my-6">
          <div className="flex justify-between items-center bg-[#101115] p-4 rounded-lg">
            <span>Repeat video when it ends</span>
            <Switch />
          </div>
          <div className="flex justify-between items-center bg-[#101115] p-4 rounded-lg">
            <span>Dark Mode</span>
            <Switch isDarkModeSwitch = {true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
