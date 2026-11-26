import { AtomicTextControl } from "./text/AtomicTextControl";
import { AtomicTextCell } from "./text/AtomicTextCell";
import { AtomicNumberCell, AtomicNumberControl } from "./number/AtomicNumberControl";
import {
  AtomicCheckBoxCell,
  AtomicCheckBoxControl,
  AtomicToggleControl,
} from "./boolean/AtomicBooleanControl";
import {
  AtomicComboBoxControl,
  AtomicRadioControl,
  AtomicSelectCell,
  AtomicSelectControl,
} from "./enum/AtomicSelectControl";
import { AtomicMultiSelectControl } from "./enum/AtomicMultiSelectControl";
import {
  AtomicDateCell,
  AtomicDateControl,
  AtomicDateTimeCell,
  AtomicDateTimeControl,
  AtomicTimeCell,
  AtomicTimeControl,
} from "./date/AtomicDateControls";

export const UnwrappedControls = {
  AtomicTextControl,
  AtomicNumberControl,
  AtomicCheckBoxControl,
  AtomicToggleControl,
  AtomicSelectControl,
  AtomicRadioControl,
  AtomicComboBoxControl,
  AtomicMultiSelectControl,
  AtomicDateControl,
  AtomicTimeControl,
  AtomicDateTimeControl,
};

export const UnwrappedCells = {
  AtomicTextCell,
  AtomicNumberCell,
  AtomicCheckBoxCell,
  AtomicSelectCell,
  AtomicDateCell,
  AtomicTimeCell,
  AtomicDateTimeCell,
};
