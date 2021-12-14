const AtmForm = ({onSubmit, onChange, isValidAmount, amount}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group m-2 row g-0 align-items-center justify-content-center'>
                    <div className='col-12 col-md-5 col-lg-3'>
                        <label htmlFor='deposit' className='d-none'>Deposit</label>
                        <div className='input-group shadow'>
                            <span className='input-group-text'>$</span>
                            <input type='number' className='form-control' id='deposit' name='deposit' onChange={onChange} value={amount} />
                            {amount < 0 
                                ?
                                    <button type='submit' className='btn btn-outline-danger ps-3 pe-3'>Withdraw</button>
                                :
                                    <button type='submit' className='btn btn-outline-success ps-4 pe-4'>Deposit</button>
                            }
                        </div>
                    {isValidAmount 
                        ?
                            <small id='deposit-help' className='form-text text-muted'>Every penny counts</small>
                        :
                            <small id='deposit-help-error' className='form-text text-danger'>You need more pennies</small>
                    }
                    </div>
                </div>
            </form>
        </div>
    )
}