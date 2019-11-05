<?php
/* Template Name: Front Page */ 
// $media = json_decode(file_get_contents('http://beamitup.test/site/wp-json/instagram-scraper/v1/media'));
$media = json_decode(file_get_contents('http://beamitup.nl/wp-json/instagram-feeder/media'));

$context = Timber::get_context();
$context['page'] = new TimberPost();
$context['instagram'] = $media;
$templates = array( 'pages/home.twig' );

Timber::render( $templates, $context );

?>