import { twMerge } from "tailwind-merge"

// Define type for props that the Input component will accept
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	description?: string
}

export const Input: React.FC<InputProps> = ({
	className,
	label,
	description,
	...props
}) => {
	// Base classes
	const baseClasses: string =
		"block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:pointer-events-none dark:text-white dark:border-zinc-700 dark:bg-zinc-900 disabled:opacity-50"

	const mergedClasses: string = twMerge([baseClasses, className])
	return (
		<div className="max-w-sm space-y-3">
			{label && (
				<label className="mb-2 block text-sm font-medium dark:text-white">
					{label}
				</label>
			)}
			<input {...props} className={mergedClasses} />
			{description && (
				<p className="mt-2 text-sm text-gray-500">{description}</p>
			)}
		</div>
	)
}
