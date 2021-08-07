module.exports = {
	stories: [ '../**/*.stories.@(mdx|tsx)' ],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-essentials',
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-notes',
		'@emotion/babel-preset-css-prop',
		'storybook-dark-mode',
		'storybook-design-token',
		'babel-preset-react-app',
	],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				require.resolve('babel-loader'),
				{
					loader: require.resolve('react-docgen-typescript-loader'),
					options: {
						tsconfigPath: require.resolve('../tsconfig.json'),
					},
				},
			],
		})
		config.resolve.extensions.push('.ts', '.tsx')
		return config
	},
}
