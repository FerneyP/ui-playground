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
  },
};

export default preview;
