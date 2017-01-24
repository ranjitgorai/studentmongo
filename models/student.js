var mongoose = require('mongoose');
 var StudentSchema = new mongoose.Schema({


                           regno : {
                           	          type : String,
                           	          unique : true,

                                    },
						   rollno: Number,

						    name :
							        {
							           firstname: String,
							           lastname: String,
							        },

						    age : Number,
						   collegename: String,
						     address :
							            {

							              city: String,
							              state: String,
							              country: String
							            }
                      });

 module.exports = mongoose.model("Student",StudentSchema);  //define model from studentschema like table create in mysql