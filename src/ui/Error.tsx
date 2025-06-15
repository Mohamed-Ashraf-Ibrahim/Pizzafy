import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

type ErrorType = {
  message?: string;
  data?: string;
};

function NotFound() {
  const error = useRouteError();
  console.log(error);
  const typedError = error as ErrorType;
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{typedError.message || typedError.data}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
