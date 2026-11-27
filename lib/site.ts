import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/BrandIcons";

export const EMAIL = "manishsencha2001@gmail.com";

export const socials = [
  { label: "GitHub", short: "GitHub", href: "https://gh.manishsencha.dev", display: "gh.manishsencha.dev", Icon: GitHubIcon },
  { label: "LinkedIn", short: "LinkedIn", href: "https://li.manishsencha.dev", display: "li.manishsencha.dev", Icon: LinkedInIcon },
  { label: "Instagram", short: "Insta", href: "https://ig.manishsencha.dev", display: "ig.manishsencha.dev", Icon: InstagramIcon },
  { label: "Email", short: "Email", href: `mailto:${EMAIL}`, display: EMAIL, Icon: Mail },
];
