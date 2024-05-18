<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    
        public function handle($request, Closure $next, $role)
        {
            if (!$request->user() || !$request->user()->hasRole($role)) {
                return redirect('/'); // Redirect unauthorized users
            }
        
            return $next($request);
        }
        
    
}
