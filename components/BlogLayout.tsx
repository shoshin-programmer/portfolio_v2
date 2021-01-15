import Header from "./Header";
import FooterSection from "../sections/FooterSection";
import Head from "next/head";

const BlogLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-light">{children}</div>
      <FooterSection />
    </>
  );
};

export default BlogLayout;
