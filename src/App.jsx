import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GlobalStyles, { theme } from './globalStyles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		main: theme.colors.primary
	},
	fonts: {
		body: '"Roboto", sans-serif',
		heading: '"Anton", sans-serif',
		monospace: 'monospace, sans-serif'
	},
	...theme
});

/**
 * @method App
 */
function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
