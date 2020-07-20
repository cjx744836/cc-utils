/*
* RGB颜色转HSB颜色
* @param { Number } r 0-255
* @param { Number } g 0-255
* @param { Number } b 0-255
* @return { Object } o.h o.s o.b
*/
function rgbToHsb( r, g, b ) {
    var h, s, v, max, min, ds;
    r = r & 0xFF;
    g = g & 0xFF;
    b = b & 0xFF;
    max = Math.max( r, Math.max( g, b ) );
    min = Math.min( r, Math.min( g, b ) );
    ds = max - min;
    v = Math.round( max / 255 * 100 )  ;
    s = max == 0 ? 0 : Math.round( ds / max * 100 ) ;
    if( ds == 0 )
        h = 0;
    else {
        if( max == r && g >= b )
            h = Math.round( ( g - b ) * 60 / ds );
        else if( max == r && g < b )
            h = Math.round( ( g - b ) * 60 / ds ) + 360;
        else if( max == g )
            h = Math.round( ( b - r ) * 60 / ds ) + 120;
        else if( max == b )
            h = Math.round( ( r - g ) * 60 / ds ) + 240;
    }
    return {
        h: h,
        s: s,
        b: v
    };
}

export default rgbToHsb;