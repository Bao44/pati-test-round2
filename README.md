# PATI Test Round 2

**Link bài test**:

```bash
https://pati-test-round2.vercel.app/
```

**Hoặc**:
Click vào [đây][1] để xem.

[1]: https://pati-test-round2.vercel.app/

**Clone mã nguồn**:

```bash
git clone https://github.com/Bao44/pati-test-round2.git
cd pati-test-round2
```

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** CSS Transitions & Tailwind utility classes
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

## Key Features

### 1. Hero Section

- **Infinite Loop Image Slider:** Custom-built slider with seamless looping and synchronized thumbnail navigation.
- **Swipe Support:** Full touch event handling for mobile devices.
- **Product Bundle Selector:** Interactive pricing cards with dynamic selection states.

### 2. Video Stories Carousel

- **Native-like Scroll:** Smooth horizontal scrolling with snap physics.
- **Smart Controls:**
  - Drag-to-scroll functionality on Desktop.
  - Auto-hiding Play/Pause buttons.
  - Progress bar indicator.
- **Performance:** Optimized video loading with `poster` images.

### 3. Customer Reviews

- **Sorting & Filtering:** Sort by rating, date, or media type.
- **Pagination:** Client-side pagination logic.
- **Review Form:** Interactive modal for submitting reviews with file upload UI.

### 4. Interactive Components

- **Accordion FAQ:** Smooth expand/collapse animations.
- **Modals:** Nutritional Information popup with body scroll locking.
- **Infinite Logo Marquee:** Auto-scrolling press logos using CSS masks.

## Project Structure

The project follows a **Feature-based** architecture for better scalability and maintainability.

```text
src/
├── app/                   # Next.js App Router pages
├── components/
│   ├── layout/            # Global layout (Header, Footer)
│   ├── ui/                # Atomic components (Buttons, Modals, Stars)
│   └── sections/          # Page sections (Feature-based)
│       ├── hero/          # Hero logic (Carousel, Bundle Selector)
│       ├── feedback/      # Reviews & Expert Advice
│       ├── science-proof/ # Ingredients & Stats
│       ├── stories/       # Video Stories Carousel
│       └── ...
├── lib/
│   ├── data.ts            # Static data (mock API response)
│   └── utils.ts           # Helper functions (cn, formatters)
└── types/                 # TypeScript interfaces
```
