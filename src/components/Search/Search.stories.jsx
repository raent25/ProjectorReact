import Search from "./Search.jsx";

export default {
  title: "Search",
  component: Search,
  tags: ["autodocs"],
};
export const Default = {
  text: {
    textInput: "",
  },
};
export const Two = () => <Search artistValue="AC" />;
