import "./styles/global.css";
import Main from "./components/Main/Main";
import { Providers } from "./lib/providers";

export default function App() {
  return (
    <Providers>
      <Main />
    </Providers>
  );
}
