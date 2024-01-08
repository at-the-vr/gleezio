import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"
import { Button } from "./components/library/Button"

export default function App() {
	return (
		<Layout>
			<Container
				title="Button"
				description="A Button is a widget that enables users to trigger an action or event such as submitting a form, opening a dialog, cancelling an action, or performing delete operation"
			>
				<Section
					title="Primary"
					description="Primary actions should be obvious. Solid with high contrast background colors work great here."
				>
					<Button>Default Primary</Button>
					<Button disabled>Disabled Primary</Button>
				</Section>

				<Section
					title="Secondary"
					description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options"
				>
					<Button variant="secondary">Default Secondary</Button>
					<Button variant="secondary" disabled>Disabled Secondary</Button>
				</Section>

				<Section
					title="Tertiary"
					description="Tertiary actions should be discoverable but unobtrusive. Styling these actions like links is usually the best approach"
				>
					<Button variant="tertiary">Default Tertiary</Button>
					<Button variant="tertiary" disabled>Disabled Tertiary</Button>
				</Section>

				<Section
					title="Destructive"
					description="Destructive actions typically result in the removal of an item and may result in an undesirable consequence"
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
