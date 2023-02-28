import '../lib/styles/base.css'
import '../lib/styles/utilities.css'
import '../lib/styles/fonts.css'
import '../lib/styles/components.css'



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [],
      locales: '',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
