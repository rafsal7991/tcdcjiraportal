<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\UserImport; // Import the UserImport class
use App\Models\User;

class Admincontroller extends Controller
{
    public function Home(User $user)
    {
        
        if ($user->hasRole('admin') || $user->hasRole('staff')) {
            return Inertia::render('Admin/AdminPanel');
        } else {
            return redirect()->route('dashboard')->with('error', 'Unauthorized access.');
        }
    }
    

      public function importExcel(Request $request)
      {
          $file = $request->file('excel_file');
  
          // Use the UserImport class to import data
          Excel::import(new UserImport, $file);
  
          // Handle success or error
      }
}

