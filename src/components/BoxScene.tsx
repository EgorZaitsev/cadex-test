import type React from "react"
import { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import {BACKEND_URL} from "../constants/constants.ts";

interface BoxSceneProps {
	dimensions: { length: number; width: number; height: number }
	darkMode: boolean
}

const BoxScene: React.FC<BoxSceneProps> = ({ dimensions, darkMode }) => {
	const [triangulation, setTriangulation] = useState<number[]>([])
	
	useEffect(() => {
		const fetchTriangulation = async () => {
			const response = await fetch(BACKEND_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dimensions),
			})
			const data = await response.json()
			setTriangulation(data.triangulation)
		}
		
		fetchTriangulation()
	}, [dimensions])
	
	return (
		<Canvas style={{height: '700px'}} camera={{ position: [2, 2, 2], fov: 45 }}>
			<ambientLight intensity={1} />
			<Box triangulation={triangulation} darkMode={darkMode} />
			<OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
		</Canvas>
	)
}

interface BoxProps {
	triangulation: number[]
	darkMode: boolean
}

const Box: React.FC<BoxProps> = ({ triangulation }) => {
	const geometry = new THREE.BufferGeometry()
	const vertices = new Float32Array(triangulation)
	geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3))
	geometry.computeVertexNormals()
	
	return (
		<group>
			<mesh geometry={geometry}>
				<meshPhongMaterial color={0x808080} side={THREE.DoubleSide} flatShading={true} />
			</mesh>
			<mesh geometry={geometry}>
				<meshBasicMaterial color={0x000000} wireframe={true} wireframeLinewidth={0.5} />
			</mesh>
		</group>
	)
}

export default BoxScene

