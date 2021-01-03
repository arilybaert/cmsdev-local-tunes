 <?php

function my_customize_rest_cors() {
	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
	add_filter( 'rest_pre_serve_request', function( $value ) {
		header( 'Access-Control-Allow-Origin: *' );
		header( 'Access-Control-Allow-Methods: GET,  POST, PUT, DELETE, PATCH' );
		header( 'Access-Control-Allow-Credentials: true' );
		header( 'Access-Control-Expose-Headers: Link', false );
		header( 'Access-Control-Allow-Headers:  Authorization, X-WP-Nonce,Content-Type, X-Requested-With' );


		return $value;
	} );
}
function register_rest_images(){
    register_rest_field( array('post'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}

add_action('rest_api_init', 'register_rest_images' );
add_action( 'rest_api_init', 'my_customize_rest_cors', 15 );

/* 
@TODO: Fix Filter to search based in specific genre
*/

add_filter( 'rest_query_vars', function( $valid_vars ) {
    return array_merge( $valid_vars, array( 'meta_query', 'meta_key', 'meta_value' ) );
} );
add_filter( 'rest_album_query', function( $args, $request ) {
    $key   = $request->get_param( 'meta_key' );
    $value = $request->get_param( 'meta_value' );

    if ( 'genre' == $key && ! empty( $value ) ) {
        $args['meta_query'] = array(
            array(
                'key'     => $key,
                'value'   => $value,
                'compare' => '=',
            )
        );      
    }

    return $args;
}, 10, 2 );
?>
