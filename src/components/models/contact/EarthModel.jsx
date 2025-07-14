import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanvasLoader from '../Loader';
import { useMediaQuery } from 'react-responsive';

function Earth() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const earth = useGLTF('/models/earth.glb');
  return (
    <mesh>
      <primitive
        object={earth.scene}
        scale={isMobile ? 2.5 : 2.8}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
}
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={
        {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4,3,6]
        }
      }
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
