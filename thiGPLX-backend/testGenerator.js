const heapSort = require("./heapSort");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randomAnswer(object) {
  const clone = { ...object };
  clone.answer = [...shuffle(object.answer)];
  return clone;
}

exports.testGenerator = function (
  response,
  license,
  rep1,
  rep2,
  rep3,
  rep4,
  rep5,
  rep6,
  rep7
) {
  const data = [];
  switch (license) {
    case "A1":
      //Khai niem 1 cau
      data.push(randomAnswer(rep1.data[getRandomInt(rep1.data.length)]));

      //Toc do khoang cach 1 cau
      data.push(randomAnswer(rep3.data[getRandomInt(rep3.data.length)]));

      //Quy tac 6 cau và Ki thuat 1 cau và Cau diem liet 1 cau
      const randomLiet = 0; //getRandomInt(2);
      const quytacList = shuffle([...Array(rep2.data.length).keys()]);
      const kithuatList = shuffle([...Array(rep5.data.length).keys()]);
      switch (randomLiet) {
        case 0:
          var qualified = false; //array includes Liet question
          var i = 0;

          //Ghep dap an vao quy tac
          while (qualified == false) {
            if (rep2.data[quytacList[i]].important == true) {
              for (let j = i; j < i + 7; j++) {
                data.push(randomAnswer(rep2.data[quytacList[j]]));
              }
              qualified = true;
            }
            i++;
          }

          //Ghep dap an vao ki thuat
          data.push(randomAnswer(rep5.data[kithuatList[0]]));

          break;

        case 1:
          var qualified = false; //array includes Liet question
          var i = 0;

          //Ghep dap an vao quy tac
          for (let j = 0; j < 6; j++) {
            data.push(randomAnswer(rep2.data[quytacList[j]]));
          }

          //Ghep dap an vao ki thuat
          while (qualified == false) {
            if (rep5.data[kithuatList[i]].important == true) {
              for (let j = i; j < i + 2; j++) {
                data.push(randomAnswer(rep5.data[kithuatList[j]]));
              }
              qualified = true;
            }
            i++;
          }

          break;
      }

      //Van hoa dao duc 1 cau
      data.push(randomAnswer(rep4.data[getRandomInt(rep4.data.length)]));

      //Bien bao 7 cau
      const bienbaoList = shuffle([...Array(rep6.data.length).keys()]);
      for (let j = 0; j < 7; j++) {
        data.push(randomAnswer(rep6.data[bienbaoList[j]]));
      }

      //Sa hinh 7 cau
      const sahinhList = shuffle([...Array(rep7.data.length).keys()]);
      for (let j = 0; j < 7; j++) {
        data.push(randomAnswer(rep7.data[sahinhList[j]]));
      }
      response.send(heapSort.sortByOrder(data));
      break;
  }
};
