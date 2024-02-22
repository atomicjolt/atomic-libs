import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  CustomSelect,
  IconButton,
  IconMenu,
  Item,
  MaterialIcon,
  SearchInput,
  Section,
  Select,
  TimeInput,
  ToggleSwitch,
  ToolTip,
  CheckBox,
  RadioGroup,
  Radio,
  FileInput,
  Table,
} from "../elements";
import styled from "styled-components";
import { HasVariant } from "../../../src/types";
import { ButtonVariants } from "../../../src/components/Buttons/Buttons.types";
import classNames from "classnames";
import Checkbox from "../../../src/components/Inputs/Checkbox";
import {
  Cell,
  Column,
  Row,
  SortDescriptor,
  TableBody,
  TableHeader,
} from "react-stately";

export default function AriaComponents() {
  const [selected, setSelected] = useState<any>(false);
  const [selectedRadio, setSelectedRadio] = useState<any>("v1");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const pokemons = [
    {
      name: "Charizard",
      type: "Fire, Flying",
      level: 67,
    },
    {
      name: "Blastoise",
      type: "Water",
      level: 56,
    },
    {
      name: "Venusaur",
      type: "Grass, Poison",
      level: 83,
    },
    {
      name: "Pikachu",
      type: "Electric",
      level: 100,
    },
  ];

  const sortedPokemons = pokemons.sort((a, b) => {
    if (sortDescriptor.column === undefined) return 0;

    if (sortDescriptor.direction === "ascending") {
      return a[sortDescriptor.column] > b[sortDescriptor.column] ? 1 : -1;
    } else {
      return a[sortDescriptor.column] < b[sortDescriptor.column] ? 1 : -1;
    }
  });

  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <Table
        aria-label="Table with selection"
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <Table.Header>
          <Table.Column key="name" allowsSorting>
            Name
          </Table.Column>
          <Table.Column allowsSorting key="type">
            Type
          </Table.Column>
          <Table.Column allowsSorting key="level">
            Level
          </Table.Column>
        </Table.Header>
        <Table.Body items={sortedPokemons}>
          {(pokemon) => (
            <Table.Row key={pokemon.name}>
              <Table.Cell>{pokemon.name} </Table.Cell>
              <Table.Cell>{pokemon.type} </Table.Cell>
              <Table.Cell>{pokemon.level}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
