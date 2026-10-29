import Script from 'next/script'

// Odoo Live Chat (im_livechat) widget — channel 2 on the Zanga Odoo Online instance.
// Odoo's embed is two deferred scripts: the per-channel loader followed by the shared
// embed assets. next/script loads them after hydration so they don't block first paint.
const ODOO_URL = 'https://zanga-african-metrics.odoo.com'
const CHANNEL_ID = 2

export default function LiveChat() {
    return (
        <>
            <Script
                src={`${ODOO_URL}/im_livechat/loader/${CHANNEL_ID}`}
                strategy="afterInteractive"
            />
            <Script
                src={`${ODOO_URL}/im_livechat/assets_embed.js`}
                strategy="afterInteractive"
            />
        </>
    )
}
