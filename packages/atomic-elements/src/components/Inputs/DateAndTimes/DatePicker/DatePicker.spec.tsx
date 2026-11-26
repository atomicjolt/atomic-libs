import { describe, test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { parseDate, now, getLocalTimeZone } from '@internationalized/date';
import { DatePicker } from '.';
import { freezeTime } from '../../../../test/freezeTime';

describe('DatePicker', () => {
  describe('matches snapshots', () => {
    freezeTime();

    const shared = {
      label: 'Date Picker',
      message: 'Select a date',
      error: 'Invalid date',
      onChange: () => {},
    };

    test('default variant', () => {
      const result = render(<DatePicker {...shared} />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('with value', () => {
      const result = render(
        <DatePicker {...shared} value={parseDate('2023-01-15')} />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('with default value', () => {
      const result = render(
        <DatePicker {...shared} defaultValue={parseDate('2023-12-25')} />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('day granularity', () => {
      const result = render(<DatePicker {...shared} granularity="day" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('hour granularity', () => {
      const result = render(<DatePicker {...shared} granularity="hour" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('minute granularity', () => {
      const result = render(<DatePicker {...shared} granularity="minute" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('second granularity', () => {
      const result = render(<DatePicker {...shared} granularity="second" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('disabled state', () => {
      const result = render(<DatePicker {...shared} isDisabled />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('required state', () => {
      const result = render(<DatePicker {...shared} isRequired />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('readonly state', () => {
      const result = render(<DatePicker {...shared} isReadOnly />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('invalid state', () => {
      const result = render(<DatePicker {...shared} isInvalid />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('with leading zeros', () => {
      const result = render(<DatePicker {...shared} shouldForceLeadingZeros />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('24 hour cycle', () => {
      const result = render(
        <DatePicker {...shared} granularity="hour" hourCycle={24} />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('small size', () => {
      const result = render(<DatePicker {...shared} size="small" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('medium size', () => {
      const result = render(<DatePicker {...shared} size="medium" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('large size', () => {
      const result = render(<DatePicker {...shared} size="large" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('small calendar size', () => {
      const result = render(<DatePicker {...shared} calendarSize="small" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('medium calendar size', () => {
      const result = render(<DatePicker {...shared} calendarSize="medium" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('large calendar size', () => {
      const result = render(<DatePicker {...shared} calendarSize="large" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('with min and max values', () => {
      const today = now(getLocalTimeZone());
      const minValue = today.subtract({ days: 30 });
      const maxValue = today.add({ days: 30 });

      const result = render(
        <DatePicker {...shared} minValue={minValue} maxValue={maxValue} />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('without label', () => {
      const result = render(
        <DatePicker message="Select a date" error="Invalid date" />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('without message', () => {
      const result = render(
        <DatePicker label="Date Picker" error="Invalid date" />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('without error', () => {
      const result = render(
        <DatePicker label="Date Picker" message="Select a date" />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test('minimal props', () => {
      const result = render(<DatePicker />);
      expect(result.asFragment()).toMatchSnapshot();
    });
  });

  describe('accessibility', () => {
    const duplicateIds = (container: HTMLElement) => {
      const counts: Record<string, number> = {};
      container.querySelectorAll('[id]').forEach((el) => {
        counts[el.id] = (counts[el.id] ?? 0) + 1;
      });
      return Object.keys(counts).filter((id) => counts[id] > 1);
    };

    test('the segments and calendar button form a group named by the label', () => {
      render(<DatePicker label="Due" message="Pick a day" />);
      const group = screen.getByRole('group', { name: 'Due', description: /Pick a day/ });
      expect(within(group).getByRole('button', { name: /Calendar/ })).toBeInTheDocument();
    });

    test('ids are unique, including a caller-supplied id', () => {
      const { container } = render(<DatePicker id="due" label="Due" message="m" error="e" isInvalid />);
      expect(duplicateIds(container)).toEqual([]);
      expect(container.querySelectorAll('#due')).toHaveLength(1);
    });

    test('the calendar popup is a labelled dialog', async () => {
      render(<DatePicker label="Due" />);
      await userEvent.click(screen.getByRole('button', { name: /Calendar/ }));
      const dialog = await screen.findByRole('dialog', { name: /Due/ });
      expect(within(dialog).getByRole('grid')).toBeInTheDocument();
    });
  });
});
