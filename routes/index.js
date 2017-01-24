var express = require('express');
var router = express.Router();

var Student = require("../models/student"); //student.js


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/student/add',function(req,res,next){

	res.render('add');
});


router.post('/student/add',function(req,res,next){

	var data = req.body;

	//console.log(student);

	var student = new Student(data);
	student.save(function(err,result){      //save  in database
						if(err){  

							return res.json({error: true , reason: err});

                         }

                         return res.json({error : false});

					   



	    }) ;        

	//res.json(data);
});

router.get('/student/list',function(req,res,next){

	Student.find({})     // Student model
	 .exec(function(err,students){                    // students = results
	 	if(err) {}
       
        res.render("list",{students : students});
        //return res.json(students);

	 });
});



router.get('/student/edit/:studentID',function(req,res,next){

	Student.findOne({_id : req.params.studentID})
	       .exec(function(err , student){

	       	if(err) {} 

	       	return res.render("edit",{student : student})
	       });
});


router.put('/student/edit/:studentId',function(req,res,next){

	

   //var student = JSON.parse(req.body.studentData);
   var student =  req.body;
   console.log(student);
  

  Student.findByIdAndUpdate(req.params.studentId, student, { new: true }, function (err, tank) {
  if (err) return handleError(err);
  res.send(tank);
   });

});






router.delete('/student/:studentId',function(req,res,next){

	

	Student.findByIdAndRemove(req.params.studentId,function(err){
			
			if(err) {
				return res.json({error: true})
			} 
			return res.json({error: false})






	});
});



module.exports = router;
