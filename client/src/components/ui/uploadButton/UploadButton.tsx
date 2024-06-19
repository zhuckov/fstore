const UploadButton = ({}) => {
  return (
    <input
      type="file"
      onChange={(event) => {
        console.log(event.target.files && event.target.files[0]);
      }}
    />
  );
};

export default UploadButton;
