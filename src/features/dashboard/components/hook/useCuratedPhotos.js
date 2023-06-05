import { useQuery } from "@tanstack/react-query";
import apiCall from "../../../../shared/services/apiCall";

async function getCuratedPhotos({}) {
  const { data } = await apiCall({
    url: "/api/documentation/?language=javascript#photos-curated",
    method: "GET",
    params: {
      appid: import.meta.env.VITE_PEXEL_API_KEY,
    },
  });
  return data;
}

export default function useCuratedPhotos({} = {}) {
  return useQuery(["photos-curated"], () => getCuratedPhotos({}));
}
