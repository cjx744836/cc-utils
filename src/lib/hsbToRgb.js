/*
* HSB颜色转RGB颜色
* @param { Number } h 0-360
* @param { Number } s 0-100
* @param { Number } b 0-100
* @return { Object } o.r o.g o.b
*/
function hsbToRgb( h, s, b ) {
    var v, p, q, t, r, g, hi, f;
    h = ( h >= 0 && h < 360 ) ? h : 0;
    s = ( s >= 0 && s <= 100 ) ? s / 100 : 0;
    b = ( b >= 0 && b <= 100 ) ? b / 100 : 0;
    hi = ( h / 60 ) % 6 | 0;
    f = h / 60 - hi;
    v = Math.round( b * 255 );
    p = Math.round( b * ( 1 - s ) * 255 );
    q = Math.round( b * ( 1 - f * s ) * 255 );
    t = Math.round( b * ( 1 - ( 1 - f ) * s ) * 255 );
    switch( hi ) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = v;
            b = p;
            break;
        case 2:
            r = p;
            g = v;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = v;
            break;
        case 4:
            r = t;
            g = p;
            b = v;
            break;
        case 5:
            r = v;
            g = p;
            b = q;
            break;
    }
    return {
        r: r,
        g: g,
        b: b
    };
}

export default hsbToRgb;