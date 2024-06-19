import UploadButton from "../ui/uploadButton/UploadButton";

interface GalleryProps {
  pictureLink: string;
  setPictureLink: (pictureLink: string) => void;
}

const Gallery = ({ pictureLink, setPictureLink }: GalleryProps) => {
  const newPictureLinkHandler = (pictureLink: string) => {
    setPictureLink(pictureLink);
  };
  return (
    <div className="gallery">
      <img className="min-w-card-photo-xl h-card-photo-xl rounded-sm" src={pictureLink} alt="product photo" />
      <UploadButton />
    </div>
  );
};

export default Gallery;
