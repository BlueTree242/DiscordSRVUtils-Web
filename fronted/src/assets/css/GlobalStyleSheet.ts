import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body, * {
    ${tw`p-0 m-0`}
    font-family: Arial, sans-serif;
    -webkit-tap-highlight-color: transparent;
}
body {
    ${tw`bg-[#2f353a]`}
}
h1, h2, h3, p {
    ${tw`text-center text-white`}
}
hr {
    ${tw`my-[1rem] border-0 w-full`}
    border-top: 1px solid rgba(0, 0, 0, .1)
}
a {
    ${tw`text-white`}
}
`;
