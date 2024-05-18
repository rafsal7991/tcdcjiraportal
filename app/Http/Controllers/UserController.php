<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Password;
// UserController.php

class UserController extends Controller
{
   

    public function sendResetPasswordLink(Request $request)
    {
        // Validate the request data
        $request->validate([
            'email' => 'required|email',
        ]);
    
        $user = User::where('email', $request->email)->first();
    
        // Check if the user is authorized to send the reset password link
        $this->authorize('sendResetPasswordLink', $user);
    
        // Send the reset password link
        $response = Password::sendResetLink($request->only('email'));
    
        if ($response == Password::RESET_LINK_SENT) {
            return response()->json(['message' => 'Reset password link sent successfully']);
        } else {
            return response()->json(['message' => 'Failed to send reset password link'], 500);
        }
    }
    

    public function edit(User $user)
    {
        return Inertia::render('Admin/UserEdit', [
            'user' => $user,
        ]);
    }
    public function index()
    {
        $users = User::all(); // Fetch users from the database
        return Inertia::render('Admin/UserList', [
            'users' => $users,
        ]);
    }

    public function someAction(Request $request)
{
    $user = auth()->user();

    // Check if the user has the 'admin' or 'staff' role
    $user->authorizeRoles(['admin', 'staff']);

    // Perform the action for authorized users
    // For example:
    return view('some.view');
}


    // ... Other methods ...
}

