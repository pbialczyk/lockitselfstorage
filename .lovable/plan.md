
## Plan: Optymalizacja wideo hero (punkt 1)

Cel: na mobile (<768px) NIE ładować pliku `/video/hero-bg.mp4` w ogóle, na desktop opóźnić jego start do `requestIdleCallback` (zamiast obecnego `setTimeout(2000)`), żeby nie konkurował o pasmo z LCP image.

### Stan obecny (`src/pages/Index.tsx`)
```tsx
const [showVideo, setShowVideo] = useState(false);
useEffect(() => {
  const timer = setTimeout(() => setShowVideo(true), 2000);
  return () => clearTimeout(timer);
}, []);
```
Problem: wideo ładuje się też na mobile po 2s; `setTimeout` uruchamia się nawet gdy główny wątek jest jeszcze zajęty hydratacją/parsowaniem.

### Zmiany

**1. `src/pages/Index.tsx` — logika ładowania wideo**

Zastąpić obecny `useEffect` warunkową logiką:
- Na mount sprawdzić `window.matchMedia('(min-width: 768px)').matches` — jeżeli mobile, w ogóle nie ustawiamy `showVideo`.
- Na desktop użyć `window.requestIdleCallback(() => setShowVideo(true), { timeout: 3000 })` z fallbackiem do `setTimeout(2000)` w przeglądarkach bez idle callback (Safari).
- Zwrócić cleanup, który anuluje `cancelIdleCallback` / `clearTimeout`.
- Dodać atrybut `preload="none"` do `<video>`, żeby przeglądarka nie pobierała metadanych dopóki element nie zostanie zamontowany.
- Dodać `poster` (obecny hero image lub pominąć — image jest już pod spodem w `<picture>`).

**2. Skutki uboczne / sprawdzenia**
- Na mobile użytkownik widzi statyczny hero (już zoptymalizowany AVIF/WebP responsywnie) — wizualnie OK, plik wideo (~kilka MB) w ogóle nie startuje.
- Na desktop wideo dociąża się dopiero gdy główny wątek jest bezczynny → LCP nie konkuruje z wideo o pasmo.
- Brak zmian w `index.html`, brak zmian w innych komponentach.

### Szkic kodu
```tsx
useEffect(() => {
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;
  if (!isDesktop) return;

  let idleId: number | undefined;
  let timeoutId: number | undefined;

  if ('requestIdleCallback' in window) {
    idleId = window.requestIdleCallback(() => setShowVideo(true), { timeout: 3000 });
  } else {
    timeoutId = window.setTimeout(() => setShowVideo(true), 2000);
  }

  return () => {
    if (idleId !== undefined && 'cancelIdleCallback' in window) {
      window.cancelIdleCallback(idleId);
    }
    if (timeoutId !== undefined) clearTimeout(timeoutId);
  };
}, []);
```
A w JSX dodać `preload="none"` do `<video>`.

### TypeScript
`requestIdleCallback` jest w lib `dom`, więc bez dodatkowych typów. Użyję `'requestIdleCallback' in window` jako runtime guard (Safari nadal nie ma).

### Test po wdrożeniu
- DevTools mobile (390px) → Network: brak requestu `hero-bg.mp4`.
- DevTools desktop (≥768px) → wideo ładuje się ~1–3s po idle.
- Brak regresji wizualnej — fallback `<picture>` zostaje.
