import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  useTexture,
} from "@react-three/drei";
import { useRef } from "react";

function SphereMesh({ textureUrl }) {
  const meshRef = useRef();
  const texture = useTexture(textureUrl);

  // Rotación lenta de la esfera
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2.5, 64, 64]}>
      {" "}
      {/* Radio aumentado */}
      <MeshDistortMaterial
        map={texture}
        distort={0.1}
        speed={1.5}
        color={!texture ? "#4f46e5" : undefined}
      />
    </Sphere>
  );
}

export default function PlanetSphere({ textureUrl }) {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 5], fov: 60 }} // Cámara más cerca y con menor fov
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <SphereMesh textureUrl={textureUrl} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
