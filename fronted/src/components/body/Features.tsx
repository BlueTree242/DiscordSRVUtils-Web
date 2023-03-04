import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";
import tw from "twin.macro";
import { buttonClick } from "../../analytics";
import Button from "../../elements/Button";

function Features() {
  return (
    <>
      <hr />
      {features.map((feature) => (
        <>
          <div css={tw`flex max-md:flex-wrap`}>
            <div css={tw`text-start w-2/4 px-5 max-md:w-full`}>
              <h1 css={tw`text-start`}>{feature.title}</h1>
              <p css={tw`text-xl mt-2 text-start`}>{feature.description}</p>
              {feature.buttons && (
                <div css={tw`mt-4`}>
                  {feature.buttons.map((button) => (
                    <Button
                      css={tw`px-10`}
                      onClick={
                        typeof button.onClick === "function"
                          ? event => {
                            buttonClick(button.title, {on: "features", "feature_title": feature.title})
                            const handler = button.onClick as MouseEventHandler;
                            handler(event);
                          }
                          : () => {
                            buttonClick(button.title, {on: "features", "feature_title": feature.title})
                            window.open(button.onClick as string)
                          }
                      }
                    >
                      {button.icon && (
                        <FontAwesomeIcon icon={button.icon}></FontAwesomeIcon>
                      )}{" "}
                      {button.title}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            <img
              src={`/img/features/Feature-${feature.imageIdentifier}.png`}
              css={tw`w-1/2 mt-3 max-md:mx-auto max-md:w-[90%] h-auto max-md:my-3`}
            />
          </div>
          <hr />
        </>
      ))}
      <h1 css={tw`my-5`}>And Alot more..</h1>
      <hr/>
    </>
  );
}
export default Features;

type Feature = {
  title: string;
  description: string;
  imageIdentifier: string;
  buttons?: [
    {
      title: string;
      onClick: string | MouseEventHandler;
      icon?: IconProp;
    }
  ];
};
const wikiButton = (link: string) => {
  return {
    title: "See Wiki",
    onClick: link,
    icon: faBook,
  };
};

const features: Feature[] = [
  {
    title: "Messages Fully Custom",
    description:
      "Completely Customize your messages. Any Message Can be embed, or normal text, or both. PAPI Supported too! All with a message system!",
    imageIdentifier: "1",
    buttons: [wikiButton("https://wiki.discordsrvutils.xyz/messages/")],
  },
  {
    title: "Punishment sync and Messages",
    description:
      "Sync Punishments with your discord (if player is linked). Send Messages to Discord, They Are Completely Custom! Supports 3 punishment plugins.",
    imageIdentifier: "5",
    buttons: [
      wikiButton("https://wiki.discordsrvutils.xyz/punishments-integration/"),
    ],
  },
  {
    title: "Tickets System",
    description:
      "Create a ticket panel, and any user can open a ticket! 90% custom messages and easy to use!",
    imageIdentifier: "6",
    buttons: [wikiButton("https://wiki.discordsrvutils.xyz/tickets/")],
  },
  {
    title: "Suggestions System",
    description: "Unique Suggestions System!",
    imageIdentifier: "8",
    buttons: [wikiButton("https://wiki.discordsrvutils.xyz/suggestions/")],
  },
  {
    title: "Server Status System",
    description: "Server Status Channel for your server!",
    imageIdentifier: "9",
    buttons: [wikiButton("https://wiki.discordsrvutils.xyz/status/")],
  },
  {
    title: "Invite Tracking System",
    description:
      "Track invites, who invited and how many, and if they left or still in server!!",
    imageIdentifier: "10",
    buttons: [wikiButton("https://wiki.discordsrvutils.xyz/invite-tracking/")],
  },
];
