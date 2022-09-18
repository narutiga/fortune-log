import { NextPage } from "next";
import { Dashboard } from "src/pages-component/dashboard";

const DashboardPage: NextPage = (props) => {
  return <Dashboard {...props} />;
};

export default DashboardPage;
