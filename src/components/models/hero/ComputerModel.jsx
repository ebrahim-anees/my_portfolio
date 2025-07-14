import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import CanvasLoader from '../Loader';
import Particles from './Particles.jsx';
function ComputerModel() {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const computer = useGLTF('/models/computer.glb');

  return (
    <mesh>
      <hemisphereLight intensity={0.85} groundColor="black" />
      <pointLight intensity={1} />
      <directionalLight intensity={1} position={[2, 15, 1]} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : isTablet ? 0.6 : 0.7}
        position={[0, -1.2, -0.7]}
      />
    </mesh>
  );
}

const ComputerCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 8, -3.5], fov: 23 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4.2}
          minAzimuthAngle={-Math.PI / 250} // -45 degrees
          maxAzimuthAngle={Math.PI / 1.2} // +45 degrees
        />
        <ComputerModel />
        <Particles count={500} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
