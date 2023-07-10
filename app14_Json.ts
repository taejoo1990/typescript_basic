//Json

const jsonString = `{
"name" : "Lee taejoo",
"age" : 30,
"bloodType" : "B"
}
`;

try {
  const myJson = JSON.parse(jsonString);
  console.log(typeof jsonString);
  console.log(myJson);
  console.log(JSON.stringify(myJson));
} catch (error) {
    console.log("正常に遷移できませんでした。最初からやりなおしてください。")
}
