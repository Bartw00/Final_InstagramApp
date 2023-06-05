import { rest } from "msw";

// import currentWeather from "./fixtures/currentWeather.json";
import useCuratedPhotos from "../features/dashboard/components/hook/useCuratedPhotos";
import curatedPhotos from './fixtures/curatedPhotos.json';

export const handlers = [
  // rest.get(
  //   "https://api.openweathermap.org/data/3.0/onecall",
  //   (req, res, ctx) => {
  //     return res(ctx.json(currentWeather));
  //   }
  // ),
  rest.get(
    'https://api.pexels.com/v1/curated',
    (req, res, ctx) => {
      return res(ctx.json(curatedPhotos))
    }
  ),

  rest.get(
    'https://api.pexels.com/v1/collections/featured',
    (req, res, ctx) => {
      return res(ctx.json(featuredPhotos))
    }
  )
];
