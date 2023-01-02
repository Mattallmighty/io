import Shortkey from "@/components/Shortkey";
import type { ModuleConfig, InputData, Row } from "@/mock-store";
import { Keyboard } from "@mui/icons-material";
import { FC } from "react";
import { useHotkeys } from "react-hotkeys-hook";

type KeyboardConfigExample = {};

export const id = "keyboard-module";

export const moduleConfig: ModuleConfig<KeyboardConfigExample> = {
  menuLabel: "Keyboard",
  inputs: [
    {
      name: "key event",
      icon: "keyboard",
    },
  ],
  outputs: [],
  config: {
    enabled: true,
  },
};

export const InputEdit: FC<{
  input: InputData;
  onChange: (data: Record<string, any>) => void;
}> = ({ input, onChange }) => {
  //   const updateRowInputValue = useMainStore(store.updateRowInputValue);
  return (
    <>
      <Keyboard fontSize={"large"} />
      <Shortkey
        value={input.data.value}
        onChange={(value) => {
          onChange({ value });
        }}
        edit
      />
    </>
  );
};

export const InputDisplay: FC<{ input: InputData }> = ({ input }) => {
  return (
    <>
      {" "}
      <Keyboard fontSize={"large"} />
      <Shortkey
        value={input.data.value}
        trigger={() => {
          console.log("SHORTKEY;");
        }}
      />
    </>
  );
};

export const useInputActions = (row: Row) => {
  useHotkeys(
    row.input.data.value,
    () => {
      // dispatch event on global event emitter
      console.log("hotkey triggered", row.id);
      window.dispatchEvent(new CustomEvent(`io_input`, { detail: row.id }));
    },
    {},
    [row.input.data.value]
  );
};
