// const { request, response } = require("express");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const openaiPackage = require("openai");
const configuration = new openaiPackage.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new openaiPackage.OpenAIApi(configuration);

let categories = JSON.parse(fs.readFileSync("categoryData.json", "utf-8"));

const updateCategoriesFile = () => {
  fs.writeFileSync("categoryData.json", JSON.stringify(categories));
};

const app = express();

const bodyParser = require("body-parser");
const { response } = require("express");

const jsonParser = bodyParser.json();

app.use(cors());

const port = 8080;
// let categories = [];
const articles = [
  {
    id: 1,
    name: "Иргэд 2020 оноос төрийн үйлчилгээг цаг алдалгүй авч эхэлснээр үнэт цаг хугацаа болон мөнгөө хэмнэх олон давуу байдлууд дагаад бий болсон. Харин эдгээр төрийн үйлчилгээг цахимаар авахын тулд “ДАН” системд иргэн өөрийгөө таниулан баталгаажуулах шаардлагатай байдаг.",
    imageUrl:
      "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-05/23b0b0b9caaa07ee409b693da9bf9003.jpeg?h=999fdb2a&itok=NI7EBwBG",
  },
  {
    id: 2,
    name: "Иргэд 2020 оноос төрийн үйлчилгээг цаг алдалгүй авч эхэлснээр үнэт цаг хугацаа болон мөнгөө хэмнэх олон давуу байдлууд дагаад бий болсон. Харин эдгээр төрийн үйлчилгээг цахимаар авахын тулд “ДАН” системд иргэн өөрийгөө таниулан баталгаажуулах шаардлагатай байдаг.",
    imageUrl:
      "https://www.state.gov/wp-content/uploads/2019/04/China-2107x1406.jpg",
  },
  {
    id: 3,
    name: "Иргэд 2020 оноос төрийн үйлчилгээг цаг алдалгүй авч эхэлснээр үнэт цаг хугацаа болон мөнгөө хэмнэх олон давуу байдлууд дагаад бий болсон. Харин эдгээр төрийн үйлчилгээг цахимаар авахын тулд “ДАН” системд иргэн өөрийгөө таниулан баталгаажуулах шаардлагатай байдаг.",
    imageUrl: "https://static.dw.com/image/61713800_1006.jpg",
  },
  {
    id: 4,
    name: "Иргэд 2020 оноос төрийн үйлчилгээг цаг алдалгүй авч эхэлснээр үнэт цаг хугацаа болон мөнгөө хэмнэх олон давуу байдлууд дагаад бий болсон. Харин эдгээр төрийн үйлчилгээг цахимаар авахын тулд “ДАН” системд иргэн өөрийгөө таниулан баталгаажуулах шаардлагатай байдаг.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19HxDxpXQ3pr5OqP9qrCj1BuYF8fM6VHzAur26jRqbtPHNhvdHPxnndkOc7lEWBtmmBc&usqp=CAU",
  },
];
let nextCatId = categories.length;

app.get("/categories", (req, res) => {
  res.json(categories);
  // response.status(200);
  // response.json(categories);
});
app.get("/categories/:id", (request, response) => {
  const { id } = request.params;
  let category = null;

  for (const cat of categories) {
    if (id == cat.id) {
      category = cat;
      break;
    }
  }
  response.json(category);
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  categories = categories.filter((row) => row.id !== id);
  updateCategoriesFile();
  res.json(id);
});

app.post("/categories", jsonParser, (req, res) => {
  const { name } = req.body;
  const newCategories = { id: nextCatId++, name };
  updateCategoriesFile();
  res.send(newCategories);
});

app.put("/categories/:id", jsonParser, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const index = categories.findIndex((item) => item.id === Number(id));
  if (index === -2) {
    res.status(400).json("bad req");
  } else {
    const updatedCategory = categories[index];
    updatedCategory.name = name;
    categories[index] = updatedCategory;
    res.json(updatedCategory);
  }
});

app.get("/generateNumber", (req, res) => {
  fs.writeFileSync("phones.txt", "99119911");
  res.json("Done");
});

let products = JSON.parse(fs.readFileSync("MOCK_DATA.json", "utf-8"));

app.get("/products", (req, res) => {
  let { pageSize, page, priceTo, priceFrom, q } = req.query;
  pageSize = Number(pageSize) || 10;
  page = Number(page) || 1;
  // priceTo = Number(priceTo);
  // priceFrom = Number(priceFrom);
  let start, end;

  start = (page - 1) * pageSize;
  end = start + pageSize;

  const item = products.slice(start, end);

  res.json({
    total: products.length,
    totalPages: Math.ceil(products.length / pageSize),
    page,
    pageSize,
    item,
  });
});
// app.get("/articles", (request, response) => {
//   response.status(200);
//   response.json(articles);
// });

// app.get("articles/:id", (req, res) => {
//   const { id } = req.params;
//   res.json(articles[Number(id) - 1]);
// });
app.get("/generate", async (req, res) => {
  const response = await openai.createImage({
    prompt: "boudle backflip",
    n: 1,
    size: "256x256",
  });
  image_url = response.data.data[0].url;
  res.json(image_url);
});

app.listen(port, async () => {
  console.log("http://localhost:" + port);

  const response = await openai.listEngines();
  console.log(response);
});
