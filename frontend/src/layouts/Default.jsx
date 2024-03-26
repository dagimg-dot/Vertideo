import FooterMenu from "../components/FooterMenu";

const Default = ({ children }) => {
  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="flex-grow overflow-y-auto bg-white dark:bg-[#101115]">{children}</div>
      <FooterMenu />
    </div>
  );
};

export default Default;
