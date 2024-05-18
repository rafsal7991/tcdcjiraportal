<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class personalDetails extends Model
{
    use HasFactory;
    protected $table = 'personal_details';
    protected $fillable = [
         'fullname',
         'gender',
         'dob',
         'rob',
         'diob',
         'country',
         'maritial',
         'pic',
         'email',
    ];
}
