import tw from "twin.macro";
import MenuIcon from "@/assets/img/menu-bar-icon.svg";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faBook,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDiscord,
  faJenkins,
} from "@fortawesome/free-brands-svg-icons";
function Navbar() {
  const nav = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const windowListener = (e: MouseEvent): any => {
    const currentNav = nav.current;
    if (currentNav == null || e.target === currentNav || currentNav.contains(e.target as Node)) {
      return;
    }

    if (e.target !== currentNav && !currentNav.contains(e.target as Node)) {
      setShown(false);
    }
  }
  useEffect(() => {
    document.addEventListener('click', windowListener);
    return () => document.removeEventListener('click', windowListener)
  }, [ ])
  return (
    <div css={tw`bg-[#27282c] w-full flex justify-between flex-wrap fixed top-0`} ref={nav}>
      <div css={tw`flex`}>
        <img src="/img/icon.png" css={tw`h-[4rem]`} />
        <div css={tw`text-xl text-white my-auto cursor-default`}>
          DiscordSRVUtils
        </div>
      </div>
      <NavToggleButton src={MenuIcon} onClick={() => setShown(!shown)}/>
      <LinksContainer className={shown ? "shown" : ""}>
        {navLinks.map((link) => (
          <NavButton href={link.link} target="_blank">
            {link.icon && <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>}{" "}
            {link.display}
          </NavButton>
        ))}
      </LinksContainer>
    </div>
  );
}

export default Navbar;

const LinksContainer = styled.div`
  ${tw`flex justify-between`}
  @media (max-width: 1000px) {
    & {
      ${tw`max-h-0 flex-wrap overflow-hidden w-full`}
      transition: max-height 0.2s ease-in-out;
    }
    &.shown {
      ${tw`w-full max-h-[15rem]`}
    }
  }
`;
const NavToggleButton = styled.img`
  ${tw`h-[3rem] my-auto cursor-pointer`}
  @media (min-width: 1001px) {
    & {
      ${tw`hidden`}
    }
  }
`;

const NavButton = styled.a`
  ${tw`text-white mx-3 text-[20px] my-auto cursor-pointer overflow-hidden no-underline select-none`}
  @media (max-width: 1000px) {
    & {
      ${tw`w-full mb-3 ml-3 mx-0`}
    }
    &:first-child {
      ${tw`mt-5`}
    }
  }
`;

type NavLink = {
  display: string;
  link: string;
  icon?: IconProp;
};
const navLinks: NavLink[] = [
  {
    display: "Download",
    link: "/dl",
    icon: faDownload,
  },
  {
    display: "Wiki",
    link: "https://wiki.discordsrvutils.xyz/",
    icon: faBook,
  },
  {
    display: "Github",
    link: "https://github.com/BlueDevelopersInc/DiscordSRVUtils/",
    icon: faGithub,
  },
  {
    display: "Support",
    link: "/support",
    icon: faDiscord,
  },
  {
    display: "Bstats",
    link: "https://bstats.org/plugin/bukkit/DiscordSRVUtils/9456",
    icon: faChartSimple,
  },
  {
    display: "Download Dev",
    link: "https://ci.bluetree242.ml/job/DiscordSRVUtils/",
    icon: faJenkins,
  },
];
function openLink(link: string) {
  window.open(link);
}
