<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(SettingTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(PaymentMethodTableSeeder::class);
        $this->call(CouponTableSeeder::class);
        $this->call(FaqTableSeeder::class);
        $this->call(BannerTableSeeder::class);
    }
}
