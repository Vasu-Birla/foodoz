<?php

use Illuminate\Database\Seeder;
use Vtlabs\Banner\Models\Banner;

class BannerTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker\Factory::create();

        $banners = [
            [
                'title' => ['en' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
                'meta' => ['scope' => 'ecommerce'],
                'sort_order' => 1,
                'image_url' => 'https://verbosetechlabs.com/images/kabra/Banner0.png'
            ],
            [
                'title' => ['en' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
                'meta' => ['scope' => 'ecommerce'],
                'sort_order' => 1,
                'image_url' => 'https://verbosetechlabs.com/images/kabra/Banner1.png'
            ],
            [
                'title' => ['en' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
                'meta' => ['scope' => 'ecommerce'],
                'sort_order' => 1,
                'image_url' => 'https://verbosetechlabs.com/images/kabra/Banner2.png'
            ]
        ];

        foreach ($banners as $banner) {
            $bannerObject = Banner::create([
                'title' => $banner['title'],
                'meta' => $banner['meta'],
                'sort_order' => $banner['sort_order']
            ]);

            // banner image
            $bannerObject->addMediaFromUrl($banner['image_url'])->toMediaCollection("images");
        }
    }
}
