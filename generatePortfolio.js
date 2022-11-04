const process = require('process');
const [, , API_KEY, o] = process.argv;

if (API_KEY == null) {
    throw new Error('API_KEY must be supplied as the first argument!');
    process.exit();
}

if (o == null) {
    throw new Error('A write location must be provided')
}

function processImages(images) {
    if (images == null) {
        return [];
    }
    
    const map = [];
    images.forEach(i => {
        map.push(({
            url: {
                full: i.url,
                thumb: i.thumbnails.large.url
            }
        }))
    })

    return map;
}

const Airtable = require('airtable');

const base = new Airtable({ apiKey: API_KEY }).base('appWkaU51sN6sVS1W');
const imageRecords = [];
base('Master List')
    .select({ view: 'Portfolio' })
    .eachPage(function page(records, fetchNextPage) {
        records.forEach(r => {
            imageRecords.push({
                id: r.getId(),
                title: r.fields.Name,
                type: r.fields.Type,
                description: r.fields.Notes,
                year: r.fields.Date.split('-')[0],
                store: r.fields.Store,
                images: [
                    ...processImages(r.fields['Primary Image']),
                    ...processImages(r.fields['Other Images']),
                ]
            })
        })
        
        try {
            fetchNextPage();
        } catch (e) {
            return;
        }
    }, function done(err) {
        console.log('Done', err);

        if (err) {
            return;
        }

        const fs = require('fs');
        fs.writeFileSync(o, JSON.stringify({ items: imageRecords }));
    })