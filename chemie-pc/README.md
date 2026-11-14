# Allgemeine Chemie I (PC) · eigener StudyHub

Eigenständiger Lernraum für ETH-Kurs 529-0011-01L (HS 2026).

- 27 Lektionen für ungefähr 60 Minuten, mit Lernzielen, Theorie und Beispielen
- 81 Aufgaben mit Tipps und Lösungswegen, 27 Kurzchecks und Konzeptkarten
- Timer, browserlokaler Lernfortschritt, Notizen und Export/Wiederherstellung
- 59 Original-PDFs (713 Seiten): Skript, Folien und Serien 1–9, Lösungen 1–8, 17 Altprüfungen, drei Probeprüfungen und zwölf Prüfungslösungen

## Starten

Dieser Ordner ist ein separates, buildloses Webprojekt. Vom Repository-Verzeichnis aus:

```sh
python3 -m http.server 8000 --directory chemie-pc/dist
```

Danach `http://localhost:8000` öffnen. Bei einem statischen Hosting den Ordner `chemie-pc/dist` als Webverzeichnis verwenden. Es gibt keine neue automatische Bereitstellung über GitHub Actions.

## Inhalte bearbeiten und prüfen

```sh
python3 chemie-pc/course.py
python3 chemie-pc/check.py
```

`course.py` erzeugt `dist/course.json`. Für den Dokumentcheck benötigt Python keine zusätzlichen Pakete; `check.py` prüft die vorhandenen Dokumentziele und unabhängige Beispielrechnungen. `dist/documents.json` enthält den Bibliotheksindex, `dist/source-files.json` Seitenzahlen und SHA-256-Prüfsummen der PDFs.

Die Quellen und Lernhinweise sind auf der Website über `#sources` erreichbar. Die originale Ausgabe des Skripts ist HS 2025, wie im Moodle-Kurs HS 2026 bereitgestellt. Aktuelle Folien und Serien reichen bis Woche 9; spätere Kapitel beruhen auf dem vollständigen Skript und Altprüfungen.

Fortschritt wird ausschliesslich im jeweiligen Browser gespeichert. Es gibt keine Konto- oder Leaderboard-Synchronisierung. Die Navigation zu Analysis und Physik verlinkt den bestehenden StudyHub.

Die Originalunterlagen gehören ihren Autorinnen und Autoren. Die Lektionen sind eigenständig erstellte Lernhilfen und keine offizielle ETH-Veröffentlichung. MathJax 3.2.2 steht unter Apache-2.0; siehe `THIRD_PARTY_NOTICES.md` und `LICENSE-MATHJAX`.
