import { SiYoutube, SiGithub } from "react-icons/si"
export default function App() {
	return (
		<div>
			{/* Navbar */}
			<header className="w-full border-b bg-white">
				<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
					<div className="mx-auto w-full max-w-3xl space-y-20">
						<div className="flex justify-between">
							<div className="flex flex-1 items-center justify-start">
								<a
									href="/"
									className="inline-flex h-10 items-center text-lg font-bold text-gray-800"
								>
									Gleezio
								</a>
							</div>
							<div className="flex flex-1 items-center justify-end">
								<nav className="flex items-center space-x-1">
									<a
										href="https://www.youtube.com"
										className="h-10 w-10 p-2 text-gray-800 hover:text-[#ff0000]"
									>
										<SiYoutube className="h-full w-full" />
									</a>
									<a
										href="https://www.github.com"
										className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0]"
									>
										<SiGithub className="h-full w-full" />
									</a>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* Main Content Area */}
			<main className="p-10 sm:px-16 lg:px-44">
				<div className="mx-auto max-w-3xl space-y-20">
					<header>
						<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
							Component Name
						</h1>
						<p className="mt-2 text-lg text-gray-800">Component Description</p>
					</header>
					<div className="space-y-10 md:space-y-16">
						<div>
							{/* Section Heading */}
							<h2 className="text-lg font-bold text-gray-800">
								Section Heading
							</h2>
							{/* Section Description */}
							<p className="mt-1 text-gray-600">Section Description</p>
							{/* Section Preview */}
							<div className="mt-3">
								<div className="flex flex-col rounded-xl p-6 shadow-sm">
									{/* Previewed Stuff */}
									<div className="flex flex-wrap gap-2">
										<div className="bg-blue-500/50 p-3">Component 1</div>
										<div className="bg-blue-500/50 p-3">Component 2</div>
										<div className="bg-blue-500/50 p-3">Component 3</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							{/* Section Heading */}
							<h2 className="text-lg font-bold text-gray-800">
								Section Heading
							</h2>
							{/* Section Description */}
							<p className="mt-1 text-gray-600">Section Description</p>
							{/* Section Preview */}
							<div className="mt-3">
								<div className="flex flex-col rounded-xl p-6 shadow-sm">
									{/* Previewed Stuff */}
									<div className="flex flex-wrap gap-2">
										<div className="bg-blue-500/50 p-3">Component 1</div>
										<div className="bg-blue-500/50 p-3">Component 2</div>
										<div className="bg-blue-500/50 p-3">Component 3</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<header>
						<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
							Component Name
						</h1>
						<p className="mt-2 text-lg text-gray-800">Component Description</p>
					</header>
					<div className="space-y-10 md:space-y-16">
						<div>
							{/* Section Heading */}
							<h2 className="text-lg font-bold text-gray-800">
								Section Heading
							</h2>
							{/* Section Description */}
							<p className="mt-1 text-gray-600">Section Description</p>
							{/* Section Preview */}
							<div className="mt-3">
								<div className="flex flex-col rounded-xl p-6 shadow-sm">
									{/* Previewed Stuff */}
									<div className="flex flex-wrap gap-2">
										<div className="bg-blue-500/50 p-3">Component 1</div>
										<div className="bg-blue-500/50 p-3">Component 2</div>
										<div className="bg-blue-500/50 p-3">Component 3</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							{/* Section Heading */}
							<h2 className="text-lg font-bold text-gray-800">
								Section Heading
							</h2>
							{/* Section Description */}
							<p className="mt-1 text-gray-600">Section Description</p>
							{/* Section Preview */}
							<div className="mt-3">
								<div className="flex flex-col rounded-xl p-6 shadow-sm">
									{/* Previewed Stuff */}
									<div className="flex flex-wrap gap-2">
										<div className="bg-blue-500/50 p-3">Component 1</div>
										<div className="bg-blue-500/50 p-3">Component 2</div>
										<div className="bg-blue-500/50 p-3">Component 3</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
