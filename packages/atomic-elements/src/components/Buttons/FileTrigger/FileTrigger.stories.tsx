import type { CSSProperties } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { action } from "storybook/actions";
import { FileTrigger } from ".";
import { Button } from "../Button";
import { DropZone } from "@components/DragAndDrop/DropZone";
import { FileDropItem } from "@react-aria/dnd";

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

const dropZoneStyle = (isDropTarget: boolean): CSSProperties => ({
  width: "200px",
  height: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: isDropTarget ? "2px dashed black" : "2px dashed transparent",
  backgroundColor: isDropTarget ? "rgba(0,0,0,0.1)" : "transparent",
  padding: "1rem",
  borderRadius: "8px",
  textAlign: "center",
});

const logFiles = action("handleFiles");

export const WithDragAndDrop: Story = {
  render: (args) => {
    // Dropped and selected files go through the same handler.
    const handleFiles = (files: File[]) => logFiles(files);

    return (
      <DropZone
        onDrop={async (e) => {
          const items = e.items.filter(
            (item) => item.kind === "file"
          ) as FileDropItem[];
          handleFiles(await Promise.all(items.map((item) => item.getFile())));
        }}
      >
        {({ isDropTarget }) => (
          <div style={dropZoneStyle(isDropTarget)}>
            <FileTrigger
              {...args}
              onSelect={(files) => {
                args.onSelect?.(files);
                handleFiles(Array.from(files));
              }}
            />
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
const handleFiles = (files: File[]) => {
  // Upload or store the files
};

<DropZone
  onDrop={async (e) => {
    const items = e.items.filter(
      (item) => item.kind === "file"
    ) as FileDropItem[];
    handleFiles(await Promise.all(items.map((item) => item.getFile())));
  }}
>
  {({ isDropTarget }) => (
    <div style={{ border: isDropTarget ? "2px dashed black" : "2px dashed transparent" }}>
      <FileTrigger onSelect={(files) => handleFiles(Array.from(files))}>
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

export const AcceptedFileTypes: Story = {
  args: {
    ...Primary.args,
    acceptedFileTypes: ["image/png", "image/jpeg"],
    children: <Button>Upload Image</Button>,
  },
};

export const Directories: Story = {
  args: {
    ...Primary.args,
    accept: "directories",
    children: <Button>Upload Folder</Button>,
  },
};
