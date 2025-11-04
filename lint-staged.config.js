export default {
	"**/*.{ts,tsx,js,jsx,json,css,scss,md}": [
		"biome format --write",
		"biome lint --write",
	],
};
