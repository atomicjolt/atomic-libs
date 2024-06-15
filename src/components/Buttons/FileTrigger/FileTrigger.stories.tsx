import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FileTrigger } from ".";
import Button from "../Button";
import { DropZone } from "@/components/DragAndDrop/DropZone";
import { FileDropItem } from "react-aria";

export default {
  title: "Buttons/FileTrigger",
  component: FileTrigger,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<typeof FileTrigger>;

type Story = StoryObj<typeof FileTrigger>;

export const Primary: Story = {
  args: {
    onSelect: fn(),
    children: <Button>Upload File</Button>,
  },
};

export const AllowMultipleFiles: Story = {
  args: {
    ...Primary.args,
    allowsMultiple: true,
  },
};

export const WithDragAndDrop: Story = {
  render: (args) => {
    return (
      <DropZone
        onDrop={(e) => {
          const files = e.items.filter(
            (item) => item.kind === "file"
          ) as FileDropItem[];

          console.log(files);
        }}
      >
        {({ isDropTarget }) => (
          <div
            style={{
              width: "200px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: isDropTarget
                ? "2px dashed black"
                : "2px dashed transparent",
              backgroundColor: isDropTarget ? "rgba(0,0,0,0.1)" : "transparent",
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <FileTrigger {...args} />
          </div>
        )}
      </DropZone>
    );
  },
  args: {
    ...Primary.args,
    children: <Button>Drop Files Here</Button>,
  },
  parameters: {
    docs: {
      source: {
        code: `
<DropZone
  onDrop={(e) => {
    const files = e.items.filter(
      (item) => item.kind === "file"
    ) as FileDropItem[];

    console.log(files);
  }}
>
  {({ isDropTarget }) => (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: isDropTarget
          ? "2px dashed black"
          : "2px dashed transparent",
        backgroundColor: isDropTarget ? "rgba(0,0,0,0.1)" : "transparent",
        padding: "1rem",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <FileTrigger>
        <Button>Drop Files Here</Button>
      </FileTrigger>
    </div>
  )}
</DropZone>
`,
      },
    },
  },
};
