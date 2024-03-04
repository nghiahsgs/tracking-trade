import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export enum EMenu {
  WAITING_ORDER = "WAITING_ORDER",
  HISTORY_ORDER = "HISTORY_ORDER",
  BALANCE = "BALANCE",
  SETTINGS = "SETTINGS",
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[],
  icon?: React.ReactNode
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
export const items: MenuItem[] = [
  getItem("Waiting order", EMenu.WAITING_ORDER),
  getItem("History order", EMenu.HISTORY_ORDER),
  getItem("Balance", EMenu.BALANCE),
  getItem("Settings", EMenu.SETTINGS),
];
