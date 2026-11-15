# Name audio

## English and Bangla

The homepage and dial use the browser's Web Speech API to read each name's transliteration and meaning in the current website language. Speech is generated on the device at playback time; it is not stored as MP3 files. The male/female preference is best-effort because browsers and devices expose voice gender inconsistently.

## Arabic

Arabic playback remains unavailable until the Arabic meanings are reviewed and human-recorded clips with permission to use them are supplied. The UI keeps the Arabic option disabled in the meantime; it does not synthesize Arabic speech or reuse unverified recordings.

When cleared clips are available, provide one clip per name in both voice sets:

- `assets/audio/names/male/n01.mp3` through `n99.mp3`
- `assets/audio/names/female/n01.mp3` through `n99.mp3`

Each clip should say the corresponding Arabic name and its approved Arabic meaning. The existing MP3s in this directory's root are not used: their voices, per-name labeling, and reuse rights have not been verified.

The homepage and dial link to the Physicians of the Heart pronunciation index as an external listening source. Its recordings are not copied into this repository.
