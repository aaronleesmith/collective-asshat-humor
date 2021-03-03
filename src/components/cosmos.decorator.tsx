import clsx from "clsx";

const decorator = ({ children }: any) => (
  <div
    id="root"
    className={clsx([
      "min-h-screen",
      "flex",
      "flex-col",
      "container",
      "font-semibold",
    ])}
  >
    <div className={clsx(["font-bold"])}>{children}</div>
  </div>
);

export default decorator;
