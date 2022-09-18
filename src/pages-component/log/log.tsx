import { FC } from "react";
import { FortuneList } from "src/component/FortuneList";
import { Layout } from "src/component/Layout";

/** @pakage */
export const Log: FC = () => {
  return (
    <Layout title="log">
      <FortuneList />
    </Layout>
  );
};
