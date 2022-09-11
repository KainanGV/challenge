import { VoterVotes } from '.'

test('freteGratis é verdadeiro para 200', () => {
  const voterVotes = new VoterVotes(1000, 800, 150, 50)

  expect(voterVotes.getPercentVotesValid()).toEqual(80)
  expect(voterVotes.getPercentVotesWhite()).toEqual(15)
  expect(voterVotes.getPercentVotesNull()).toEqual(5)
})
