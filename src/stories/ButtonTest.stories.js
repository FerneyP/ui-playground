import CustomButton from "../components/ButtonTest.vue";

export default {
  title: "Components/CustomButton",
  component: CustomButton,
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => ({
  components: { CustomButton },
  setup() {
    return { args };
  },
  template: '<CustomButton v-bind="args">{{ args.label }}</CustomButton>',
});

export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
};