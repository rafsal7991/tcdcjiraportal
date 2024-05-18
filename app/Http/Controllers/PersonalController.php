<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\personalDetails;
use App\Models\fetchPersonalDetails;
use DB;
use Illuminate\Support\Facades\Auth; 
use Inertia\Inertia;

class PersonalController extends Controller
{
    public function store(Request $request){
        if (Auth::check()) {
            $userEmail = Auth::user()->email;
            $personalDetails = personalDetails::create([
                'fullname' =>$request->fullname,
                'gender' =>$request->gender,
                'dob' =>$request->dob,
                 'rob' =>$request->rob,
                 'diob' =>$request->diob,
                 'country' =>$request->country,
                 'maritial' =>$request->maritial,
                 'pic' =>$request->pic,
                 'email' => $userEmail,
            ]);
            // Now you can use $userEmail
        } else {
        
        }
        

    
}
public function getData()
{
    $details = personalDetails::all();
    return Inertia::render('Personaldetails', [
        'details' => $details,
    ]);
}

  public function show($id)
  {
      $personalDetails = PersonalDetails::find($id);
  
      return Inertia::render('Personaldetails', [
          'personalDetails' => $personalDetails,
      ]);
  }


  public function UpdatePdetails(Request $request)
  {
      // Get the authenticated user's email
      $userEmail = auth()->user()->email;
  
      // Find the existing personal details by the user's email
      $personalDetails = PersonalDetails::where('email', $userEmail)->first();
  
      // Check if the personal details exist
      if (!$personalDetails) {
          return response()->json(['message' => 'Personal details not found'], 404);
      }
  
      // Update the personal details with the new data
      $personalDetails->update([
          'fullname' => $request->fullname,
          'gender' => $request->gender,
          'dob' => $request->dob,
          'rob' => $request->rob,
          'diob' => $request->diob,
          'country' => $request->country,
          'maritial' => $request->maritial,
          'pic' => $request->pic,
      ]);
  
      // Optionally, you can return a success response
    //   return response()->json(['message' => 'Personal details updated successfully'], 200);
  }
  
  //test
  public function gettestData()
{
    $details = personalDetails::all();
    return Inertia::render('testPersonaldetails', [
        'details' => $details,
    ]);
}
  

}


