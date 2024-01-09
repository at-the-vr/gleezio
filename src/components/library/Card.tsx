import { twMerge } from "tailwind-merge"

// Define type for the props that will be accepted by CardContainer
type CardContainerProps = React.HTMLAttributes<HTMLDivElement>

export const CardContainer: React.FC<CardContainerProps> = ({
	className,
	children,
	...props
}) => {
	// Base classes
	const baseClasses: string = "rounded-xl border bg-white shadow-sm"
	const mergedClasses: string = twMerge([baseClasses, className])
	return (
		<div className="w-full max-w-xs" {...props}>
			<div className={mergedClasses}>{children}</div>
		</div>
	)
}

// This type of card is for displaying content
export const ContentCard = ({
	title,
	subtitle,
	plainText,
	link,
	children,
}: {
	title?: string
	subtitle?: string
	plainText?: string
	link?: { url: string; text: string }
	children?: React.ReactNode
}) => {
	return (
		<CardContainer>
			<div className="flex flex-col p-4 md:p-5">
				{title && <h3 className="text-lg font-bold text-gray-800">{title}</h3>}
				{subtitle && (
					<p className="mt-1 text-xs font-medium uppercase text-gray-500">
						{subtitle}
					</p>
				)}
				{plainText && <p className="mt-2 text-gray-800">{plainText}</p>}
				{children}
				{link && (
					<a
						href={link.url}
						className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-800"
					>
						{link.text}
					</a>
				)}
			</div>
		</CardContainer>
	)
}

export const BlockLinkCard = () => {
	return <div>BlockLinkCard</div>
}
