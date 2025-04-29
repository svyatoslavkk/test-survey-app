import "./DontKnowButton.css";

interface DontKnowButtonProps {
  onClick: () => void;
}

export const DontKnowButton = ({ onClick }: DontKnowButtonProps) => {
  return (
    <button className="dont-know-button" onClick={onClick}>
      Затрудняюсь ответить / Не помню
    </button>
  );
};

export default DontKnowButton;
