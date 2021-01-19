import makeFAIcon from "utils/makeFAIcon";

import {
  faPhone,
  faEnvelope,
  faPlus,
  faBars,
  faTimes,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFortAwesome,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";

export const PhoneIcon = makeFAIcon(faPhone);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlusIcon = makeFAIcon(faPlus);
export const BarsIcon = makeFAIcon(faBars);
export const GithubIcon = makeFAIcon(faGithub);
export const MediumIcon = makeFAIcon(faMediumM);
export const CloseIcon = makeFAIcon(faTimes);
export const LanguageIcon = makeFAIcon(faGlobe);

export const HomepageIcon = makeFAIcon(faFortAwesome);
export const TwitterIcon = makeFAIcon(faTwitter);
export const FacebookIcon = makeFAIcon(faFacebookF);
export const LinkedinIcon = makeFAIcon(faLinkedinIn);

export * from "config/CustomIcons";
