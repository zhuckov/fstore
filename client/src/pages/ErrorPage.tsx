import PastaHutLogo from "/logo.svg";
const ErrorPage = () => {
  return (
    <div className="flex gap-2 flex-col justify-center items-center ">
      <img className="h-40 w-40" src={PastaHutLogo} alt="PastaHut" />
      <h1 className="text-slate-700 text-4xl font-bold">Not Found</h1>
    </div>
  );
};

export default ErrorPage;
