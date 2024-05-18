<html>
<body>

<?php 
use Illuminate\Http\Request;
use App\Models\personalDetails;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

//     function(Request $request)
//     {
$name = $_GET['name'];
echo $name;
$selectOption = $_GET['gender'];
echo $selectOption;
$nida = $_GET['nida'];
echo $nida;
$phone = $_GET['phone'];
echo $phone;
$maritialStatus = $_GET['maritialStatus'];
echo $maritialStatus;
$placeBirth = $_GET['placeBirth'];
echo $placeBirth;
$originality = $_GET['originality'];
echo $originality;
$email = $_GET['email'];
echo $placeBirth;
$post = $_GET['post'];
echo $post;

$personalDetails = new PersonalDetails;
        $personalDetails->phone = $_GET['phone'];
        $personalDetails->email = $_GET['email'];
        $personalDetails->post = $_GET['post'];
        $personalDetails->placeBirth = $_GET['placeBirth'];
        $personalDetails->nida = $_GET['nida'];
        $personalDetails->name = $_GET['name'];
        $personalDetails->originality = $_GET['originality'];
        $personalDetails->gender= $_GET['gender'];
        $personalDetails->maritialStatus = $_GET['maritialStatus'];
// if use encripted pasword u can use code below
        // $personalDetails->pasword = Hash::make($request->input('name'));
        $personalDetails->save();


?>
</body>
</html>