# Release Checklist

## Application

- `npm run typecheck` must pass before release.
- `npm run build` must pass before release.
- `next.config.js` does not ignore TypeScript build errors.

## Category integrity

- Deleting a category removes it from the category list immediately.
- Products that referenced a deleted category are cleared locally (`category_id` and `categories`) immediately.
- Product filters, Overview, Inventory, global search, and Kasir therefore stop showing the deleted category without a browser refresh.
- Editing a category refreshes the category/product relationship through the normal data load.

## Database

- `supabase/schema.sql` is the canonical schema.
- The legacy four-argument `create_sale(uuid,text,numeric,jsonb)` overload is no longer present in the canonical schema.
- `supabase/APPLY-FINAL-FIX.sql` drops that legacy overload for existing databases and keeps the five-argument function compatible through its default `p_note` value.

## Package hygiene

- Build cache `tsconfig.tsbuildinfo` is excluded.
- `next.config.js.bak` is excluded.
- `.bolt/` is excluded from the release package.
- Duplicate historical SQL copies are excluded from the root release package.

## CSS organization

The large global stylesheet is now split into ordered CSS layers under `styles/`, while `app/globals.css` remains the single import manifest. The order is intentional so the existing responsive/premium overrides keep their behavior without leaving one 4,000-line file to maintain.
