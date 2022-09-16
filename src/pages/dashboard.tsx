import { NextPage } from "next";
import { Layout } from "src/component/Layout";
import { FortuneForm } from "src/component/FortuneForm";
import { Heatmap } from "src/component/Heatmap";

const Dashboard: NextPage = () => {
  return (
    <Layout title="dashboard">
      <FortuneForm />
      <Heatmap />
    </Layout>
  );
};

export default Dashboard;
