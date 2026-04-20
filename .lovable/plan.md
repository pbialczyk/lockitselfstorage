
## Plan: Przywrócenie hero z pomarańczowymi drzwiami → zielona wersja

### Sytuacja
Aktualnie na mobile hero pokazuje zdjęcie srebrnych kontenerów (`/public/hero/hero-storage-*.{avif,webp}`). Wcześniej było zdjęcie wnętrza self-storage z pomarańczowymi drzwiami boksów. Użytkownik chce wrócić do tamtego zdjęcia, ale przekolorować pomarańcz na markowy zielony `#88C22A` (HSL 86 65% 46%).

### Problem
Stara wersja zdjęcia (z pomarańczowymi drzwiami) została **nadpisana** w poprzednim kroku — pliki `src/assets/hero-storage-*.{avif,webp,jpg}` oraz `public/hero/hero-storage-*` zawierają już tylko nową wersję ze srebrnymi kontenerami. Nie mam dostępu do oryginalnego pliku z pomarańczowymi drzwiami w repo.

### Co potrzebuję od użytkownika
Żeby zrealizować zadanie, muszę dostać oryginalne zdjęcie wnętrza z pomarańczowymi drzwiami (jako upload). Wtedy:

### Kroki implementacji (po otrzymaniu zdjęcia)

1. **Pobranie uploadu** do `/tmp/hero-original.jpg` (`lov-copy`).

2. **Przekolorowanie pomarańczowego na zielony** — skrypt Python (Pillow + numpy):
   - Konwersja RGB → HSV.
   - Maska: pixele o odcieniu w zakresie pomarańczowym (H ≈ 10–35°) z saturacją >0.3.
   - Przesunięcie odcienia tych pixeli do zielonego brand (`H ≈ 78°` co odpowiada HSL 86° po normalizacji HSV/HSL — dokładną wartość dobiorę testowo, żeby trafić w `#88C22A`).
   - Lekkie zachowanie luminancji, żeby drzwi wyglądały naturalnie (nie płasko).

3. **Generacja wariantów responsywnych** (te same rozmiary co teraz):
   - `hero-storage-{640,1024,1536,1920}.{avif,webp}` 
   - Fallback `hero-storage.jpg` + `hero-storage.webp`.
   - Mobile-first: 640w AVIF priorytet (~8 KB target).

4. **Nadpisanie** plików w `src/assets/` oraz `public/hero/` (zachowuje obecną strukturę — bez zmian w `index.html` preload ani w `Index.tsx`).

5. **QA** — render każdego wariantu jako PNG i weryfikacja, że:
   - Drzwi są zielone w odcieniu zbliżonym do `#88C22A`.
   - Reszta zdjęcia (ściany, podłoga, oświetlenie) nie została przebarwiona.
   - Mobile 640w wygląda ostro.

### Co nie ulega zmianie
- `index.html` — preload nadal wskazuje `/hero/hero-storage-640.avif`.
- `src/pages/Index.tsx` — `<picture className="md:hidden">` zostaje bez zmian.
- `.hero-overlay` opacity — bez zmian.
- Desktop nadal pokazuje wideo.

### Pytanie do Ciebie
Prześlij oryginalne zdjęcie wnętrza self storage z pomarańczowymi drzwiami (jako upload). Jak tylko je dostanę, wykonam przekolorowanie i podmianę plików w jednym kroku.
