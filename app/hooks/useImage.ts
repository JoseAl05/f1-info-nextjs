import useSWR from 'swr';
import axios from 'axios';
import { ImageID } from '../types/ImageTypes';

interface IUseImage {
  title: string;
}

const useImage = ({ title }: IUseImage) => {

  const formattedTitle = title.split(' ').join('_');


  // const wikiEndPoint = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&indexpageids=1&titles=${formattedTitle}&piprop=original`;

  const wikiEndPoint = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&indexpageids=1&titles=${formattedTitle}&piprop=original`;


  const fetcher = async (url:any) => await axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(wikiEndPoint, fetcher);

  return {
    imageData: data?.query as ImageID | undefined,
    error,
    isLoading,
  };
};

export default useImage;
