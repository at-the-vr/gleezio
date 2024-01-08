import { twMerge } from "tailwind-merge"

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = BaseButtonProps & {
	variant?: "primary" | "secondary" | "tertiary"
}

export const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	...props
}) => {
	const baseClasses: string =
		"inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

	const generateVariantClasses = (variant: string) => {
		switch (variant) {
			case "primary":
				return "border border-transparent bg-emerald-500 py-3 text-white hover:bg-emerald-600 focus:ring-emerald-500"
			case "secondary":
				return "border-2 border-gray-200 py-[0.688rem] text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white focus:ring-emerald-500"
			case "tertiary":
				return "border border-transparent py-3 underline-offset-4 ring-offset-white hover:underline text-emerald-500 hover:text-emerald-700 focus:ring-emerald-500"
			default:
				return ""
		}
	}

	// Generate variant class based on extracted color props
	const variantClasses = generateVariantClasses(variant)

	// Merge baseClasses with variant Classes and any additional classes
	const mergedClasses = twMerge([baseClasses, variantClasses])

	return <button className={mergedClasses} {...props} />
}
