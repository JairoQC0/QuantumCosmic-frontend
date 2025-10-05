// src/components/PlanetSphere.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import { useRef } from "react";

function SphereMesh({ textureUrl }) {
  const meshRef = useRef();
  const texture = useTexture(textureUrl);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2.8, 64, 64]}>
      <meshStandardMaterial map={texture} metalness={0.3} roughness={0.7} />
    </Sphere>
  );
}

export default function PlanetSphere({ textureUrl }) {
  return (
    // Contenedor con relación de aspecto 1:1 (cuadrado) en móvil, más ancho en escritorio
    <div className="w-full aspect-[4/3] sm:aspect-square max-w-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: "transparent" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 5, 5]} intensity={2.5} castShadow />
        <directionalLight position={[-10, -5, -5]} intensity={0.5} />
        <SphereMesh textureUrl={textureUrl} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
