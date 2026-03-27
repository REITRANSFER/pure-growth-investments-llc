# Next.js Survey Template v2

REI Transfer survey landing page template — v2 design with hero, philosophy,
trust section, FAQ, sales letter, and video embed support.

## Placeholders

Replace these strings when personalizing for a client:

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `__COMPANY_NAME__` | Company display name | `Acme Home Buyers` |
| `__PHONE_DISPLAY__` | Formatted phone | `(555) 123-4567` |
| `__PHONE_HREF__` | Digits for tel: link | `5551234567` |
| `__COMPANY_EMAIL__` | Contact email | `info@acme.com` |
| `__OWNER_NAME__` | Founder name | `John Smith` |
| `__SERVICE_AREA__` | Primary market | `Phoenix, AZ` |
| `__COMPANY_DOMAIN__` | Website domain | `acmehomebuyers.com` |
| `__META_TITLE__` | Page title | `Sell Your House Fast` |
| `__META_DESCRIPTION__` | Meta description | `Get a cash offer...` |
| `__ACCENT_COLOR__` | Hex accent color | `#2563EB` |
| `__ACCENT_HOVER__` | Darker hover color | `#1D4ED8` |
| `__SERVICE_STATES__` | State codes array | `"AZ", "NV"` |

## Environment Variables (set on Vercel)

| Variable | Description |
|----------|-------------|
| `WEBHOOK_URL` | n8n webhook URL |
| `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` | Google Places API key |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Facebook Pixel ID |
| `NEXT_PUBLIC_SERVICE_AREAS` | Service area JSON |
| `NEXT_PUBLIC_VIDALYTICS_ACCOUNT_ID` | Video embed account |
| `NEXT_PUBLIC_VIDALYTICS_EMBED_ID` | Video embed ID |
