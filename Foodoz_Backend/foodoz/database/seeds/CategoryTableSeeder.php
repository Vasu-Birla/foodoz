<?php

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Vtlabs\Category\Models\Category;

class CategoryTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker\Factory::create();

        $categories = [
            [
                'slug' => 'seeds',
                'title' => ['en' => 'Seeds'],
                'meta' => ['scope' => 'ecommerce'],
                'sort_order' => 1,
                'image_url' => 'https://verbosetechlabs.com/images/kabra/seeds.png'
            ],
            [
                'slug' => 'vegetables',
                'title' => ['en' => 'Vegetables'],
                'meta' => ['scope' => 'ecommerce'],
                'sort_order' => 2,
                'image_url' => 'https://verbosetechlabs.com/images/kabra/veg.png'
            ],
            [
                'slug' => 'dry-fruits',
                'title' => ['en' => 'Dry Fruits'],
                'meta' => ['scope' => 'ecommerce'],
                'sort_order' => 3,
                'image_url' => 'https://verbosetechlabs.com/images/kabra/dryfruits.png'
            ],
            [
                'slug' => 'grains',
                'title' => ['en' => 'Grains'],
                'meta' => ['scope' => 'ecommerce'],
                'sort_order' => 4,
                'image_url' => 'https://verbosetechlabs.com/images/kabra/grains.png'
            ],
        ];

        foreach ($categories as $category) {
            $categoryObject = Category::create([
                'slug' => $category['slug'],
                'title' => $category['title'],
                'meta' => $category['meta'],
                'sort_order' => $category['sort_order']
            ]);

            // category images
            $categoryObject->addMediaFromUrl($category['image_url'])->toMediaCollection("images");
        }
    }
}
