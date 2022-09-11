import { NextPage } from "next";
import { FortuneList } from "src/component/FortuneList/FortuneList";
import { Layout } from "src/component/Layout";

const Log: NextPage = () => {
  return (
    <Layout title="log">
      <FortuneList />
    </Layout>
  );
};

export default Log;
