import { AlgorithmPicker } from "../components/algorithm-picker/algorithm-picker.tsx";

function Home() {
  return (
    <>
      <div className="main">
        <h1>Choose your algorithm</h1>
      </div>
      <div className="side h-full">
        <AlgorithmPicker />
      </div>
    </>
  );
}

export default Home;
