import { useAppSelector } from "@/lib/hooks";
import { SurveyContainer } from "../SurveyContainer";
import { selectIsFinished } from "@/lib/features/survey/surveySelectors";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

export default function Main() {
  const isFinished = useAppSelector(selectIsFinished);
  return (
    <main className="main">
      <div className="container">
        {isFinished ? <ResultsContainer /> : <SurveyContainer />}
      </div>
    </main>
  );
}
