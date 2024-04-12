import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {

    const {name, email, number, subject, text} = req.body;
    
    try {
        const {data, error} = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'michaelekimyan@gmail.com',
            subject: 'Contact from kaz.com',
            html: `<p>Name: ${name}</p><br><br/><p>Email: ${email}</p><br><br/><p>Number: ${number}</p><br><br/><p>Subject: ${subject}</p><br><br/><p>Text: ${text}</p>`
        });
        
        if (error) {
            console.log(error);
            res.status(500).send("Error");
        } else {
            console.log(data);
            res.status(200).send("Email send successfully")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
}