//import { csv } from 'd3-fetch';

async function run() {
    const process = require('process');
    const [, , i, o] = process.argv;

    const fs = require('fs');
    const { parse } = require('csv-parse/sync')
    
    const lines = fs.readFileSync(i)
        .toString('utf-8')
        .replace(/\ufeff/gu, '')    // an invisible character that can't be used in object keys
        .replace(/\u2003/gu, '')    // an invisible character
    const records = parse(lines, {
        columns: true,
        skip_empty_lines: true
      })

    const converted = records.map(r => ({
        id: r['Name'],
        title: r['Name'],
        type: 'Printmaking',
        description: r.Notes,
        year: r.Date.split('-')[0],
        store: r.Store,
        images: constructImageItems([
            ...extractURL(r['Primary Image']),
            ...extractURL(r['Other Images'])
        ])
    }))

    fs.writeFileSync(o, JSON.stringify({ items: converted }));
}

function extractURL(image) {
    const regex = new RegExp(/\(([^)]+)\)/);
    const split = image.split(',');
    return split.map(s => {
        const match = s.match(regex);
        
        if (match && match.length > 1) {
            return match[1];
        } else {
            return '';
        }
    });
}

function constructImageItems(urls) {
    return urls.map(u => ({
        url: {
            full: u
        }
    }))
}

run()