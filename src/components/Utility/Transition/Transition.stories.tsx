import { ComponentMeta, ComponentStory } from "@storybook/react";
import Transition, { Props, TransitionRef } from ".";
import Doc from "./Transition.doc.mdx";
import Button from "../../Buttons/Button";
import { useRef } from "react";

export default {
  title: "Utility/Transition",
  component: Transition,
  parameters: {
    docs: {
      page: Doc,
    },
  },
} as ComponentMeta<typeof Transition>;

const Template: ComponentStory<typeof Transition> = (args: Props<any>) => {
  const ref = useRef<TransitionRef>(null);

  return (
    <>
      <Transition {...args} ref={ref} />
      <div>
        <Button
          className="secondary"
          onClick={() => ref.current && ref.current.trigger()}
        >
          Trigger
        </Button>
        <Button
          className="secondary"
          onClick={() => ref.current && ref.current.reset()}
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  from: {
    loading: true,
    loadingComplete: false,
  },
  to: {
    loading: true,
    loadingComplete: true,
  },
  after: 5000,
  render: (data) => <Button {...data}>Text</Button>,
};

// Additional stories go here
