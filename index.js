let bountyData

async function getBountyData2(){
  bountyData2 = new Array()
  for(let i=2784;i<4428;i++){
    let bounty = await axios.get("https://gitcoin.co/api/v0.1/bounties/slim/?network=mainnet&standard_bounties_id=" + i.toString())
    console.log(bounty)
    bountyData2.push(bounty)
  }
}
