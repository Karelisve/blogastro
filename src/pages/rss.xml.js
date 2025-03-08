import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'My Dev/Designer life | Blog',
        description: 'My journey learning to programing and design, sharing my thoughts and experiences.',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}