import React from "react";
import InfoBox from "./InfoBox";

const App = () => {

  const infoBox = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center"
}

  return (
    <div style={infoBox}>
      <InfoBox backgroundColor="#FFABFF" title="Riddle Me This..." subtitle="Do You Dare?" information="What 8 letter word can have a letter taken away and it still makes a word.  Take another letter away and it still makes a word. Keep on doing that until you have one letter left. What is the word?"/>

      <InfoBox backgroundColor="#827A2B" title="Dare you did!" subtitle="The answer is..." information="The word is starting! starting, staring, string, sting, sing, sin, in, I.  Cool,huh?"/>

      <InfoBox backgroundColor="#666258" title="Riddle Me This..." subtitle="Do You Dare?" information="The more you take, the more you leave behind. What am I?"/>

      <InfoBox backgroundColor="#CEE827" title="Dare you did!" subtitle="The answer is..." information="Footsteps."/>

      <InfoBox backgroundColor="#BA7D09" title="Riddle Me This..." subtitle="Do You Dare?" information="What has a head, a tail, is brown, and has no legs?"/>

      <InfoBox backgroundColor="#8BCBCC" title="Dare you did!" subtitle="The answer is..." information="A Penny.."/>

      <InfoBox backgroundColor="#FFABFF" title="Riddle Me This..." subtitle="Do You Dare?" information="Can you name three consecutive days without using the words Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday?"/>

      <InfoBox backgroundColor="#827A2B" title="Dare you did!" subtitle="The answer is..." information="Yesterday, Today, and Tomorrow."/>

      <InfoBox backgroundColor="#666258" title="Riddle Me This..." subtitle="Do You Dare?" information="What comes once in a minute, twice in a moment, but never in a thousand years?"/>

      <InfoBox backgroundColor="#CEE827" title="Dare you did!" subtitle="The answer is..." information="The letter M."/>
    </div>
  )
}
export default App;
