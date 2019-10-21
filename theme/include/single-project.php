<?php

$context = Timber::get_context();
$context['post'] = new TimberPost();

$args = array(
    'post_type' => 'project', // Get post type project
    'posts_per_page' => -1, // Get all posts
    'orderby' => array(
        'date' => 'DESC' // Order by post date
));

$query = Timber::get_posts($args);
$curr_id = $context['post']->id;
$curr_index = 0;
$first_index = 0;
$second_index = 0;
$projects = array();

if (sizeof($query) > 0) {
    for ($i=0; $i < sizeof($query); $i++) { 
        if ($query[$i]->id == $curr_id) {
            $curr_index = $i;
            break;
        }
    }

    $first_index = ($curr_index + 1) % sizeof($query);
    $second_index = ($curr_index + 2) % sizeof($query);

    array_push($projects, $query[$first_index]);
    array_push($projects, $query[$second_index]);
}

$context['other_projects'] = $projects;
$templates = array( 'posts/project.twig' );

Timber::render( $templates, $context );

?>