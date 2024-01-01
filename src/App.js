

import './App.css';
import pic from './th.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons'; 
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; 

function App() {
  return (
    <div id='frontmain'>

      <img src={pic} alt="" id='a1' />
      <div id='a2'>
        <h1 id='a3'>Jonathan Smith</h1>
        <p id='a4'>Senior Web Doveloper</p>
        <hr id='a5'/>
        <p id='a6'>innovation,task-driven proffesional with 8+ year experience in web design and development across <br />
           diverse industries. Equipped with a record of siccess in consistently identifying and providing the <br />
           technological needs of companies through ingenious innovation.Proficient in developing databases, <br />
           creating user interfaces, writting and testing codes,troubleshooting simple issues, and <br />
           implemening new features based on user feedback.        
        </p>
             
         </div>
         <FontAwesomeIcon icon={faEnvelope} id="a7"/>
        <p id='a8'>Jonathan@novoresume.com</p>
        <h3 id='a9'>WORK EXPERIENCE</h3>
        <hr id='a10' />
        <FontAwesomeIcon icon={faMobile} id="a11"/>
        <p id='a12'>1234567890</p>
        <h3 id='a13'>Web Doveloper</h3>
        <FontAwesomeIcon icon={faLocationDot} id='a14'/>
        <p id='a12'>Long Beach, CA</p>
        <FontAwesomeIcon icon={faGlobe} id='a11'/>
        <p id='a12'>Johanath-smith.com</p>
      <ul> <p id='a15'><li id='a16'>Coached 4 junior designers in ARIA and A11y accessibility standards. <br /> This lead to 100% of projects created to be accessible for all disabled <br /> users. <br /></li>
           <li id='a16'>Created and oversaw wireframe designs from client requests. <br /></li>
          <li id='a16'> Led transition from firebase to AWS, saving company $3,700+ <br />monthly and increasing load speeds by an average of 38%. <br /></li>
          <li id='a16'> Created documentation to teach new team members company <br /> standards and best practices in React.js and Node.js. This shortened <br />learning time by an average of 16 days. <br /></li>
          <li id='a16'> Addressed complex issues with real-time lead prioritization using <br /> Websocket connectivity.</li></p> </ul> 

          <h3 id='a17'>Web Development Intern</h3>
          <h3 id='a18'>SiriusXM</h3>
     <ul>  <p id='a19'><li id='a16'>Developed user interfaces with modern JavaScript frameworks, <br /> HTML5, and CSS3, which improved user satisfaction by 31%. </li>
             <li id='a16'>Developed object-oriented code in Node.js with 100% accordance to <br />industry and company <br /></li>
             <li id='a16'>Learned multiple threading, concurrency, design patterns, and their <br />impacts on application concurrency.</li>
             <li id='a16'>Designed and developed web applications using JavaScript <br />frameworks React.js and Angular.js to increase target audience <br />engagement by 12%.</li>
             </p> </ul>

             <h1 id='a20'>EDUCATION</h1>
             <p id='a21'>Bachelor of Computer Application</p>
             <h4 id='a21'>University:- M.G.S.U</h4>
             <h4 id='a22'>Appearing</h4>

             <h1 id='a23'>SKILLS</h1>
             <ul id='a24'>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Angular.js</li>
              <li>MongoDB</li>
              <li>AWS</li>
              <li>Java</li>
             </ul>
    </div>
  );
}

export default App;

