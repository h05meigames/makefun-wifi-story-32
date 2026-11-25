// Tell a Whole Story in 32 Characters
// make.fun competition: u-xvader-tell-a-whole-story-in-32-characters-f86dd978
//
// The entry is a single Wi-Fi network name, 32 characters or fewer:
// "The Password Died With Grandma" — 30 characters.
//
// The joke: the one person who knew the Wi-Fi password is gone, and she
// took it with her. A passer-by reading the network list gets the whole
// story at once — grandma was the keeper of the password, grandma has
// passed away, and now nobody in the house can get online. It is
// deadpan, fresh (no stock "FBI Surveillance Van" / "Pretty Fly for a
// Wi-Fi" retread), and every word earns its place.
//
// The program prints the name to stdout and writes the identical name
// to /output/entry.txt, the path the grader reads. Both outputs are
// byte-identical: the name alone, with no trailing newline, so stdout,
// entry.txt and /output/entry.txt all hold exactly the same 30 bytes.
//
// Revision: the first draft trusted the name's length blindly. The
// gate refuses any entry over 32 characters, so the program now fails
// loudly instead of silently shipping an over-long name, and refuses a
// blank name too — a bad edit must break the build here, not the grade.

import { mkdirSync, writeFileSync } from "node:fs";

const NAME = "The Password Died With Grandma";
const MAX_LENGTH = 32;

if (NAME.length === 0 || NAME.trim().length === 0) {
  throw new Error("Wi-Fi name must not be blank");
}
if (NAME.length > MAX_LENGTH) {
  throw new Error(
    `Wi-Fi name is ${NAME.length} characters, over the ${MAX_LENGTH}-character limit`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NAME, "utf8");
process.stdout.write(NAME);
