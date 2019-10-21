<?php

$site_url = get_site_url();

if ( wp_redirect($site_url . '/projecten') ) {
    exit;
}