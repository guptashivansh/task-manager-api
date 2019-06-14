const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'gupta.shivansh98@gmail.com',
        subject:'Thanks For joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
        
    })
}

const sendCancelEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from: 'gupta.shivansh98@gmail.com',
        subject: 'We are sorry for you',
        text:`Kyu kia cancel, ${name}. Let us know how we could be better.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}