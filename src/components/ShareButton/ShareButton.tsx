import ShareIcon from "../icons/ShareIcon";
import "./ShareButton.css";

interface ShareButtonProps {
  onShareLink: () => void;
}

export const ShareButton = ({ onShareLink }: ShareButtonProps) => {
  return (
    <button className="share-button" onClick={onShareLink}>
      <ShareIcon />
      <span>поделиться ссылкой</span>
    </button>
  );
};

export default ShareButton;
