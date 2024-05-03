import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const appComponent = screen.getByTestId('app-component');
	expect(appComponent).toBeInTheDocument();
});
