 <?php
 add_filter( 'rest_albums_query', function( $args ) {
	$fields = array( 'genre', 'songs' );

	foreach ( $fields as $field ) {
			if ( isset( $_GET[ $field ] ) && ! empty( $_GET[ $field ] ) ) {
					$args['meta_query'][] = array(
							'key'   => $field,
							'value' => esc_sql( $_GET[ $field ] ),
					);
			}
	}
	return $args; 
} );


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
function get_user_roles($object, $field_name, $request) {
	return get_userdata($object['id'])->roles;
  }
  
  add_action('rest_api_init', function() {
	register_rest_field('user', 'roles', array(
	  'get_callback' => 'get_user_roles',
	  'update_callback' => null,
	  'schema' => array(
		'type' => 'array'
	  )
	));
  });
  function register_my_menus() {
	register_nav_menus(
	  array(
		'primary' => __( 'primary' ),
		'extra-menu' => __( 'Extra Menu' )
	  )
	);
  }
  add_action( 'init', 'register_my_menus' );
?>
