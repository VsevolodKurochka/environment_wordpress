<?php
/**
 * Template Name: Главная
 */

$context = Timber::context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'template-home.twig' ), $context );