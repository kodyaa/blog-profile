<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'about')->name('about');
Route::inertia('/services', 'services')->name('services');
Route::inertia('/portfolio', 'portfolio')->name('portfolio');
Route::inertia('/contact', 'contact')->name('contact');
