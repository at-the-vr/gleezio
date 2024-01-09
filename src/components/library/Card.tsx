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
	header,
	footer,
	title,
	subtitle,
	plainText,
	link,
	children,
}: {
	header?: string
	footer?: string
	title?: string
	subtitle?: string
	plainText?: string
	link?: { url: string; text: string }
	children?: React.ReactNode
}) => {
	return (
		<CardContainer>
			{header && (
				<div className="rounded-t-xl border-b bg-gray-100 px-4 py-3 md:px-5 md:py-4">
					<p className="mt-1 text-sm text-gray-500">{header}</p>
				</div>
			)}

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

			{footer && (
				<div className="rounded-b-xl border-t bg-gray-100 px-4 py-3 md:px-5 md:py-4">
					<p className="mt-1 text-sm text-gray-500">{footer}</p>
				</div>
			)}
		</CardContainer>
	)
}

// This type of card is for providing block links
export const BlockLinkCard = ({
	url,
	text,
	children,
}: {
	url?: string
	text?: string
	children: React.ReactNode
}) => {
	const linkClasses: string = "flex flex-col items-center p-6 sm:p-10"
	const linkContent = (
		<>
			{children}
			{text && <p className="mt-2 font-medium">{text}</p>}
		</>
	)
	return (
		<CardContainer className="text-gray-800 transition-colors hover:bg-gray-200/50">
			<a href={url || "#"} className={linkClasses} target="_blank">
				{linkContent}
			</a>
		</CardContainer>
	)
}
