const App = () => {
    const [amount, setAmount] = React.useState(0);
    const [balance, setBalance] = React.useState(0);
    const [isValidAmount, setIsValidAmount] = React.useState(true);
    const changeHandler = e => {
        setAmount(e.target.value);
        return;
    };
    const handleSubmit = event => {
        event.preventDefault();
        const newBalance = Number(balance) + Number(amount);
        if (newBalance < 0) {
            setIsValidAmount(false);
            return;
        }
        setIsValidAmount(true);
        setBalance(Number(balance) + Number(amount));
    };
    return (
        <div className='App row align-items-center justify-content-center text-center'>
            <div className='col col-12'>
                <Account balance={balance}/>
                <AtmForm onSubmit={handleSubmit} onChange={changeHandler} isValidAmount={isValidAmount} amount={amount} />
            </div>
        </div>
    );
};