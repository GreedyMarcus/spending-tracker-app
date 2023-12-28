import { useId, useState } from "react";
import { Button } from "@components/Button";
import { Menu } from "@components/Menu";
import { MenuItem } from "@components/MenuItem";
import { Stack } from "@components/Stack";
import { SpendingOrderOptionMapper } from "../spending.mappers";
import { SpendingOrderOption } from "../spending.types";

export type SpendingOrderSelectorProps = {
  value: SpendingOrderOption;
  onChange: (value: SpendingOrderOption) => void;
};

export function SpendingOrderSelector({ value, onChange }: SpendingOrderSelectorProps) {
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(null);

  const menuId = useId();
  const menuButtonId = `${menuId}-button`;

  const open = !!anchorElement;

  return (
    <Stack>
      <Button
        id={menuButtonId}
        color="light"
        aria-controls={menuId}
        aria-expanded={open}
        aria-haspopup
        onClick={(e) => setAnchorElement(e.currentTarget)}
      >
        {SpendingOrderOptionMapper.toLabel(value)}
      </Button>
      <Menu
        id={menuId}
        open={open}
        anchorElement={anchorElement}
        aria-labelledby={menuButtonId}
        onClose={() => setAnchorElement(null)}
      >
        {Object.values(SpendingOrderOption).map((option) => (
          <MenuItem key={option} onClick={() => onChange(option)}>
            {SpendingOrderOptionMapper.toLabel(option)}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
}
