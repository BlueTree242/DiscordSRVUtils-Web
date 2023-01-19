import styled from "styled-components";
import tw from "twin.macro";

const Button = styled.button`
  ${tw`select-none text-3xl bg-transparent border-white rounded-full px-5 cursor-pointer text-white border-solid ease-in 
hover:bg-white hover:text-black duration-150`}
`;
export default Button;
