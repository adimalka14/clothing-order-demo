import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from '../src/themes/Provider';
import { store } from '/src/store/store';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',
        },
    },
    decorators: [
        (Story, context) => {
            const { dir, theme } = context.globals;

            return (
                <Provider store={store}>
                    <ThemeProvider initialDir={dir} initialTheme={theme}>
                        <Story />
                    </ThemeProvider>
                </Provider>
            );
        },
    ],
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            toolbar: {
                // The label to show for this toolbar item
                title: 'Theme',
                icon: 'paintbrush',
                // Array of plain string values or MenuItem shape (see below)
                items: ['light', 'dark'],
                // Change title based on selected value
                dynamicTitle: true,
            },
        },
        dir: {
            description: 'Global direction for components',
            toolbar: {
                // The label to show for this toolbar item
                title: 'Direction',
                icon: 'globe',
                // Array of plain string values or MenuItem shape (see below)
                items: ['ltr', 'rtl'],
                // Change title based on selected value
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: 'light',
    },
};

export default preview;
