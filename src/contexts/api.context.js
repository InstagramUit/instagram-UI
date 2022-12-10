import { authenticationContext } from "./authentication.context";
import { postContext } from "./post.context";

export const apiContext = {
  ...authenticationContext,
  ...postContext,
};
