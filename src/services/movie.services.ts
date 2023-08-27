import { Movie } from "../entities";
import {
  Pagination,
  PaginationParams,
  MovieCreate,
  MovieRead,
  MovieUpdate,
} from "../interfaces";
import { movieRepo } from "../repositories";

const create = async (payload : MovieCreate): Promise<Movie> => {
  return await movieRepo.save(payload);
}

const read = async ({
  nextPage,
  page,
  perPage,
  prevPage,
  order,
  sort,
}: PaginationParams): Promise<Pagination> => {
  const [movies, count]: Array<MovieRead | number> =
    await movieRepo.findAndCount({
      order: { [sort]: order },
      skip: page,
      take: perPage,
    });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};

const update = async (movie: Movie, payload: MovieUpdate): Promise<Movie> => {
  return await movieRepo.save({ ...movie, ...payload });
};

const remove = async (movie: Movie): Promise<void> => {
  await movieRepo.remove(movie);
};

export { create, read, update, remove };
