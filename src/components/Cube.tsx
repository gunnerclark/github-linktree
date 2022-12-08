import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function Cube({ darkMode, setDarkMode }: any) {

  const mesh = useRef<Mesh>(null);

  useFrame(() => {
    if (!mesh.current) {
      return;
    }
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  })

  const [hovered, setHover] = useState(false);

  return (
    <mesh 
      ref={mesh}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach="material" wireframe color={!darkMode ? "white" : "black"}/>
    </mesh>
  )
}

export default Cube;
