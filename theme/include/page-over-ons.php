<?php
/* Template Name: Over ons */ 

$context = Timber::get_context();
$context['page'] = new TimberPost();
$templates = array( 'pages/over-ons.twig' );

Timber::render( $templates, $context );

?>