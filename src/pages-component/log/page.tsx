import { FC } from "react";
import { Layout } from "src/component/Layout";
import { FortuneList } from "src/component/FortuneList";
import { useQueryFortunes } from "src/lib/hook/useQueryFortunes";

/** @pakage */
export const Log: FC = () => {
  const { data: fortunes, status } = useQueryFortunes();

  return (
    <Layout>
      <FortuneList fortunes={fortunes} status={status} />
    </Layout>
  );
};
