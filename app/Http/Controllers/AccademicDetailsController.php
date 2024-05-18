<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\accademic;

class AccademicDetailsController extends Controller
{
    public function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|string|email|max:255|unique:'.User::class,
        //     'password' => ['required', 'confirmed', Rules\Password::defaults()],
        // ]);
        
        $accademic = accademic::create([
            'edlevel' =>$request->edlevel,
            'country' =>$request->country,
            'Institution' =>$request->Institution,
             'category' =>$request->category,
             'program' =>$request->program,
             'awardDate' =>$request->awardDate,
             'certificate' =>$request->certificate,
        ]);
        // $user = User::create([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),
        // ]);
    }
}
