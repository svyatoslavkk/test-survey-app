import "./ControlBlock.css";

interface ControlBlockProps {
  progress: number;
  isDisabled: boolean;
  isLastQuestion: boolean;
  onNext: () => void;
}

export const ControlBlock = ({
  progress,
  isDisabled,
  isLastQuestion,
  onNext,
}: ControlBlockProps) => {
  return (
    <div className="control-block">
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress > 0 ? progress : 1}%` }}
        />
      </div>

      <div className="button-container">
        <button
          onClick={onNext}
          disabled={isDisabled}
          className={`next-button ${isDisabled ? "disabled" : ""}`}
        >
          {isLastQuestion ? "Завершить" : "Далее"}
        </button>
      </div>
    </div>
  );
};

export default ControlBlock;
