"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

function ParticleNetwork(props: any) {
    const ref = useRef<any>(null);

    // 3000 particles, dense neural network feel
    const sphere = useMemo(() => random.inSphere(new Float32Array(9000), { radius: 12 }), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15; // Faster, active rotation
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.025}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
}

export default function NetworkBackground() {
    return (
        <div className="absolute inset-0 z-[-1] bg-black">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ParticleNetwork />
                {/* Adds subtle mouse parallax using OrbitControls or manual mouse tracking */}
                <MouseParallax />
            </Canvas>
        </div>
    );
}

function MouseParallax() {
    useFrame((state) => {
        state.camera.position.x += (state.pointer.x * 2 - state.camera.position.x) * 0.05;
        state.camera.position.y += (state.pointer.y * 2 - state.camera.position.y) * 0.05;
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}
