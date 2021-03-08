import clsx from "clsx";

const decorator = ({ children }: any) => (
  <div
    id="root"
    className={clsx([
      "p-4",
      "bg-black",
      "h-96"
    ])}
  >
    <div className={clsx(["font-bold"])}>{children}</div>
  </div>
);

export default decorator;
