
class VoterVotes {
  constructor (private readonly totalVoter: number, private readonly votesValid: number, private readonly votesWhite: number, private readonly votesNull: number) {}

  getPercentVotesValid (): number {
    return (this.votesValid / this.totalVoter) * 100
  }

  getPercentVotesWhite (): number {
    return (this.votesWhite / this.totalVoter) * 100
  }

  getPercentVotesNull (): number {
    return (this.votesNull / this.totalVoter) * 100
  }
}

export { VoterVotes }
