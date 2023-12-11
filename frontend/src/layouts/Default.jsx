import FooterMenu from "../components/FooterMenu";

const Default = ({ children }) => {
  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="flex-grow">{children}</div>
      <FooterMenu />
    </div>
  );
};

export default Default;
