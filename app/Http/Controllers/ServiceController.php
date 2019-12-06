<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Service;

class ServiceController extends Controller
{
    public function index()
    {
        
        return Service::all();
    }

    public function show($id)
    {
        return Service::find($id);
    }

    public function store(Request $request)
    {
        return Service::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);
        $service->update($request->all());
        
        return $service;
    }


    public function delete(Request $request, $id)
    {
      $service = Service::findOrFail($id);
      $service->delete();


      return 204;
    }
}
