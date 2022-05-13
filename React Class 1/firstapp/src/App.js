import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Card from "./card";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [arr, setArray] = useState([
    {
      id: 1,
      titile: "ABC12",
      price: 250,
    },
    {
      id: 2,
      titile: "ABC12",
      price: 250,
    },
    {
      id: 3,
      titile: "ABC12",
      price: 250,
    },
    {
      id: 4,
      titile: "ABC12",
      price: 250,
    },
    {
      id: 5,
      titile: "ABC12",
      price: 250,
    },
    {
      id: 6,
      titile: "ABC12",
      price: 250,
    },
  ]);
  const [questions, setQuestions] = useState([
    {
      answer: "Namibia",
      options: ["Namibia", "Niger", "Chad", "Ghana"],
      question: "Windhoek is the capital of__________?",
    },
    {
      answer: "Euro",
      options: ["Zolty", "Peso", "Euro", "Escudo"],
      question: "The currency of portugal is__________?",
    },
    {
      answer: "Almaty",
      options: ["Astana", "Almaty", "Baku", "Tashkent"],
      question:
        "Which of the following city served as capital of Kazakhstan till 1997?",
    },
    {
      answer: "North Atlantic Ocean",
      options: [
        "North Atlantic Ocean",
        "South Atlantic Ocean",
        "Pacific Ocean",
        "Arabian Sea",
      ],
      question: "Bermuda Triangle is located in__________?",
    },
    {
      answer: "Ramon Magsaysay Award",
      options: [
        "Ramon Magsaysay Award",
        "Booker Prize",
        "Pulitzer Prize",
        "None of them",
      ],
      question:
        "Which among the following is known as Asia a version of “Noble prize”?",
    },
    {
      answer: "Geneva",
      options: ["London", "Geneva", "Rome", "Paris"],
      question: "The headquarter of EFTA is in_____________?",
    },
    {
      answer: "China",
      options: ["Japan", "China", "South Koera", "None of These"],
      question:
        "Which country Built A 250-Acre Solar Farm Shaped Like A Giant Panda:",
    },
    {
      answer: "White Bellbird",
      options: ["Macaws", "Cockatoos", "White Bellbird", "None of these"],
      question: "________ is the World’s Loudest Bird",
    },
    {
      answer: "Feb 29",
      options: ["Feb 29", "Feb 28", "March 01", "Feb 01"],
      question: "_______ is known as leap day or leap year day",
    },
    {
      answer: "China",
      options: ["Japan", "Russia", "China", "None of These"],
      question: "Where is the World’s longest sea bridge ?",
    },
  ]);
  const [indexNum, setIndexNum] = useState(3);
  const [score, setScore] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [showStatusCorrect, setShowStatusCorrect] = useState(false);

  // let addToCart = () => {
  //   console.log("Add To Cart");
  // };
  let checkQuestion = (correctVal, selectedVal) => {
    if (correctVal == selectedVal) {
      setScore(score + 1);
      setShowStatusCorrect(true);
    } else {
      setShowStatusCorrect(false);
    }
    if (indexNum + 1 == questions.length) {
      setQuestions(false);
    } else {
      setIndexNum(indexNum + 1);
    }
  };
  return (
    <div className="App">
      {/* <header className="App-header container">
        <div className="row">
          {arr.map((e) => (
            <Card title={e.titile} price={e.price} action={addToCart} />
          ))}
        </div>
      </header> */}

      <div className="p-5">
        <Grid container>
          {showQuestion ? (
            <>
              <Grid md={12} sm={12} xl={12} xs={12} lg={12}>
                <div className="bg-info p-3 rounded shadow">
                  <p className="fs-2">{questions[indexNum].question}</p>
                </div>
              </Grid>
              <Grid md={12} sm={12} xl={12} xs={12} lg={12}>
                <Grid container>
                  {questions[indexNum].options.map((e, i) => (
                    <Grid
                      sx={{ padding: 2 }}
                      md={6}
                      sm={6}
                      xl={12}
                      xs={12}
                      lg={12}
                    >
                      <Button
                        onClick={() =>
                          checkQuestion(questions[indexNum].answer, e)
                        }
                        fullWidth={true}
                        variant="contained"
                      >
                        {e}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid md={12} sm={12} xl={12} xs={12} lg={12}>
                <Typography
                  sx={{ color: showStatusCorrect ? "green" : "maroon" }}
                  color="info"
                  variant="h4"
                >
                  {showStatusCorrect ? "Correct" : "incorrect"}
                  {showStatusCorrect ? <CheckIcon /> : <CloseIcon />}
                </Typography>
              </Grid>
            </>
          ) : (
            <Grid md={12} sm={12} xl={12} xs={12} lg={12}>
              <div className="bg-info text-center">
                <Typography variant="h3">{score}</Typography>
              </div>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default App;
