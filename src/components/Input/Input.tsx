import { AnimatePresence } from "framer-motion";
import { Ref, forwardRef } from "react";
import { Animate } from "@components/Animate";
import { Stack } from "@components/Stack";
import { Text } from "@components/Text";
import * as S from "./Input.styles";

export type InputProps = {
  id: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  type?: "text" | "number";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

export const Input = forwardRef(({ errorMessage, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <Stack direction="column" spacing={0.25} fullWidth>
      <S.Component ref={ref} $error={!!errorMessage} {...rest} />
      <AnimatePresence>
        {errorMessage && (
          <Animate name="fade">
            <Text variant="secondary" color="error.500">
              {errorMessage}
            </Text>
          </Animate>
        )}
      </AnimatePresence>
    </Stack>
  );
});
