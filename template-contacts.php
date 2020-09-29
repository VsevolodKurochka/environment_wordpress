<?php
/**
 * Template Name: Контакты
 */

$context = Timber::context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'template-contacts.twig' ), $context );