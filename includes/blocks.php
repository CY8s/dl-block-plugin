<?php

function cydlwp_register_dev_blocks() {

	$dependencies = array(
		'wp-blocks',
		'wp-element',
		'wp-editor',
		'wp-i18n',
		'wp-compose',
		'lodash'
	);

	// Register JavasScript File build/index.js
	wp_register_script(
		'cydlwp-editor-scripts',
		CYDLWP_URL . 'build/js/editor.js',
    $dependencies,
    filemtime( CYDLWP_DIR . 'build/js/editor.js' )
	);

	wp_register_style(
		'cydlwp-editor-styles',
		CYDLWP_URL . 'build/css/editor.css',
		array(),
		filemtime( CYDLWP_DIR . 'build/css/editor.css' )
	);

	// Register block
	register_block_type( 'cydlwp/description-list',
    array(
      'editor_script' => 'cydlwp-editor-scripts',
      'editor_style' => 'cydlwp-editor-styles',
    )
  );
}

add_action('after_setup_theme', 'cydlwp_register_dev_blocks');