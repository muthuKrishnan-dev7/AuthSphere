import "./App.css";
import Nav from "./components/Nav";
import AuthModal from "./pages/AuthModal";

function App() {
  return (
    <>
      <Nav />
      <div className="main w-full p-[30px]">
        <AuthModal />
      </div>
    </>
  );
}

export default App;
