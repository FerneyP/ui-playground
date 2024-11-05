// Importa el archivo de variables CSS
import '../src/styles/tokens/index.css'; // Cambia esta ruta a la de tu archivo de variables

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        type: 'dynamic', // Muestra el código fuente dinámicamente
      },
    },
  },
  globalTypes: {
    showCode: {
      name: 'Show Code',
      description: 'Toggle to show or hide code',
      defaultValue: true,
      toolbar: {
        icon: 'code',
        items: [
          { value: true, title: 'Show Code' },
          { value: false, title: 'Hide Code' },
        ],
      },
    },
  },
};

export default preview;