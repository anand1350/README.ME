import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function MenuNewsArticles() {
  const News = [
    {
      from: "",
      date: "Dec 24, 2022",
      title: "2022: The year that changed the way we work",
      article: "articles",
      image: <img src="../images/Newsimage/image1.png" alt="" />,
      menu: "Productivity",
      readTime: "8 min read",
    },
    {
      from: "",
      date: "Dec 24, 2022",
      title: "2022: The year that changed the way we work",
      article: "articles",
      image: <img src="../images/Newsimage/image2.png" alt="" />,
      menu: "Productivity",
      readTime: "8 min read",
    },
    {
      from: "",
      date: "Dec 24, 2022",
      title: "2022: The year that changed the way we work",
      article: "articles",
      image: <img src="../images/Newsimage/image3.png" alt="" />,
      menu: "Productivity",
      readTime: "8 min read",
    },
    {
      from: "Published in Towards Data Science",
      date: "Dec 24, 2022",
      title: "2022: The year that changed the way we work",
      article: "articles",
      image: <img src="../images/Newsimage/image4.png" alt="" />,
      menu: "Productivity",
      readTime: "8 min read",
    },
    {
      from: "Published in Towards Data Science",
      date: "Dec 24, 2022",
      title: "2022: The year that changed the way we work",
      article: "articles",
      image: <img src="../images/Newsimage/image5.png" alt="" />,
      menu: "Productivity",
      readTime: "8 min read",
    },
  ];

  return (
    <div>
      
      {News.map((user) => (
          <div className="p-4 menunews">
            {user.date}
            <Row >
            <Col>
                <div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      {user.from}
                      {user.title}
                      <div>
                        {user.article}
                      </div>
                      <div>
                        <div className="border">
                          {user.menu}
                        </div>
                      {user.readTime}
                      </div>
                    </div>
                  </div>
            </Col>
            <Col>
                <div>
                  {user.image}
                </div>
            </Col>
            <hr />
          </Row>
          </div>
        ))}
    </div>
  );
}
