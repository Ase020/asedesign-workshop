const Footer = () => {
  let now = new Date();
  const year = now.getFullYear();

  return (
    <footer>
      <div>©{year} aseDesign. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
