import { Resend } from 'resend';

const resend = new Resend('re_5utYkhKS_EuwCenb1ar2ik5XcmWBNaftN');

export default async (req, res) => {

    const {
        first_name,
        email,
        phone,
        last_name,
        state,
        case_type
    } = req.body;
    
    try {
        const {data, error} = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'michaelekimyan@gmail.com',
            subject: 'Funding Application from kaz.com',
            html: `
                <p>First Name: ${first_name}</p>
                <p>Last Name: ${last_name}</p>
                <p>Email: ${email}</p>
                <p>Phone Number: ${phone}</p>
                <p>State: ${state}</p>
                <p>Case Type: ${case_type}</p>
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