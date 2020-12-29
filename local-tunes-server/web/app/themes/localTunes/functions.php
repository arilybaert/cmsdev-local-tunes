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

add_action( 'rest_api_init', 'my_customize_rest_cors', 15 );
?>
