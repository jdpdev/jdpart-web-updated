import portfolio from './portfolio.json'

const ImageType = {
    Printmaking: 'Printmaking',
    Painting: 'Painting',
    Drawing: 'Drawing'
}

export class ImageService {
    static getPrints() {
        const items = [];
        const data = portfolio.items;

        data.forEach(item => {
            if (item.type === ImageType.Printmaking) {
                items.push(new ImageData(item));
            }
        })

        return items;
    }   

    static getPaintings() {
        const items = [];
        const data = portfolio.items;

        data.forEach(item => {
            if (item.type === ImageType.Painting) {
                items.push(new ImageData(item));
            }
        })

        return items;
    }
    
    static getDrawings() {
        const items = [];
        const data = portfolio.items;

        data.forEach(item => {
            if (item.type === ImageType.Drawing) {
                items.push(new ImageData(item));
            }
        })

        return items;
    }

    static getImage(id) {
        const data = portfolio.items;

        for (let image of data) {
            if (image.id === id) {
                return new ImageData(image);
            }
        }

        return null;
    }

    static getImageBackPath(image) {
        if (isPrint(image)) {
            return "/printmaking";
        } else if(isPainting(image)) {
            return "/painting";
        } else {
            return "/drawing";
        }
    }
}

export class ImageData {
    _data = null;

    constructor(data, fullRoot, thumbRoot) {
        if (data == null) {
            throw new Error("Must provide image data to ImageData");
        }

        for (let i = 0; i < data.images.length; i++) {
            const img = data.images[i];
            img.url.full = fullRoot + img.url.full;

            if (img.url.thumb) {
                img.url.thumb = thumbRoot + img.url.thumb;
            }
        }

        this._data = data;
    }

    get id() {
        return this._data.id;
    }

    get src() {
        if (this._data.imgur) {
            return `https://i.imgur.com/${this._data.imgur.id}.jpg`;
        }

        return null;
    }

    get images() {
        return this._data.images;
    }

    get thumb() {
        if (this._data.images[0].imgur) {
            return `https://i.imgur.com/${this._data.images[0].imgur.thumb}.jpg`;
        }

        if (this._data.images[0].url) {
            return this._data.images[0].url.thumb;
        }

        return null;
    }

    get title() {
        return this._data.title;
    }

    get description() {
        return this._data.description;
    }

    get year() {
        return this._data.year;
    }

    get store() {
        return this._data.store;
    }

    get next() {
        return getNext(this);
    }

    get previous() {
        return getPrevious(this);
    }

    get type() {
        return this._data.type;
    }
}

function isPrint(image) {
    return image.type === ImageType.Printmaking;
}

function isPainting(image) {
    return image.type === ImageType.Painting;
}

function getNext(image) {
    let list = [];

    if (isPrint(image)) {
        list = ImageService.getPrints();
    } else if (isPainting(image)) {
        list = ImageService.getPaintings();
    } else {
        list = ImageService.getDrawings();
    }

    const index = list.findIndex((item) => item.id === image.id);

    if (index === -1 || index === list.length) {
        return null;
    } else {
        return list[index + 1];
    }
}

function getPrevious(image) {
    let list = [];

    if (isPrint(image)) {
        list = ImageService.getPrints();
    } else if (isPainting(image)) {
        list = ImageService.getPaintings();
    } else {
        list = ImageService.getDrawings();
    }

    const index = list.findIndex((item) => item.id === image.id);

    if (index === -1 || index === 0) {
        return null;
    } else {
        return list[index - 1];
    }
}