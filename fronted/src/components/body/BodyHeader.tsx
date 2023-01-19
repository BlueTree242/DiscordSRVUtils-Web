import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Button from "../../elements/Button";

function BodyHeader() {
  return (
    <div css={tw`flex justify-center`}>
      <div css={tw`h-auto w-[23rem] flex flex-wrap justify-center pt-[2rem]`}>
        <img src="/img/icon.png" height="150px" />
        <h1 css={tw`text-2xl`}>DiscordSRVUtils Addon</h1>
        <p css={tw`text-3xl mt-2`}>Improve your DiscordSRV Bot & Discord!</p>
        <Button css={tw`mt-5 w-[90%]`} onClick={() => window.open("/dl")}>
          <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Download
        </Button>
      </div>
    </div>
  );
}

export default BodyHeader;
