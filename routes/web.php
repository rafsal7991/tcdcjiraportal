<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
// routes/web.php or routes/api.php




/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/admin-panel', function () {
    return Inertia::render('Admin/AdminPanel');
})->middleware(['auth', 'verified'])->name('admin.panel');

Route::get('/Example', function () {
    return Inertia::render('Example');
})->middleware(['auth', 'verified'])->name('Example');





Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/personaldetails', function () {
//     return Inertia::render('Personaldetails');
// })->middleware(['auth', 'verified'])->name('Personaldetails');



Route::get('/accademic', function () {
    return Inertia::render('AccademicDetails');
})->middleware(['auth', 'verified'])->name('accademic');
Route::get('/UserEdit', function () {
    return Inertia::render('UserEdit');
})->middleware(['auth', 'verified'])->name('UserEdit');

Route::get('/users/{user}/edit', 'UserController@edit')->name('users.edit');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('AddAccademic', [AccademicDetailsController::class, 'store']);
    Route::post('AddPdetails', [PersonalController::class, 'store']);
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::post('/admin/send-reset-password-link', 'UserController@sendResetPasswordLink');

});

Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    // Routes accessible by admin role
    Route::get('/admin-dashboard', 'AdminController@index');
    // ...
});

Route::middleware(['auth', 'verified', 'role:user'])->group(function () {
    // Routes accessible by user role
    Route::get('/user-dashboard', 'UserController@index');
    // ...
});





require __DIR__.'/auth.php';
