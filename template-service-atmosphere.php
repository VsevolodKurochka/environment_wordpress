<?php
/**
 * Template Name: Услуга - Охрана атмосферного воздуха
 */

$context = Timber::context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'template-service-atmosphere.twig' ), $context );