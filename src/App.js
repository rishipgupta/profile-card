import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";

function App() {
  return (
    <div className="card">
      <Avatar />
      <h1>Christopher Nolan</h1>
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
