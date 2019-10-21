<?php
/* Template Name: Text layout */ 
$context = Timber::get_context();
$context['page'] = new TimberPost();

$templates = array( 'pages/text.twig' );

Timber::render( $templates, $context );

?>