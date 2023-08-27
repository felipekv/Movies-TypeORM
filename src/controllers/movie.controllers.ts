import { Request, Response } from "express";
import { Movie } from "../entities";
import movieServices from "../services";
import { Pagination } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await movieServices.create(req.body);
  return res.status(201).json(movie);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const { pagination } = res.locals;
  const movies: Pagination = await movieServices.read(pagination);

  return res.status(200).json(movies);
};

const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundMovie } = res.locals;
  const { body } = req;

  const movie: Movie = await movieServices.update(foundMovie, body);

  return res.status(200).json(movie);
};

const remove = async (req: Request, res: Response): Promise<Response> => {
  await movieServices.remove(res.locals.foundMovie);
  return res.status(204).json();
};

export default { create, read, update, remove };
