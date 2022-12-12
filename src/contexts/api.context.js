import { authenticationContext } from "./authentication.context";
import { postContext } from "./post.context";
import { commentContext } from "./comment.context";
import { notificationContext } from "./notification.context";
import { followContext } from "./follow.context";

export const apiContext = {
  ...authenticationContext,
  ...postContext,
  ...commentContext,
  ...notificationContext,
  ...followContext,
};
