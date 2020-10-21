<?php
/**
 * Template Name: Услуга - Установление и сокращение санитарно-защитных зон
 */

$context = Timber::context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'template-service-protection.twig' ), $context );