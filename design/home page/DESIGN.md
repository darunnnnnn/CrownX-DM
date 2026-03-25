```markdown
# Design System Specification: High-End Editorial SaaS

## 1. Overview & Creative North Star: "The Digital Curator"
The Creative North Star for this design system is **The Digital Curator**. Unlike standard SaaS platforms that prioritize "utility over all," this system treats every screen as a gallery wall. It is designed to feel intentional, high-end, and custom-built, reflecting the sophisticated nature of a creative digital marketing agency.

We break the "template" look through **Intentional Asymmetry** and **Tonal Depth**. By moving away from rigid 1px borders and generic grids, we use white space as a structural element. Elements should overlap slightly, text should vary wildly in scale, and surfaces should feel like physical layers of light and glass rather than flat pixels.

---

### 2. Colors & Surface Architecture
Our palette centers on a deep, obsidian core with a high-energy violet accent (`primary: #afa2ff`). 

#### The "No-Line" Rule
Standard UI relies on lines to separate content. This design system prohibits it. Boundaries must be defined solely through:
1.  **Background Color Shifts:** Use `surface` (#0e0e11) as your base. Use `surface-container-low` (#131316) or `surface-container-high` (#1f1f23) to define distinct sections.
2.  **Generous Negative Space:** Use our spacing scale (e.g., `16` or `20`) to create "visual moats" between content blocks.

#### Surface Hierarchy & Nesting
Think of the UI as a series of physical layers.
*   **Base:** `surface` (#0e0e11)
*   **Nested Elements:** Place a `surface-container` card inside a `surface-container-low` section to create natural, soft depth.
*   **The Glass & Gradient Rule:** For primary CTAs or high-impact hero sections, transition from `primary` (#afa2ff) to `primary-container` (#a292ff) to create a "vibrating" color field that feels more premium than a flat fill.

---

### 3. Typography: The Editorial Scale
We use a high-contrast pairing: **Manrope** for the voice (Headlines/Display) and **Inter** for the function (Body/Labels).

*   **Display (Manrope):** Use `display-lg` (3.5rem) and `display-md` (2.75rem) with tight letter-spacing (-2%) to create an authoritative, "magazine-style" feel. Headlines should feel "heavy" compared to the ethereal background.
*   **Body (Inter):** Use `body-lg` (1rem) for most copy. It provides a clean, functional contrast to the expressive headlines.
*   **Labels:** Use `label-md` in uppercase with increased letter-spacing (+5%) for metadata or small headers to create a "technical" luxury aesthetic.

---

### 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than heavy shadows.

*   **The Layering Principle:** Stack `surface-container-lowest` (#000000) cards on top of `surface-container-low` (#131316) backgrounds. The contrast creates a "recessed" or "elevated" look without a single line.
*   **Ambient Shadows:** Use shadows only for floating elements (menus, modals). They must be ultra-diffused: `blur: 40px`, `opacity: 6%`, using a tinted version of `on-surface` (#f0edf1) to mimic natural light refraction.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` (#48474b) at **15% opacity**. It should be barely felt, never seen.
*   **Glassmorphism:** Apply a `backdrop-blur` (12px-20px) to elements using `surface-bright` (#2c2c30) at 60% opacity. This makes the UI feel integrated into the environment.

---

### 5. Components

#### Buttons
*   **Primary:** Filled with `primary` (#afa2ff), text in `on-primary` (#2c0097). Use `rounded-full` (9999px) for a sleek, modern pill shape.
*   **Secondary:** `surface-container-highest` (#25252a) with a subtle "Ghost Border."
*   **Tertiary:** Ghost style; no background, `primary` text, shifts to a subtle `surface-variant` on hover.

#### Cards & Containers
*   **The No-Divider Rule:** Forbid 1px dividers in lists or cards. Use `spacing-10` (3.5rem) or a background shift to `surface-container-lowest` to separate items.
*   **Rounding:** Apply `rounded-xl` (3rem) for large section containers and `rounded-lg` (2rem) for standard cards. This high radius creates the "friendly yet professional" vibe.

#### Input Fields
*   Use `surface-container-highest` for the field background.
*   On focus, the field should not get a heavy border; instead, use a subtle `primary` glow (ambient shadow) and change the label color to `primary`.

#### Floating Action Chips
*   Used for filtering or tags. Use `surface-bright` with a `backdrop-blur` to make them feel like pieces of glass hovering over the content.

---

### 6. Do's and Don'ts

**Do:**
*   **Do** use asymmetrical layouts (e.g., a headline on the left with a large spacing gap before the body text on the right).
*   **Do** use the `primary-dim` and `tertiary-dim` tokens for hover states to maintain a sophisticated color depth.
*   **Do** embrace massive amounts of whitespace (`spacing-20` or `spacing-24`) for hero sections.

**Don't:**
*   **Don't** use 100% black (#000000) for text. Use `on-surface` (#f0edf1) for readability.
*   **Don't** use 1px solid borders to "box in" content. It breaks the premium, expansive feel.
*   **Don't** use standard "drop shadows." If it looks like a default shadow, it's too heavy.
*   **Don't** cram content. If a section feels crowded, double the spacing token.

---
**Director's Note:** This design system is about the *space between* the elements as much as the elements themselves. Treat every pixel with the intent of a high-end physical product.```