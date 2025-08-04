import {addDecorator} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider/lib/ThemeContext";


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


// @ts-ignore
addDecorator(StyleDecorator)
// @ts-ignore
addDecorator(ThemeDecorator(Theme.LIGHT))

export default preview;



