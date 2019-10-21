<?php
/* Template Name: Projecten */ 
$context = Timber::get_context();

$args = array(
    'post_type' => 'project', // Get post type project
    'posts_per_page' => -1, // Get all posts
    'orderby' => array(
        'date' => 'DESC' // Order by post date
));

$query = Timber::get_posts($args);

$context['page'] = new TimberPost();
$context['projects'] = $query;

$templates = array( 'pages/projecten.twig' );

Timber::render( $templates, $context );

?>