<?php

use Illuminate\Database\Seeder;
use Vtlabs\Doctor\Models\Hospital;
use Vtlabs\Payment\Models\PaymentMethod;

class PaymentMethodTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker\Factory::create();

        $paymentMethods = [
            [
                'slug' => 'cod',
                'title' => ['en' => 'Cash On Delivery'],
                'enabled' => true,
                'type' => 'postpaid'
            ],
            [
                'slug' => 'wallet',
                'title' => ['en' => 'Wallet'],
                'enabled' => true,
                'type' => 'prepaid'
            ],
        ];
        
        foreach($paymentMethods as $paymentMethod) {
            PaymentMethod::create($paymentMethod);
        }
    }
}
