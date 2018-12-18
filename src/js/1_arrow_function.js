//寺子屋1
//uncle という名前の変数に、アロー関数で作成した関数を代入してください。
//この関数は、"Uncle JavaScript" という文字列を return するものにします。
//最後に、uncle という変数に bind された関数を実行して、その返り値を console.log() で確認し、"Uncle JavaScript" になっているか確認しましょう。

const getUncle = () => {
  return "Uncle JavaScript";
};

var uncle = getUncle();
console.log(uncle);
