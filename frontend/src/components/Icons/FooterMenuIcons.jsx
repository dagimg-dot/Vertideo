/**
 * Function that renders a simple home icon
 * @param {boolean} solid - Represents if the icon will be solid or normal
 * @param {string} color - Icon color
 * @returns {JSX.IntrinsicElements.svg: React.SVGProps<SVGSVGElement>}
 */
export const Home = ({ color, solid }) => {
	if (solid) {
		return (
			<svg
					width={35}
					height={35}
					fill={color}
					viewBox="0 0 48 48"
			>
				<path
					fillRule="evenodd"
					d="M24.95 7.84a1.5 1.5 0 0 0-1.901 0l-16.1 13.2a1.5 1.5 0 0 0 .95 2.66h2.332l1.192 13.028A2.5 2.5 0 0 0 13.913 39H21.5a1 1 0 0 0 1-1v-9.685a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V38a1 1 0 0 0 1 1h7.587a2.5 2.5 0 0 0 2.49-2.272L37.769 23.7H40.1a1.5 1.5 0 0 0 .951-2.66l-16.1-13.2Z"
					clipRule="evenodd"
				/>
			</svg>
		)
	}
	return (
		<svg
			width={35}
			height={35}
			fill={color}
			viewBox="0 0 48 48"
		>
			<path
				fillRule="evenodd"
				d="M23.048 7.84a1.5 1.5 0 0 1 1.902 0l16.101 13.2a1.5 1.5 0 0 1-.951 2.66h-2.331l-1.192 13.028A2.5 2.5 0 0 1 34.087 39H13.913a2.5 2.5 0 0 1-2.49-2.272L10.231 23.7H7.899a1.5 1.5 0 0 1-.95-2.66l16.1-13.2Zm.952 3.1L12.095 20.7h.874l1.4 15.3h8.13v-7.686a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V36h8.132l1.4-15.3h.874l-11.906-9.76Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}


/**
 * Function that renders a simple search icon
 * @param {string} color - Icon color
 * @returns {JSX.IntrinsicElements.svg: React.SVGProps<SVGSVGElement>}
 */
export const Search = ({ color }) => {
	return (
		<svg
			width={35}
			height={35}
			fill={color}
			style={{ fillOpacity: 0.75 }}
			viewBox='0 0 48 48'
		>
			<path
				fillRule='evenodd'
				d='M21.776 10.5c-5.65 0-10.276 4.672-10.276 10.493 0 5.821 4.627 10.493 10.276 10.493 2.725 0 5.202-1.08 7.046-2.855a10.564 10.564 0 0 0 3.23-7.638c0-5.821-4.626-10.493-10.276-10.493ZM8.5 20.993C8.5 13.567 14.418 7.5 21.776 7.5s13.277 6.067 13.277 13.493c0 3.306-1.172 6.34-3.119 8.689l6.436 6.554a1 1 0 0 1-.013 1.414l-.714.7a1 1 0 0 1-1.414-.013l-6.455-6.573a13.086 13.086 0 0 1-7.998 2.722c-7.358 0-13.276-6.067-13.276-13.493Z'
				clipRule='evenodd'
			/>
		</svg>
	)
}

export const Activity = ({ color, solid }) => {
	if (solid) {
		return (
				<svg
				width={40}
				height={40}
				fill={color}
				viewBox="0 0 48 48"
			>
				<path
					fillRule="evenodd"
					d="M11.498 9a2.5 2.5 0 0 0-2.5 2.493l-.056 21a2.5 2.5 0 0 0 2.5 2.507h7.347l3.277 4.004a2.5 2.5 0 0 0 3.87 0L29.21 35h7.348a2.5 2.5 0 0 0 2.5-2.507l-.056-21A2.5 2.5 0 0 0 36.503 9H11.498ZM29 21H19a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1Z"
					clipRule="evenodd"
				/>
			</svg>
		)
	}
	return (
		<svg
			width={40}
			height={40}
			fill={color}
			style={{ fillOpacity: 0.75 }}
			viewBox='0 0 32 32'
		>
			<path
				fillRule='evenodd'
				d='M24.036 21.333h-5.512l-2.526 3.088-2.526-3.088H7.961L7.994 8h16.006l.035 13.333Zm.334 2h-4.898l-2.184 2.67a1.667 1.667 0 0 1-2.58 0l-2.184-2.67H7.626c-.922 0-1.669-.748-1.666-1.67l.037-14A1.667 1.667 0 0 1 7.662 6h16.67c.919 0 1.664.744 1.667 1.662l.037 14a1.667 1.667 0 0 1-1.667 1.671ZM12.665 14a.667.667 0 0 0-.667.667v.666c0 .369.298.667.667.667h6.666a.667.667 0 0 0 .667-.667v-.666a.667.667 0 0 0-.667-.667h-6.666Z'
				clipRule='evenodd'
			/>
		</svg>
	)
}

export const Profile = ({ color, solid }) => {
	if (solid) {
		return (
			<svg
				width={35}
				height={35}
				fill={color}
				viewBox="0 0 48 48"
			>
				<path
					fillRule="evenodd"
					d="M24 8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm0 19c-6.176 0-10.984 3.874-12.991 9.377-.49 1.343.543 2.66 1.871 2.66h22.239c1.328 0 2.362-1.317 1.87-2.661C34.982 31.377 30.178 27.5 24 27.5Z"
					clipRule="evenodd"
				/>
			</svg>
		)
	}
	return (
		<svg
			width={35}
			height={35}
			fill={color}
			style={{ fillOpacity: 0.75 }}
			viewBox='0 0 48 48'
		>
			<path
				fillRule='evenodd'
				d='M24 11.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM15.5 17a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0ZM24 30.5c-4.854 0-8.941 3.295-10.142 7.771-.143.534-.654.903-1.199.812l-.986-.166c-.545-.091-.916-.608-.784-1.145C12.336 31.875 17.656 27.5 24 27.5s11.664 4.375 13.111 10.272c.132.536-.239 1.054-.784 1.145l-.986.166c-.545.091-1.055-.278-1.199-.812C32.942 33.795 28.854 30.5 24 30.5Z'
				clipRule='evenodd'
			/>
		</svg>
	)
}
