var users = [
  {
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
  },
  {
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
  },
];

const questionCollect = require("./questionsCollector");

const router = (app) => {
  app.get("/A1/TaoDe", (request, response) => {
    questionCollect.getQuestionByType(response, "A1", "Tạo đề");
  });
  app.get("/A1/KhaiNiemQuyTac", (request, response) => {
    questionCollect.getQuestionByType(response, "A1", "Khái niệm và quy tắc");
  });
  app.get("/A1/VanHoaDaoDuc", (request, response) => {
    questionCollect.getQuestionByType(response, "A1", "Văn hóa và đạo đức");
  });
  app.get("/A1/KiThuatLaiXe", (request, response) => {
    questionCollect.getQuestionByType(response, "A1", "Kĩ thuật lái xe");
  });
  app.get("/A1/BienBao", (request, response) => {
    questionCollect.getQuestionByType(response, "A1", "Biển báo");
  });
  app.get("/A1/SaHinh", (request, response) => {
    questionCollect.getQuestionByType(response, "A1", "Sa hình");
  });
};

module.exports = router;
