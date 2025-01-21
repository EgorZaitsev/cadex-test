import type React from "react"
import { Form, InputNumber, Button } from "antd"
import "./BoxForm.css"

interface BoxFormProps {
	darkMode: boolean
	onSubmit: (values: { length: number; width: number; height: number }) => void
}

const BoxForm: React.FC<BoxFormProps> = ({ darkMode, onSubmit }) => {
	const [form] = Form.useForm()
	
	const handleSubmit = (values: { length: number; width: number; height: number }) => {
		onSubmit(values)
	}
	
	return (
		<Form  form={form} onFinish={handleSubmit} layout="vertical" className=" box-form">
			<Form.Item
				name="length"
				label="Length"
				rules={[{ required: true, message: "Please input the length!" }]}
				initialValue={1}
				className={`${darkMode ? "dark-label" : "light-label"}`}
			>
				<InputNumber min={0.1} max={10} step={0.1} />
			</Form.Item>
			<Form.Item
				name="width"
				label="Width"
				rules={[{ required: true, message: "Please input the width!" }]}
				initialValue={1}
				className={`${darkMode ? "dark-label" : "light-label"}`}
			>
				<InputNumber min={0.1} max={10} step={0.1} />
			</Form.Item>
			<Form.Item
				name="height"
				label="Height"
				rules={[{ required: true, message: "Please input the height!" }]}
				initialValue={1}
				className={`${darkMode ? "dark-label" : "light-label"}`}
			>
				<InputNumber min={0.1} max={10} step={0.1} />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Update Box
				</Button>
			</Form.Item>
		</Form>
	)
}

export default BoxForm

