import { rest } from "msw";

import useCuratedPhotos from "../features/dashboard/components/hook/useCuratedPhotos";
import curatedPhotos from './fixtures/curatedPhotos.json';

export const handlers = [
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
