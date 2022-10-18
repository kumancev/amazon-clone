import GlobalStyle from "./styles/global";
import { Navbar } from "./components/Navbar/index";
import { Menubar } from "./components/Menubar/index";
import { PageBody } from "./components/PageBody/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Menubar />
      <PageBody />
    </>
  );
}

export default App;
