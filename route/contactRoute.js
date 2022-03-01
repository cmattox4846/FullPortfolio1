const router = require('express').Router()

const res = require('express/lib/response')
const nodemailer = require('nodemailer')

router.post('/contact',(req, response)=>{
    let data = req.body
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
    return response.json({msg: "please fill all the fields"})
    }

    let smtpTransporter = nodemailer.createTransport(
        {
        service: 'Gmail',
        port:465,
        auth:{
            user:'cmattox4846@gmail.com',
            pass:''
        }
    })

    let mailOptions ={
        from:data.email,
        to:'cmattox4846@gmail.com',
        subject:`Message from ${data.name}`,
        html:`

        <h3> Information <h3/>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}<p/>


`
    }

    smtpTransporter.sendMail(mailOptions,(error)=>{
        try {
            if(error) return response.status(400).json({msg: 'Please fill all the fields'})
            response.status(200).json({msg: 'Thank you for contacting me!'})
            
        } catch (error) {
            if(error) return response.status(500).json({msg: "There is a server error"})
            
        }
    })
 
})

module.exports=router