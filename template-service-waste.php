<?php
/**
 * Template Name: Услуга - Услуги в сфере обращения с отходами
 */

$context = Timber::context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'template-service-waste.twig' ), $context );