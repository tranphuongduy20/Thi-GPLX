const axios = require("axios");
const url =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/thigplx-ofrhb/service/thiGPLXapi/incoming_webhook/questionAPI";
const generator = require("./testGenerator");
const heapSort = require("./heapSort");

exports.getQuestionByType = function (response, license, type) {
  var data = [];
  const source = [];
  switch (type) {
    case "Tạo đề":
      Array.prototype.push.apply(source, [
        axios.get(encodeURI(url + "?type=Khái niệm")),
        axios.get(encodeURI(url + "?type=Quy tắc")),
        axios.get(encodeURI(url + "?type=Tốc độ và khoảng cách")),
        axios.get(encodeURI(url + "?type=Văn hóa và đạo đức")),
        axios.get(encodeURI(url + "?type=Kĩ thuật lái xe")),
        axios.get(encodeURI(url + "?type=Biển báo")),
        axios.get(encodeURI(url + "?type=Sa hình")),
      ]);
      break;
    case "Khái niệm và quy tắc":
      Array.prototype.push.apply(source, [
        axios.get(encodeURI(url + "?type=Khái niệm")),
        axios.get(encodeURI(url + "?type=Quy tắc")),
        axios.get(encodeURI(url + "?type=Tốc độ và khoảng cách")),
      ]);
      break;
    case "Văn hóa và đạo đức":
      Array.prototype.push.apply(source, [
        axios.get(encodeURI(url + "?type=" + type)),
      ]);
    case "Kĩ thuật lái xe":
      Array.prototype.push.apply(source, [
        axios.get(encodeURI(url + "?type=" + type)),
      ]);
      break;
    case "Biển báo":
      Array.prototype.push.apply(source, [
        axios.get(encodeURI(url + "?type=" + type)),
      ]);
      break;
    case "Sa hình":
      Array.prototype.push.apply(source, [
        axios.get(encodeURI(url + "?type=" + type)),
      ]);
      break;
    default:
    // code block
  }
  axios
    .all(source)
    .then(
      axios.spread((rep1, rep2, rep3, rep4, rep5, rep6, rep7, rep8) => {
        switch (type) {
          case "Tạo đề":
            generator.testGenerator(
              response,
              license,
              rep1,
              rep2,
              rep3,
              rep4,
              rep5,
              rep6,
              rep7
            );
            break;
          case "Khái niệm và quy tắc":
            Array.prototype.push.apply(data, rep1.data);
            Array.prototype.push.apply(data, rep2.data);
            Array.prototype.push.apply(data, rep3.data);
            response.send(heapSort.sortByOrder(data));
            break;
          case "Văn hóa và đạo đức":
            Array.prototype.push.apply(data, rep1.data);
            response.send(heapSort.sortByOrder(data));
            break;
          case "Kĩ thuật lái xe":
            Array.prototype.push.apply(data, rep1.data);
            response.send(heapSort.sortByOrder(data));
            break;
          case "Biển báo":
            Array.prototype.push.apply(data, rep1.data);
            response.send(heapSort.sortByOrder(data));
            break;
          case "Sa hình":
            Array.prototype.push.apply(data, rep1.data);
            response.send(heapSort.sortByOrder(data));
            break;
          default:
          // code block
        }
      })
    )
    .catch((error) => {
      console.log(error);
    });
};
