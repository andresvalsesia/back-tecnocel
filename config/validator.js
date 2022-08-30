const joi=require('joi');

const validator=(req,res,next) => {
   const schema= joi.object({
        name: joi.string()
            .min(3)
            .max(20)
            .required()
            .messages({
                'string.min': '"Name": min 3 characters',
                'string.max': '"Name": max 30 characters' 
            }),
        surname: joi.string()
            .min(3)
            .max(20)
            .required()
            .messages({
                'string.min': '"Surname": min 3 characters',
                'string.max': '"Surname": max 30 characters'
        }),
        email: joi.string()
            .email({minDomainSegments:2})
            .required()
            .messages({
                'string.email': '"Email": incorrect format'
            }),
        photoUser: joi.string()
            .min(3)
            .required()
            .messages({
                'string.min' : '"Photo": incorrect format'
            }),
         country: joi.string()
            .min(3)
            .max(25)
            .required()
            .messages({
                'string.min' : '"Country": min 3 characters',
                'string.max' : '"Country": max 25 characters'
            }),
         password: joi.string()
            .min(8)
            .max(30)
            .pattern(new RegExp('[a-zA-Z0-9]'))
            .required()
            .messages({
                'string.min' : '"Password": min 8 characters',
                'string.max' : '"Password": max 30 characters'
            }),

         from: joi.string()
            .required()
          
           
   })
   const validation=schema.validate(req.body.userData,{abortEarly:false})
   if(validation.error){
    return res.json({success:false,from:'validator',message:validation.error.details,test:validation})
   }
   next()
}
module.exports=validator;