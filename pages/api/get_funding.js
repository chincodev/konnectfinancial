import { Resend } from 'resend';

const resend = new Resend('re_5utYkhKS_EuwCenb1ar2ik5XcmWBNaftN');

export default async (req, res) => {

    const {
        fullname,
        phone_number,
        email,
        date,
        amount,
        received,
        readed
    } = req.body;
    
    try {
        const {data, error} = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'michaelekimyan@gmail.com',
            subject: 'Get Funding from kaz.com',
            html: `
                <p>Full name: ${fullname}</p>
                <p>Phone Number: ${phone_number}</p>
                <p>Email: ${email}</p>
                <p>Date Of Accident: ${date}</p>
                <p>Funding Amount Requested: ${amount}</p>
                <p>Have You Received Funding Before?: ${received}</p>
                <p>Readed Plicies and TOS: ${readed}</p>
            `
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