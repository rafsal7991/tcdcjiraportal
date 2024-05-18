<?php
namespace App\Imports;

use Maatwebsite\Excel\Concerns\ToModel;

use App\Models\User;

class UserImport implements ToModel
{
    public function model(array $row)
    {
        return new User([
            'name' => $row[0], // Adjust column indexes
            'email' => $row[1],
            // Add more fields as needed
        ]);
    }
}
