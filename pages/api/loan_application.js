import { Resend } from 'resend';

const resend = new Resend('re_5utYkhKS_EuwCenb1ar2ik5XcmWBNaftN');

export default async (req, res) => {

    const {
        loan_amount,
        first_name,
        dob,
        address,
        email,
        phone,
        designation,
        purpose,
        income,
        last_name,
        gender,
        country,
        email_alt,
        company_name,
        company_address,
        type,
    } = req.body;
    
    try {
        const {data, error} = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'michaelekimyan@gmail.com',
            subject: 'Loan Application from kaz.com',
            html: `
                <p>Loan Amount: ${loan_amount}</p>
                <p>First Name: ${first_name}</p>
                <p>Last Name: ${last_name}</p>
                <p>Date Of Birth: ${dob}</p>
                <p>Address: ${address}</p>
                <p>Email: ${email}</p>
                <p>Alternative Email: ${email_alt}</p>
                <p>Phone Number: ${phone}</p>
                <p>Designation: ${designation}</p>
                <p>Purpose: ${purpose}</p>
                <p>Income: ${income}</p>
                <p>Gender: ${gender}</p>
                <p>Country: ${country}</p>
                <p>Company Name: ${company_name}</p>
                <p>Company Address: ${company_address}</p>
                <p>Loan Type: ${type}</p>
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