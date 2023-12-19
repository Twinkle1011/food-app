import { useRouteError } from "react-router-dom";
import { ErrorResponse } from "react-router-dom";

const Error: React.FC = () => {
  const err = useRouteError() as ErrorResponse;
  console.log(err);
  return (
    <div>
      <h1>Error</h1>
      <h1>
        {err.status}:{err.statusText}
      </h1>
    </div>
  );
};
export default Error;
