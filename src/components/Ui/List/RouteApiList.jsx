import DefaultBoxMotion from "../../layout/DefaultBoxMotion";

export default function RouteApiList({ data, setRoute, fetchRouteData }) {
  console.log("data", data);
  return (
    <div className="flex flex-col space-y-2">
      {data.map((item) => (
        <div
          key={item._id}
          onClick={() => {
            setRoute(item);
            fetchRouteData(item._id);
          }}
        >
          <DefaultBoxMotion customClass="cursor-pointer">
            <div className="flex items-center gap-x-3">
              <span className="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30">
                GET
              </span>
              <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
                {item.endpoint}
              </h3>
              <time
                dateTime={item.date_created}
                className="flex-none text-xs text-gray-500"
              >
                {new Date(item.date_created).toLocaleString("fr-FR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </time>
            </div>
            <p className="mt-3 truncate text-sm text-gray-500">
              <span className="text-gray-400">/{item._id}</span>
            </p>
          </DefaultBoxMotion>
        </div>
      ))}
    </div>
  );
}
