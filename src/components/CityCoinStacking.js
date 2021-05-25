export function CityCoinStacking() {

  return (
    <>
      <h4>Stack CityCoins</h4>
      <p>Stacking CityCoin locks up the set amount in the contract for a number of reward cycles. Once these reward cycles pass, CityCoin owners are eligible to withdraw their CityCoins in addition to STX commited by miners during that reward cycle, proportionate to the amount Stacked within that cycle.</p>
      <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Amount in STX" placeholder="Amount in CityCoin" />
        <div class="input-group-append">
          <span class="input-group-text">MIA</span>
        </div>
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Number of Reward Cycles" placeholder="Number of Reward Cycles" />
      </div>
      <button className="btn btn-block btn-primary" type="button">Stack</button>
      <hr />
      <h4>Claim Stacking Rewards</h4>
      <p>Available STX: 250</p>
      <p>Available CityCoins:</p>
      <ul>
        <li>250,000 MIA</li>
      </ul>
      <button className="btn btn-block btn-primary" type="button">Claim Stacking Rewards</button>
    </>
  );
}