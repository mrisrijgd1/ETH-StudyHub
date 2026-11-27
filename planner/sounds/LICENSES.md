# Focus trail: nature sound recordings

These are the loops the focus trail on the study planner (`planner/focus-hike.js`) plays when a student turns on "Nature sounds".
Every file is a field recording that is public domain or CC0. StudyHub hosts them itself, so the page makes no requests to other sites.

To make each loop we cut a calm section of the original (start and length below) and applied a gentle high-pass filter (600 Hz for birds, which removes distant traffic rumble; 40–80 Hz for the rest).
We then normalised the loudness, crossfaded the end into the start so the loop is seamless, and encoded it twice: AAC at 64 kbit/s (`.m4a`) and Opus at 56 kbit/s (`.ogg`, for browsers without AAC).
We made no other changes.

| File | What you hear | Recordist / source | Original | Section used | Licence |
|---|---|---|---|---|---|
| `birds-meadow.m4a` | Dawn chorus: song thrush, chiffchaff and others, Záhorie, Slovakia (2021) | Tomáš Šenkyřík, via radio aporee | [archive.org/details/aporee_54486_62318](https://archive.org/details/aporee_54486_62318) | 84–136 s | Public Domain Mark 1.0 |
| `birds-forest.m4a` | Birdsong in the woods, Sidobre, Burlats, France (2026) | kaoss012, via radio aporee | [archive.org/details/aporee_72288_84416](https://archive.org/details/aporee_72288_84416) | 86–148 s | Public Domain Mark 1.0 |
| `stream.m4a` | Mountain creek, Valle del Carro, Ceresole Reale, Italian Alps (2025) | collettivocromocinque, via radio aporee | [archive.org/details/aporee_73983_86534](https://archive.org/details/aporee_73983_86534) | 100–162 s | Public Domain Mark 1.0 |
| `lake.m4a` | Small waves on the shore of Lake Luodis, Lithuania (2021) | alas23/sala, via radio aporee | [archive.org/details/aporee_52933_60493](https://archive.org/details/aporee_52933_60493) | 8–70 s | Public Domain Mark 1.0 |
| `rain-light.m4a` | Long, easy rain | joedeshon (Freesound #430765), mirror on archive.org | [freesound.org/s/430765](https://freesound.org/people/joedeshon/sounds/430765/) | 83–139 s | CC0 1.0 |
| `rain-heavy.m4a` | Steady heavy rain | Red Library (USC Cinema / Sunset Editorial sound effects) | [archive.org/details/Red_Library_Nature_Rain](https://archive.org/details/Red_Library_Nature_Rain), "R30-25a Steady Heavy Rain" | 1–43 s | CC0 1.0 |
| `wind-breeze.m4a` | Wind in a forest, Vastse-Kuuste, Estonia (2015) | Veljo Runnel, via radio aporee | [archive.org/details/aporee_27288_31439](https://archive.org/details/aporee_27288_31439) | 67–131 s | Public Domain Mark 1.0 |
| `wind-gusty.m4a` | Blustery wind | SSE Library (USC Cinema / Sunset Editorial sound effects) | [archive.org/details/SSE_Library_WIND](https://archive.org/details/SSE_Library_WIND), "WIND_Jim Cook's wind; bluster; prairie wind" | 1–71 s | CC0 1.0 |
| `wind-ridge.m4a` | Whistling wind with a deep rumble, for high ridges | SSE Library (USC Cinema / Sunset Editorial sound effects) | [archive.org/details/SSE_Library_WIND](https://archive.org/details/SSE_Library_WIND), "WIND_Whistling wind; good rumble" | 0–57 s | CC0 1.0 |

Notes
- Public Domain Mark and CC0 need no attribution. We credit the recordists anyway, here and in the planner's sound panel.
- The timer bell is still generated in code (Web Audio). It needs no file and has no licence.
- Before replacing or adding a recording, check its licence on the original page and add a row here.
