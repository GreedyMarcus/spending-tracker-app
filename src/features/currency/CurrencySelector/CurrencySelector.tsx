import { useId, useState } from "react";
import { Button } from "@components/Button";
import { Menu } from "@components/Menu";
import { MenuItem } from "@components/MenuItem";
import { Stack } from "@components/Stack";
import { Tooltip } from "@components/Tooltip";
import { Currency } from "../currency.types";

export type CurrencySelectorProps = {
  value: Currency;
  onChange: (value: Currency) => void;
};

export function CurrencySelector({ value, onChange }: CurrencySelectorProps) {
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(null);

  const menuId = useId();
  const menuButtonId = `${menuId}-button`;

  const open = !!anchorElement;

  return (
    <Stack>
      <Tooltip content="Currency">
        <Button
          id={menuButtonId}
          color="light"
          aria-controls={menuId}
          aria-expanded={open}
          aria-haspopup
          onClick={(e) => setAnchorElement(e.currentTarget)}
        >
          {value}
        </Button>
      </Tooltip>
      <Menu
        id={menuId}
        open={open}
        anchorElement={anchorElement}
        aria-labelledby={menuButtonId}
        onClose={() => setAnchorElement(null)}
      >
        {Object.values(Currency).map((currency) => (
          <MenuItem key={currency} onClick={() => onChange(currency)}>
            {currency}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
}
