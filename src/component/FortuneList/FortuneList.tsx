import { FC } from "react";
import { useQueryMyFortunes } from "src/lib/hook/useQueryFortunes";
import { Spinner } from "src/component/Spinner";
import { FortuneItem } from "src/component/FortuneItem";
import { Fortune } from "src/lib/type";

type Props = {
  fortunes?: Fortune[];
  status?: "loading" | "error" | "success" | "idle";
};

/** @package */
export const FortuneList: FC<Props> = (props) => {
  // const { data: fortunes, status } = useQueryMyFortunes();

  if (props.status === "loading") return <Spinner />;
  if (props.status === "error") return <p>{"Error"}</p>;

  return (
    <ul className="pl-0 mr-auto ml-auto w-full md:w-4/5 max-w-lg list-none">
      {props.fortunes?.map((fortune) => (
        <FortuneItem
          key={fortune.id}
          id={fortune.id}
          date={fortune.date}
          title={fortune.title}
          user_id={fortune.user_id}
        />
      ))}
    </ul>
  );
};
