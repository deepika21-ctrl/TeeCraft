import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));
  // useFrame((state, delta) =>
  //   easing.dampC(materials.Body_FRONT_2664.color, snap.color, 0.25, delta)
  // );
  // useFrame((state, delta) =>
  //   easing.dampC(materials.Sleeves_FRONT_2669.color, snap.color, 0.25, delta)
  // );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      {/* <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Body_FRONT_2664}
      ></mesh>
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.Body_FRONT_2664}
      ></mesh>
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.Body_FRONT_2664}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, ,0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.8]}
            rotation={[0, 0, 0]}
            scale={1}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.Body_FRONT_2664}
      ></mesh>
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.Body_FRONT_2664}
      ></mesh>
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.Body_FRONT_2664}
      ></mesh>
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials.Body_FRONT_2664}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.Body_FRONT_2664}
      ></mesh>
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.Sleeves_FRONT_2669}
      ></mesh>
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.Sleeves_FRONT_2669}
      ></mesh> */}
      <mesh geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1}>
        {snap.isFullTexture && (
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal 
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
