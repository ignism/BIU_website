<?php
/* Template Name: Wat we doen */ 

$context = Timber::get_context();
$context['page'] = new TimberPost();
$templates = array( 'pages/wat-we-doen.twig' );

Timber::render( $templates, $context );

?>