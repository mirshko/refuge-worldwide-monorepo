import { Lists } from ".keystone/types";

import { Genre } from "./lists/genre";
import { Artist } from "./lists/artist";
import { Show } from "./lists/show";
import { User } from "./lists/user";

export const lists: Lists = {
  User,
  Artist,
  Show,
  Genre,
};
