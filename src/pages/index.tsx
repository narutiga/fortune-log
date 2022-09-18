import type { NextPage } from "next";
import { Auth } from "src/pages-component/index";

const AuthPage: NextPage = (props) => {
  return <Auth {...props} />;
};

export default AuthPage;
