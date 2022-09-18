import { FC } from "react";
import { useQueryFortunes } from "src/lib/hook/useQueryFortunes";
import { Spinner } from "src/component/Spinner";
import { FortuneItem } from "src/component/FortuneItem";

/** @package */
export const FortuneList: FC = () => {
  const { data: fortunes, status } = useQueryFortunes();
  if (status === "loading") return <Spinner />;
  if (status === "error") return <p>{"Error"}</p>;
  return (
    <ul className="my-2 w-full">
      {fortunes?.map((fortune) => (
        <FortuneItem
          key={fortune.id}
          id={fortune.id}
          date={fortune.date}
          title={fortune.title}
        />
      ))}
    </ul>
  );
};
