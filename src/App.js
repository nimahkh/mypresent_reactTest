import React from 'react';
import { Impress, Step } from 'react-impressjs';
import './App.css';
import "./assets/impress.css"
import Demo from "./Demo"

function App() {
  return (
    <div className="App">
        <Impress progress={true}
                 hint={false}
                 >
            {
                Demo.map( (d, index ) => {
                    return (
                        React.createElement( Step, {
                                id: d.id,
                                className: d.className,
                                data: d.data,
                                key: index
                            },
                            d.content.map( (child, index) => {
                                return (
                                    React.cloneElement( child, {
                                        id: child.id,
                                        className: child.className,
                                        key: index
                                    })
                                );
                            }))

                    );
                })
            }
        </Impress>
    </div>
  );
}

export default App;
