const Account = ({balance}) => {
    return (
        <h2 className='text-muted'>Your Balance&nbsp;
            <span className={balance === 0 ? 'text-danger' : 'text-success'}>$</span>
            <span className='text-warning'>{balance}</span>
        </h2>
    );
};