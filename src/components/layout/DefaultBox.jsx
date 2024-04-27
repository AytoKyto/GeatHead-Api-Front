import classnames from "classnames";

export default function DefaultBox({ children, customClass }) {
  customClass =
    customClass || "flex flex-col items-center justify-center space-y-2";

  return (
    <div
      className={classnames(
        "p-3 bg-slate-800 border border-slate-600 rounded-md",
        customClass
      )}
    >
      {children}
    </div>
  );
}
