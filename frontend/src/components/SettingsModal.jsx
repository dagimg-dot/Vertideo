import useOutsideClick from "../hooks/useOutSideClick";

const SettingsModal = ({ toggleModal, btnRef }) => {
  const settingRef = useOutsideClick(() => {
    toggleModal();
  }, btnRef);

  return (
    <div
      ref={settingRef}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-[#181f21] rounded-lg text-lg text-[#bbb] shadow-lg shadow-black"
    >
      hello
    </div>
  );
};

export default SettingsModal;
