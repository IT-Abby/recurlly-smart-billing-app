import { icons } from "@/constants/icons";

export const tabs = [
  { name: "index", title: "Home", icons: icons.home },
  { name: "insights", title: "Insights", icons: icons.activity },
  { name: "subscriptions", title: "Subscriptions", icons: icons.wallet },
  { name: "settings", title: "Settings", icons: icons.setting },
] as const;
