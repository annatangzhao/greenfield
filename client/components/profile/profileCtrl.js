var app = angular.module('nList.profile', ['ngFileUpload']);

app.controller('ProfileController', [ '$scope', '$http', 'Upload', '$window', function($scope, $http, Upload, $window){

  // var load = function(){
  //   $http.get('/users/updateUser').success(function(res){
  //     $scope.userUpdate = res;
  //
  //   })
  // }
  // load();
  $scope.findPicName = function (){
    var pic = document.getElementById('file').files[0];
    $scope.picName = pic;
    console.log(pic.name, 'findPicName');
    console.log($scope.picName);
    return pic.name;
  }

  this.submit = function(){
      if (this.upload_form.file.$valid && this.file) {
          this.upload(this.file);
      }
      $scope.findPicName();
  }

  this.upload = function (file) {
      Upload.upload({
          url: 'http://localhost:3000/upload',
          data:{file:file}
      })
  };

  $scope.editProfile = function(){
    var data = {
      id:1,
      name: 'mike',
      email: 'big O',
      password: 'safjdh',
      photoPath: 'http://localhost:3000/uploads/'+$scope.findPicName()
    }
    $http.put('/users/updateUser', data).success(function(res){
      //place photo back up here
      console.log(res);
    })
  }

}])
