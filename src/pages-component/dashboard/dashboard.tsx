import { FC } from "react";
import { FortuneForm } from "src/component/FortuneForm";
import { Heatmap } from "src/component/Heatmap";
import { Layout } from "src/component/Layout";

/** @package */
export const Dashboard: FC = () => {
  return (
    <Layout title="fortune-log">
      <FortuneForm />
      <Heatmap />
    </Layout>
  );
};
