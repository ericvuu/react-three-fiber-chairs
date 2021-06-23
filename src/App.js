import React, {Suspense} from "react";
import "./App.scss";

//Components
import { Canvas} from "@react-three/fiber";
import Header from "./components/header";
import {Section} from "./components/section"
import { Html} from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./armchairYellow.gltf");
  return <primitive object={gltf.scene} />;
}

const HTMLContent = () => {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
        <mesh position={[0, -35, 0]}>
          <Model/>
        </mesh>
        <Html fullscreen>
          <div className="container">
            <h1 className="title">Hello</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </>
  );
}
