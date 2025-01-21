import type React from "react"
import { useState, useEffect } from "react"
import { Layout, Switch } from "antd"
import BoxForm from "./components/BoxForm"
import BoxScene from "./components/BoxScene"
import "./App.css"

const { Header, Content } = Layout

const App: React.FC = () => {
	const [darkMode, setDarkMode] = useState(() => {
		const savedMode = localStorage.getItem("darkMode")
		return savedMode ? JSON.parse(savedMode) : false
	})
	const [boxDimensions, setBoxDimensions] = useState({ length: 1, width: 1, height: 1 })
	
	useEffect(() => {
		localStorage.setItem("darkMode", JSON.stringify(darkMode))
		document.body.classList.toggle("dark-mode", darkMode)
	}, [darkMode])
	
	const handleFormSubmit = (values: { length: number; width: number; height: number }) => {
		setBoxDimensions(values)
	}
	
	const toggleDarkMode = () => {
		setDarkMode((prevMode : boolean) => !prevMode)
	}
	
	return (
		<Layout className={`app ${darkMode ? "dark" : "light"}`}>
			<Header className="header">
				<h1>3D Box Configurator</h1>
				<Switch checked={darkMode} onChange={toggleDarkMode} checkedChildren="🌙" unCheckedChildren="☀️" />
			</Header>
			<Content className="content">
				<div className="form-container">
					<BoxForm onSubmit={handleFormSubmit} darkMode={darkMode} />
				</div>
				<div className="scene-container">
					<BoxScene dimensions={boxDimensions} darkMode={darkMode} />
				</div>
			</Content>
		</Layout>
	)
}

export default App

