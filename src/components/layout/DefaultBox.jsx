import classnames from "classnames";

export default function DefaultBox({ children, customClass }) {
  customClass =
    customClass || "flex flex-col items-center justify-center space-y-2";

  return (
    <div
      className={classnames(
        "p-3 bg-custom-500 border border-custom-450 rounded-lg",
        customClass
      )}
    >
      {children}
    </div>
  );
}
