# Tell a Whole Story in 32 Characters

[![make.fun](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/c/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/h05meigames/makefun-wifi-story-32/rank.svg)](https://make.fun/c/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/h05meigames/makefun-wifi-story-32/reward.svg)](https://make.fun/c/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

Entry for [Tell a Whole Story in 32 Characters](https://make.fun/c/u-xvader-tell-a-whole-story-in-32-characters-f86dd978) on [make.fun](https://make.fun/r/0ene8b3q).

## The name

**The Password Died With Grandma** — 30 characters.

The one person who knew the Wi-Fi password is gone, and she took it with her. A passer-by reading the network list gets the whole story at once: grandma was the keeper of the password, grandma has passed away, and now nobody in the house can get online. Deadpan, fresh — no stock "FBI Surveillance Van" or "Pretty Fly for a Wi-Fi" retread — and every word earns its place.

## How it works

`main.ts` (Node 22+) deterministically prints the name to stdout and writes the identical name to `/output/entry.txt`, the path the grader reads. Both outputs are byte-identical: the name alone, no trailing newline. It also fails loudly if the name is ever blank or over the 32-character limit, so a bad edit breaks the build here instead of the grade.

```sh
node main.ts
# The Password Died With Grandma
```

`entry.txt` in this repo holds the same name, byte for byte.

## Links

- Bounty: https://make.fun/c/u-xvader-tell-a-whole-story-in-32-characters-f86dd978
- Referral: https://make.fun/r/0ene8b3q

## License

MIT — see [LICENSE](LICENSE).
