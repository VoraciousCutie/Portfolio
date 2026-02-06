// src/data/galleryData.ts
type RawGalleryItem = {
    filename: string;
    title: string;
    tags: string;
    altText: string
    description: string;
    date: string;
};

type GalleryItem = {
    filename: string;
    url: string;
    title: string;
    tags: string[];
    altText: string;
    description: string;
    date: string;
};

const GALLERY_URL = 'https://pub-7cf2e6bcc0aa4a8c870e8b5a818f15c8.r2.dev'

function processGallery(data: RawGalleryItem[]): GalleryItem[] {
    return data.map(item => {
        return {
            filename: item.filename,
            url: GALLERY_URL + '/' + item.filename,
            title: item.title,
            tags: item.tags.split(",").map(s => s.trim()),
            altText: item.altText,
            description: item.description,
            date: item.date,
        };
    })
}

const rawGallery: RawGalleryItem[] = [
    {
        filename: "MerryCrimbus2025[AltCrop2].png",
        title: "Christmas Wishes 2025",
        tags: "suggestive, artist:voraciouscutie, oc, oc only, oc:frozen star, pegasus, pony, belly, big belly, christmas, christmas stocking, clothes, coal, digestion, female, female pred, green background, hat, hearth's warming, hearth's warming eve, holiday, huge belly, implied death, impossibly large belly, looking at you, mare, merry christmas, same size vore, santa hat, simple background, socks, solo, solo female, stomach noise, tongue out, vore",
        description: "A quick little Christmas thing while I had time between holiday stuffs!\n\nFrozen Star wishes you a very 'Happy' Hearth's Warming~",
        altText: "Frozen Star sits back on her haunches a hoof on her thick hip, while looking smugly to the viewer with her tongue out. Her gut is full and soft, sitting in her lap. Churns and gurgles eminate from it's surface, and a skull and crossbones is depicted above it. She wears red and white socks and a santa hat. Next to her is a green stocking full of coal. Text reads: Happy Hearth's Warming From the Voracious Cuties.",
        date: "2025-12-25"
    }
];

export const gallery = processGallery(rawGallery);
