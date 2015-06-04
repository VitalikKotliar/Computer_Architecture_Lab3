/**
 * Created by vitalik on 02.06.15.
 */

var labaApp = angular.module("labaApp", []);
var gl = {};


//controller
labaApp.controller("labaCtrl", function ($scope) {
    $scope.lolka = "dlddl";

    $(document).ready(function(){
    //#get all
    $('#example').dataTable( {
        "ajax": '/films',
         type: 'GET'
    } );

    $.ajax({
        url: '/films',
        type: 'GET',
        success: function (result) {
            //alert(result);
            console.log(result);
        }
    });
});

});
var AddFunc = function () {
    var director = $("#director").val();
    var id = $("#id").val();
    var year = $("#year").val();
    var title = $("#title").val();
    $.ajax({
        url: '/film/'+id+'/'+director+'/'+year+'/'+title,
        type: 'PUT',
        success: function (result) {
            console.log("add success");
        }
    });
};

var EditFunc = function () {
    var title = $("#edit").val();
    var id = $("#id_edit").val();
    $.ajax({
        url: '/film/'+id+'/'+title,
        type: 'POST',
        success: function (result) {
            console.log("edit success");
        }
    });
};




var DeleteFunc = function () {
    var id = $("#id_delete").val();
    $.ajax({
        url: '/film/'+id,
        type: 'DELETE',
        success: function (result) {
            console.log("delete success");
        }
    });
};
var GetAll = function () {
    $.ajax({
        url: '/films',
        type: 'GET',
        success: function (result) {
            alert(result);
        }
    });
};
