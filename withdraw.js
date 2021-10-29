function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(ctx.users[0].balance);
  const [withdrawAmount, setWithdrawAmount] = React.useState(0);

  const withdrawHandler = () => {
      console.log(balance);
      setBalance(balance - withdrawAmount);
      ctx.users[0].balance = balance;
      console.log(balance);

  }
  return (
      <>
          <h1>Withdraw</h1>
          <div class="card">
              <div class="card-body">
                  <h1>Balance <br/>{balance}</h1> <br/>
                  <h1>Withdraw amount</h1> <br/>
                  <div class="input-group mb-3">
                      <span class="input-group-text">$</span>
                      <input type="input" onChange={e => setWithdrawAmount(parseInt(e.currentTarget.value))} className="form-control" aria-label="Dollar amount (with dot and two decimal places)"></input>
                      <span class="input-group-text">.00</span>
                      <button type="submit" className="btn btn-light" onClick={withdrawHandler}>Submit</button>
                      <a>{balance}</a>
                  </div>
              </div>
          </div>
      </>
  )
}


