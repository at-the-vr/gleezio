import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"

export default function App() {
	return (
		<Layout>
			<Container
				title="Component Name using container component"
				description="Component Description using container component"
			>
				<Section
					title="Section Heading with Components"
					description="Description using components"
				>
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 2</div>
					<div className="bg-blue-500/50 p-3">Component 3</div>
				</Section>

				<Section
					title="Section Heading with Components"
					description="Description using components"
				>
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 2</div>
					<div className="bg-blue-500/50 p-3">Component 3</div>
				</Section>
			</Container>
			<Container
				title="Component Name using container component"
				description="Component Description using container component"
			>
				<Section
					title="Section Heading with Components"
					description="Description using components"
				>
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 2</div>
					<div className="bg-blue-500/50 p-3">Component 3</div>
				</Section>

				<Section
					title="Section Heading with Components"
					description="Description using components"
				>
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 2</div>
					<div className="bg-blue-500/50 p-3">Component 3</div>
				</Section>
			</Container>
		</Layout>
	)
}
