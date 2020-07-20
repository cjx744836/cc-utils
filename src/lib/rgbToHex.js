/*
* RGB值颜色转成十六进制值#xxxxxx颜色
* @param { Number } r 0-255
* @param { Number } g 0-255
* @param { Number } b 0-255
* @return { String } #xxxxxx
*/
function rgbToHex( r, g, b ) {
    var r = r & 0xFF;
    var g = g & 0xFF;
    var b = b & 0xFF;
    r = r < 16 ? "0" + r.toString( 16 ) : r.toString( 16 );
    g = g < 16 ? "0" + g.toString( 16 ) : g.toString( 16 );
    b = b < 16 ? "0" + b.toString( 16 ) : b.toString( 16 );
    return "#" + r + g + b;
}

export default rgbToHex;