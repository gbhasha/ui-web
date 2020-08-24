import React, {useEffect, useState} from 'react';
import { Route, Link } from 'react-router-dom';

const ChildComponent = () => {
  const [state] = useState(123);
  useEffect(() => {
  }, [state]);

  return (
    <div>I am a child</div>
  )
};

const ParentComponent = ({children}) => {
  const [state, setState] = useState(123);
  
  useEffect(() => {
    setState(312);
  }, [state]);

  return (
      <div className="home">
        {children}
        
        {/* <nav>
          <Link to="/link2/inner">inner</Link>
        </nav>
        <ChildComponent />
        <Route exact path="/link2/inner" render={() => (<div>Inner</div>)}/> */}
      </div>
  );
  
}

const Home = () => {
  const [state] = useState(123);
  useEffect(() => {
    console.log("wrapper");
  }, [state]);

  return (
    <ParentComponent>
      <ChildComponent />
    </ParentComponent>
    
  )
};

export default Home;
