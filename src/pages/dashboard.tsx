import { NextPage } from "next";
import { FortuneForm } from "src/component/FortuneForm";
import { FortuneList } from "src/component/FortuneList/FortuneList";
import { Layout } from "src/component/Layout";

const Dashboard: NextPage = () => {
  return (
    <Layout title="dashboard">
      <FortuneForm />
    </Layout>
  );
};

export default Dashboard;
