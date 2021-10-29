function Deposit(){
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(ctx.users[0].balance);
  const [depositAmount, setDepositAmount] = React.useState(0);

  const depositHandler = () => {
      console.log(balance);
      setBalance(depositAmount + balance);
      ctx.users[0].balance = balance;
      console.log(balance);

  }
  return (
      <>
          <h1>Deposit</h1>
          <div class="card">
              <div class="card-body">
                  <h1>Balance <br/>{balance}</h1> <br/>
                  <h1>Deposit amount</h1> <br/>
                  <div class="input-group mb-3">
                      <span class="input-group-text">$</span>
                      <input type="input" onChange={e => setDepositAmount(parseInt(e.currentTarget.value))} className="form-control" aria-label="Dollar amount (with dot and two decimal places)"></input>
                      <span class="input-group-text">.00</span>
                      <button type="submit" className="btn btn-light" onClick={depositHandler}>Submit</button>
                      <a>{balance}</a>
                  </div>
              </div>
          </div>
      </>
  )
}


