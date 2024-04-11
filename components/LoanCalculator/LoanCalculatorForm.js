import React from 'react';

const LoanCalculatorForm = () => {
    return (
        <div className="loan-calculator ptb-100">
            <div className="container">
                <div className="calculator-form">
                    <div className="text">
                        <span>Loan Calculator</span>
                        <h3>How much do you need?</h3>
                    </div>

                    <form>
                        <div className="form-group">
                            <label>How much is your case worth?</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>How much money do you need now?</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>What is the attorney fees percentage?</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>How many months is the case expected to last?</label>
                            <input type="text" className="form-control" />
                        </div>
                    
                        <div className="calculator-btn">
                            <button type="submit" className="btn btn-one">View schedule</button>
                            <button type="submit" className="btn btn-two">Download schedule</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoanCalculatorForm;