import { createGlobalStyle } from 'styled-components';

const theme = {
	colors: {
		primary: '#D7263D',
		secondary: '#E6F9AF',
		darkBackground: '#0f1214',
		darkBackgroundLighter: '#141414',
		additional: '#F9C784',
		linkPrimary: ''
	}
};

export { theme };

export default createGlobalStyle`
    import '@fontsource/roboto/300.css';
    import '@fontsource/roboto/400.css';
    import '@fontsource/roboto/500.css';
    import '@fontsource/roboto/700.css';

    html {
      scroll-behavior: smooth;
    }

    * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        scroll-behavior: smooth;
    }

    body, #root {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        background-color: ${theme.colors.darkBackground};
        overflow-x: hidden;
    }

    input,
    textarea,
    select,
    a,
    button {
        outline-style: none;
        box-shadow: none;
        border-color: transparent;
    }

    a {
        color: ${theme.colors.primary};
        font-weight: bold;
    }

    /* Customize the scrollbar track */
    ::-webkit-scrollbar {
        width: 12px; /* Width of the scrollbar */
        border-left: 1px solid red;
    }

    /* Customize the scrollbar thumb (the draggable part) */
    ::-webkit-scrollbar-thumb {
        background: #888; /* Color of the thumb */
    }

    /* Customize the scrollbar track on hover */
    ::-webkit-scrollbar-track {
        background: #24252d; /* Color of the track on hover */
    }
`;
