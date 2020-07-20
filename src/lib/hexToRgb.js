/*
* 16进制值颜色转RGB值颜色
* @param { String } hex 16进制值#xxxxxx
* @return { Object } o.r, o.g, o.b
*/
function hexToRgb( hex ) {
    var hex = hex.replace( "#", "" );
    var len = hex.length;
    if( ( len != 3 && len != 6 ) || /[^0-9a-fA-F]/.test( hex ) ) {
        throw new Error( 'hextToRgb\'s param hex is invalid' );
    }
    var r, g, b;
    if( len == 3 ) {
        r = hex.charAt( 0 ) + hex.charAt( 0 );
        g = hex.charAt( 1 ) + hex.charAt( 1 );
        b = hex.charAt( 2 ) + hex.charAt( 2 );
    }
    if( len == 6 ) {
        r = hex.substr( 0, 2 );
        g = hex.substr( 2, 2 );
        b = hex.substr( 4, 2 );
    }
    return {
        r: parseInt( r, 16 ),
        g: parseInt( g, 16 ),
        b: parseInt( b, 16 )
    };
}

export default hexToRgb;