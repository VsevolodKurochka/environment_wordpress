<?php
/**
 * Template Name: Услуга - Оценка влияния
 */

$context = Timber::context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'template-service-rating.twig' ), $context );