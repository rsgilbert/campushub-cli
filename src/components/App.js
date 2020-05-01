import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import("./Home"))
const Buy = lazy(() => import('./Buy'))

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    
                    <Header />
                    <Switch>
                        <Route 
                            exact path="/" 
                            component = {Home}
                            />
                        <Route path="/buy/:id" component={Buy} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
    </div>
  );
}

// const items = [
//     { 
//         id: "a",
//         name: "Belt",
//         price: 2000,
//         pictures: ['', '', '']
//     },  
//     { 
//         id: "b",
//         name: "Earphone",
//         price: 5000,
//         pictures: ['', '', '']
//     },
//     { 
//         id: "c",
//         name: "Eye glasses",
//         price: 3000,
//         pictures: ['', '', '']
//     }
//  ]
export default App;
