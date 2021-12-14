const AtmMachine = ({onChange}) => {
    return (
        <label className='label huge'>
            Deposit:
            <input type='number' onChange={onChange} />
            <input type='submit' value='Submit' />
        </label>
    );
};