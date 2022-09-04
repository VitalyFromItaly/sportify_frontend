import '../.storybook/utils.css';
import UiButton from './Button';
import { EButtonAppearance } from './ui/domain/@types';

export default {
  title: 'Example/Button',
  component: UiButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'centered'
  }
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiButton },
  template:
    '<ui-button v-bind="$props"> button </ui-button>'
});

export const Primary = Template.bind({});
Primary.args = {
  appearance: EButtonAppearance.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: EButtonAppearance.SECONDARY
};

export const Transparent = Template.bind({});
Transparent.args = {
  appearance: EButtonAppearance.TRANSPARENT
};
