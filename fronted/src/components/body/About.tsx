import tw from "twin.macro";

function About() {
  return (
    <div css={tw`w-full pt-10`}>
      <h1>What is DiscordSRVUtils?</h1>
      <p css={tw`mt-3 text-2xl`}>
        DiscordSRVUtils is a{" "}
        <a
          href="https://www.spigotmc.org/resources/discordsrv.18494/"
          target="_blank"
        >
          DiscordSRV
        </a>{" "}
        Addon to Improve the abilities of DiscordSRV Bot in your discord server.
        Check features below:
      </p>
    </div>
  );
}
export default About;
