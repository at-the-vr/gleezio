import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"
import { Button } from "./components/library/Button"
import { BlockLinkCard, ContentCard } from "./components/library/Card"
import { SiVite, SiNextdotjs } from "react-icons/si"
import { Input } from "./components/library/Input"

export default function App() {
	return (
		<Layout>
			{/* Buttons Container */}
			<Container
				title="Button"
				description="A Button is a widget that enables users to trigger an action or event such as submitting a form, opening a dialog, cancelling an action, or performing delete operation"
			>
				<Section
					title="Primary"
					description="Primary actions should be obvious. Solid with high contrast background colors work great here."
				>
					<Button>Default</Button>
					<Button disabled>Disabled</Button>
					{/* Primary button with override colors */}
					<Button
						colors={{
							bg: "bg-amber-500",
							hoverBg: "hover:bg-amber-600",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber
					</Button>
					<Button
						colors={{
							bg: "bg-rose-500",
							hoverBg: "hover:bg-rose-600",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						colors={{
							bg: "bg-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-600",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						colors={{
							bg: "bg-indigo-500",
							hoverBg: "hover:bg-indigo-600",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						colors={{
							bg: "bg-[#1da1f2]",
							hoverBg: "hover:bg-[#1a8cd8]",
							focusRing: "focus:ring-[#1da1f2]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>

				<Section
					title="Secondary"
					description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options"
				>
					<Button variant="secondary">Default</Button>
					<Button variant="secondary" disabled>
						Disabled
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-amber-500",
							hoverBorder: "border-amber-500",
							hoverBg: "hover:bg-amber-500",
							focusRing: "focus:ring-amber-500",
							darkHoverBorder: "dark:hover:border-amber-500",
						}}
					>
						Amber
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-rose-500",
							hoverBorder: "border-rose-500",
							hoverBg: "hover:bg-rose-500",
							focusRing: "focus:ring-rose-500",
							darkHoverBorder: "dark:hover:border-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-fuchsia-500",
							hoverBorder: "border-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-500",
							focusRing: "focus:ring-fuchsia-500",
							darkHoverBorder: "dark:hover:border-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-indigo-500",
							hoverBorder: "border-indigo-500",
							hoverBg: "hover:bg-indigo-500",
							focusRing: "focus:ring-indigo-500",
							darkHoverBorder: "dark:hover:border-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-[#1da1f2]",
							hoverBorder: "border-[#1da1f2]",
							hoverBg: "hover:bg-[#1da1f2]",
							focusRing: "focus:ring-[#1da1f2]",
							darkHoverBorder: "dark:hover:border-[#1da1f2]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>

				<Section
					title="Tertiary"
					description="Tertiary actions should be discoverable but unobtrusive. Styling these actions like links is usually the best approach"
				>
					<Button variant="tertiary">Default</Button>
					<Button variant="tertiary" disabled>
						Disabled
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-amber-500",
							hoverText: "hover:text-amber-700",
							focusRing: "focus:ring-amber-500",
							darkHoverText: "dark:hover:text-amber-400",
						}}
					>
						Amber
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-rose-500",
							hoverText: "hover:text-rose-700",
							focusRing: "focus:ring-rose-500",
							darkHoverText: "dark:hover:text-rose-400",
						}}
					>
						Rose
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-fuchsia-500",
							hoverText: "hover:text-fuchsia-700",
							focusRing: "focus:ring-fuchsia-500",
							darkHoverText: "dark:hover:text-fuchsia-400",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-indigo-500",
							hoverText: "hover:text-indigo-700",
							focusRing: "focus:ring-indigo-500",
							darkHoverText: "dark:hover:text-indigo-400",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-[#1da1f2]",
							hoverText: "hover:[#1a8cd8]",
							focusRing: "focus:ring-[#1da1f2]",
							darkHoverText: "dark:hover:text-[#71c9f8]",
						}}
					>
						Twitter Blue
					</Button>
				</Section>

				<Section
					title="Destructive"
					description="Destructive actions typically result in the removal of an item and may result in an undesirable consequence"
				>
					{/* Destructive primary button */}
					<Button
						colors={{
							bg: "bg-red-500",
							hoverBg: "hover:bg-red-600",
							focusRing: "focus:ring-red-500",
						}}
					>
						Yes, I'm sure I want to delete this.
					</Button>

					{/* Destructive secondary button */}
					<Button
						variant="secondary"
						colors={{
							text: "text-red-500",
							hoverBorder: "hover:border-red-500",
							hoverBg: "hover:bg-red-500",
							focusRing: "focus:ring-red-500",
							darkHoverBorder: "dark:hover:border-red-500",
						}}
					>
						Unsubscribe
					</Button>

					{/* Destructive tertiary button */}
					<Button
						variant="tertiary"
						colors={{
							text: "text-gray-500",
							hoverText: "hover:text-gray-700",
							focusRing: "focus:ring-gray-500",
							darkHoverText: "dark:hover:text-zinc-400",
						}}
					>
						Cancel
					</Button>
				</Section>
			</Container>

			{/* Cards Container */}
			<Container
				title="Card"
				description="A card is a flexible and extensible content container"
			>
				<Section
					title="Simple"
					description="Simple cards display content and can provide a distinct link that can be selected"
				>
					{/* Simple Card */}
					<ContentCard
						title="Card Title"
						subtitle="Card Subtitle"
						plainText="Some quick example text to build on the card title and make up the bulk of the card's content"
						link={{ url: "/", text: "Card link" }}
					></ContentCard>
				</Section>

				<Section
					title="Simple card with a header and footer"
					description="Add a optional header and/or footer within a card "
				>
					{/* Simple Card with header */}
					<ContentCard
						header="Featured"
						title="Card Title"
						subtitle="Card Subtitle"
						plainText="Some quick example text to build on the card title and make up the bulk of the card's content"
						link={{ url: "/", text: "Card link" }}
					></ContentCard>

					{/* Simple Card with footer */}
					<ContentCard
						footer="Last updated 5 mins ago"
						title="Card Title"
						subtitle="Card Subtitle"
						plainText="Some quick example text to build on the card title and make up the bulk of the card's content"
						link={{ url: "/", text: "Card link" }}
					></ContentCard>
				</Section>

				<Section
					title="Block link"
					description="A simple card enhanced into a selectable block link"
				>
					{/* Vite Card */}
					<BlockLinkCard url="https://vitejs.dev/" text="Vite">
						<SiVite className="h-10 w-10" />
					</BlockLinkCard>

					{/* NextJs Card */}
					<BlockLinkCard url="https://nextjs.org/" text="NextJs">
						<SiNextdotjs className="h-10 w-10" />
					</BlockLinkCard>
				</Section>
			</Container>

			{/* Input Containter */}
			<Container
				title="Inputs"
				description="An input is a widget that allows users to provide data or specify options which can be submitted as part of a form or used to interact with and  manipulate content on a web page"
			>
				<Section title="Basic" description="Basic Input with a placeholder">
					{/* Basic Input */}
					<Input type="text" placeholder="Type things here!" />

					{/* Disabled Input */}
					<Input type="text" disabled placeholder="Disabled 😔" />
				</Section>

				<Section title="Label" description="Input with a label">
					{/* Input with a label */}
					<Input type="email" label="email" placeholder="you@site.com" />
				</Section>

				<Section title="Description" description="Input with a description">
					{/* Input with a description */}
					<Input
						type="password"
						label="password"
						description="We'll totally never share your password"
						placeholder="super-secret-password"
					/>
				</Section>
			</Container>
		</Layout>
	)
}
