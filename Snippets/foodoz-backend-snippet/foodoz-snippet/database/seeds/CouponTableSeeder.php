<?php

use Illuminate\Database\Seeder;
use Vtlabs\Doctor\Models\Hospital;
use Vtlabs\Ecommerce\Models\Coupon;

class CouponTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker\Factory::create();

        $coupons = [
            [
                'title' => ['en' => 'Test Coupon'],
                'detail' => ['en' => 'Test Coupon Details'],
                'code' => 'TEST100',
                'reward' => 10,
                'type' => 'percent',
                'expires_at' => '2020-12-31'
            ],
            [
                'title' => ['en' => 'Test Coupon 2'],
                'detail' => ['en' => 'Test Coupon 2 Details'],
                'code' => 'TEST200',
                'reward' => 20,
                'type' => 'percent',
                'expires_at' => '2020-12-31'
            ],
            [
                'title' => ['en' => 'Test Coupon 3'],
                'detail' => ['en' => 'Test Coupon 3 Details'],
                'code' => 'TEST300',
                'reward' => 30,
                'type' => 'percent',
                'expires_at' => '2020-12-31'
            ],
        ];

        foreach($coupons as $coupon) {
            Coupon::create($coupon);
        }
    }
}
