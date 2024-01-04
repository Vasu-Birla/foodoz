<?php

use Illuminate\Database\Seeder;
use Vtlabs\Faq\Models\Faq;

class FaqTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker\Factory::create();

        $faqs = [
            [
                'title' => 'Lorem ipsum',
                'short_description' => 'Lorem ipsum dolor sit amet.',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ],
            [
                'title' => 'Lorem dolor',
                'short_description' => 'Lorem dolor ipsum dolor sit amet.',
                'description' => 'Lorem dolor ipsum sit amet, consectetur adipiscing elit.',
            ]
        ];

        foreach ($faqs as $faq) {
            $faqObject = Faq::create([
                'title' => $faq['title'],
                'short_description' => $faq['short_description'],
                'description' => $faq['description']
            ]);
        }
    }
}
