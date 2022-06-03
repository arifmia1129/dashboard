import logo from './logo.svg';
import './App.css';
import LeftSide from './component/LeftSide';
import Dashboard from './component/Dashboard';
import RightSide from './component/RightSide';
import Navbar from './component/Navbar';
import SubNav from './component/SubNav';

function App() {
  return (
    <div className="flex justify-between">
      <LeftSide />
      <div className='left-0 relative w-full'>
        <Navbar />
        <div className='bg-base-200'>
          <SubNav />
          <Dashboard />
        </div>
      </div>
      <RightSide />
    </div>
  );
}

export default App;
