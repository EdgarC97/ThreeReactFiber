import React from 'react';
import { Canvas } from 'react-three-fiber';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  );
}

export default App;
