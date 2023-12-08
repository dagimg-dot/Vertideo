import FooterMenu from "../components/FooterMenu"
const Default = ({ children }) => {
  return (
    <div>
      {children}
      <div className="fixed bottom-0 w-full">
        <FooterMenu />
      </div>
    </div>
  );
};

export default Default;
