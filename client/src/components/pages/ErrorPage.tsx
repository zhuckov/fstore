import { FC } from "react";
import { useRouteError } from "react-router-dom";
import PastaHutLogo from "/logo.svg";

const ErrorPage: FC = () => {
  const err: any = useRouteError();
  console.log(err);
  return (
    <div className="flex gap-2 flex-col justify-center items-center h-screen">
      <img className="h-40 w-40" src={PastaHutLogo} alt="PastaHut" />
      <h1 className="text-slate-700 text-4xl font-bold">{err.statusText}</h1>
    </div>
  );
};

export default ErrorPage;
