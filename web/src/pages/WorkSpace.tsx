import '../styles/Global.css';
import '../styles/Variables.css';
import '../styles/pages/WorkSpace.css';
import Navbar from '../components/navbar/Navbar';
import Card from '../components/Card';

function WorkSpace() {

  return (
    <div id="page-workspace" >
      <Navbar />
      <main>
        <div className="content-wrapper"> 
          <div className="content-cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div> 
      </main>

    </div>
  )
}
export default WorkSpace;