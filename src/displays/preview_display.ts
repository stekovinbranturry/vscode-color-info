import {ColorInfoDisplay} from '../color_info_display'
import {ColorMatch} from '../color_extractor'
const Datauri = require('datauri');
/**
 * Displays a preview of a color color.
 */
class PreviewDisplay implements ColorInfoDisplay {
    name: string
    _width: number
    _height: number

    constructor(name: string, width: number, height: number) {
        this._width = width
        this._height = height

        this.name = name
    }

    display(match: ColorMatch) {
        const hex = match.color.toHexString()

        const datauri = new Datauri();
        const src = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="${this._width}px" height="${this._height}px" viewBox="0 0 ${this._width} ${this._height}" xml:space="preserve">
     <rect width="${this._width}" height="${this._height}" style="fill:${hex}" />
</svg>`;
        datauri.format('.svg', src);
        return `![](${datauri.content})`
    }
}

export const Preview = new PreviewDisplay('preview', 256, 64)

export const PreviewSquare = new PreviewDisplay('preview-box', 128, 128)
export const PreviewSquareXL = new PreviewDisplay('preview-box-xl', 256, 256)