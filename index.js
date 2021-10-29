function Spa() {
  return (
    <HashRouter>
      <NavBar/>
     
    <script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-router/umd/react-router.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js" crossorigin></script>

      <UserContext.Provider value={{users:[{name:'Dave',email:'Dave@Davescape.com',password:'secret',balance:1000}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
