import { FC } from "react";
import { Layout } from "src/component/Layout";
import { FortuneList } from "src/component/FortuneList";

/** @pakage */
export const Log: FC = () => {
  return (
    <Layout>
      <FortuneList />
    </Layout>
  );
};
