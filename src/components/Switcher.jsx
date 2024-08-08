import { Switch } from "@headlessui/react";
import { useThemeMode } from "flowbite-react";
import { useState } from "react";

function Switcher() {
  const [enabled, setEnabled] = useState(false);
  const theme = useThemeMode();

  function changeTheme() {
    setEnabled(!enabled);
    theme.toggleMode();
  }

  return (
    <Switch
      checked={enabled}
      defaultChecked={false}
      onChange={changeTheme}
      className=" mt-[20px] mr-[400px] align-middle group inline-flex h-6 w-11 items-center rounded-full bg-[rgb(58,117,255)] transition data-[checked]:bg-[rgb(58,117,255] duration-[500ms]"
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>
  );
}
export default Switcher;
