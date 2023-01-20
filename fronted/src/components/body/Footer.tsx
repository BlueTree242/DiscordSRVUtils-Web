import tw from "twin.macro";

function Footer() {
  return (
    <>
      <div
        css={[
          tw`text-white text-center pb-1 text-xl`,
          `background-image: linear-gradient(to top, #27282c, #292b30, #2b2e33, #2d3237, #2f353a);`,
        ]}
      >
        Not associated with DiscordSRV in any way.
      </div>
      <div
        css={[
          tw`text-white text-center`,
          `background-image: linear-gradient(to top, #00fffe, #23c7d8, #3992a8, #3c6171, #2f353a);`,
        ]}
      >
        Made by BlueTree242
      </div>
    </>
  );
}

export default Footer;
