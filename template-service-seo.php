<?php
/**
 * Template Name: Услуга - Стратегическая экологическая оценка (СЭО)
 */

$context = Timber::context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'template-service-seo.twig' ), $context );