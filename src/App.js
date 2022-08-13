import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import Content from './components/Navbar/Content';
import './styles.css';
// import Projects from './pages/projects';

function App() {
  let component;
  // console.log(window.location.pathname);
  switch (window.location.pathname) {
    case '/':
      break;
    // case '/projects':
    //   component = <Projects />;
    //   break;
  }
  return (
    <div>
      {/* <Navbar /> */}
      <Content />
      {component}
    </div>
  );
}

export default App;

// made the background and the nav bar , now work on aligning the picture and the text and add projects buttons and second page and then add the projects there.
