import { Heart } from "./Icons.jsx";
export default {
  title: "Heart",
  component: Heart,
  tags: ["autodocs"],
  argTypes: {
    colorBorder: { control: "color" },
    bgcolor: { control: "color" },
    colorBorderActive: { control: "color" },
    bgcolorActive: { control: "color" },
  },
};
export const Default = {
  component: Heart,
};
