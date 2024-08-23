import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";

export default function Home() {
  const list = [
    "angerfish",
    "bat",
    "bigbat",
    "bigdumbbird",
    "bigdumbfish",
    "bigmagic",
    "bigrat",
    "bigry",
    "bulba",
    "Butter",
    "cute",
    "cut",
    "dumbbird",
    "dumbfish",
    "e",
    "hypno",
    "magic",
    "Pika",
    "rai",
    "rat",
    "ry",
    "ugly",
    "waterdragon",
    "mega",
    "lady",
    "biglady",
    "x",
    "sudo",
    "poli",
    "a",
    "woo",
    "q",
    "murk",
    "waba",
    "gir",
    "gil",
    "steel",
    "coolsc",
    "beetle",
    "catcutthing",
    "idk",
    "ur",
    "pil",
    "octo",
    "doom",
    "ele",
  ];
  const expectedList = ["F", "M"];

  const [currentPokemon, setCurrentPokemon] = useState();
  const [expected, setExpected] = useState();
  const [isCorrect, setIsCorrect] = useState();

  const [img, setImg] = useState();

  useEffect(() => {
    setCurrentPokemon(pickRandom());
  }, []);

  const pickRandom = () => {
    const randomPokemon = list[Math.floor(Math.random() * list.length)];
    if (randomPokemon === currentPokemon) {
      return pickRandom();
    }

    setExpected(expectedList[Math.floor(Math.random() * expectedList.length)]);

    return randomPokemon;
  };

  const chosen = (pick) => {
    if (pick === expected) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const reset = () => {
    setIsCorrect(undefined);
    setCurrentPokemon(pickRandom());
  };

  return (
    <>
      <Typography varient="h3" className="sectionHeader">
        THE GAME
      </Typography>
      <Grid spacing={2} container>
        <Paper className="formContainer">
          <Typography varient="h4">NOW GUESS</Typography>
          <Grid container justifyContent="center" alignItems="center">
            <img
              src={`${process.env.PUBLIC_URL}/pokemon/${currentPokemon}${expected}.png`}
              loading="lazy"
              onContextMenu={(e) => {
                e.preventDefault();
              }}
            />
          </Grid>
          {isCorrect === undefined && (
            <Grid container justifyContent="center" alignItems="center">
              <Button
                onClick={() => chosen("M")}
                variant="contained"
                style={{ margin: "0 10px" }}
              >
                Male
              </Button>
              <Button
                onClick={() => chosen("F")}
                variant="contained"
                style={{ margin: "0 10px" }}
              >
                Female
              </Button>
            </Grid>
          )}
          {isCorrect !== undefined && (
            <Grid container justifyContent="center" alignItems="center">
              {isCorrect && (
                <Typography className="right" varient="h4">
                  CORRECT
                </Typography>
              )}
              {!isCorrect && (
                <Typography className="wrong" varient="h4">
                  WRONG, IDIOT
                </Typography>
              )}
              <Button
                onClick={() => reset()}
                variant="contained"
                style={{ margin: "0 10px" }}
              >
                RESET
              </Button>
            </Grid>
          )}
        </Paper>
      </Grid>
    </>
  );
}
