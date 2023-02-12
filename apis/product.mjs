import express from 'express';
import { userModel, productModel } from './../dbRepo/model.mjs'
import mongoose from 'mongoose';


import multer from 'multer';
// import bucket from "./../firebaseAdmin/fireebase-Admin.mjs";
import fs from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';






const storageConfig = multer.diskStorage({

    filename: function (req, file, cb) {

        console.log("mul-file: ", file);
        cb(null, `${new Date().getTime()}-${file.originalname}`)
    }
})
var uploadMiddleware = multer({ storage: storageConfig })


const router = express.Router()

router.post('/product', uploadMiddleware.any(), (req, res) => {
    try {



        const body = req.body;
        const token = jwt.decode(req.cookies.Token)

        if ( // validation
            !body.text
        ) {
            res.status(400).send({
                message: "required parameters missing",
            });
            return;
        }

        // console.log("req.body: ", req.body);
        // console.log("req.files: ", req.files);

        // // console.log("uploaded file name: ", req.files[0].originalname);
        // console.log("file type: ", req.files[0].mimetype);
        // console.log("file name in server folders: ", req.files[0].filename);
        // console.log("file path in server folders: ", req.files[0].path);

  
        bucket.upload(
            req.files[0].path,
            {
                destination: `tweetPictures/${req.files[0].filename}`, // give destination name if you want to give a certain name to file in bucket, include date to make name unique otherwise it will replace previous file with the same name
            },
        

            function (err, file, apiResponse) {
                if (!err) {

                    file.getSignedUrl({
                        action: 'read',
                        expires: '03-09-2999'
                    }).then((urlData, err) => {
                        if (!err) {
                            console.log("public downloadable url: ", urlData[0]) // this is public downloadable url 

                          try {
                                fs.unlinkSync(req.files[0].path)
                                //file removed
                            } catch (err) {
                                console.error(err)
                            }
                            productModel.create({
                                item: body.text,
                                unit: body.text,
                                price: body.text,
                                description: body.text,
                                imageUrl: urlData[0],
                                owner: new mongoose.Types.ObjectId(token._id)
                            },
                                (err, saved) => {
                                    if (!err) {
                                        console.log("saved: ", saved);

                                        res.send({
                                            message: "tweet added successfully"
                                        });
                                    } else {
                                        console.log("err: ", err);
                                        res.status(500).send({
                                            message: "server error"
                                        })
                                    }
                                })
                        }
                    })
                } else {
                    console.log("err: ", err)
                    res.status(500).send();
                }
            });



    } catch (error) {
        console.log("error: ", error);
    }
})
export default router