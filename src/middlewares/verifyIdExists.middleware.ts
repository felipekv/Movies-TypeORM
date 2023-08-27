import { NextFunction, Request, Response } from "express";
import { movieRepo } from "../repositories";
import { Movie } from "../entities";
import { AppError } from "../errors";

export const verifyIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundMovie: Movie | null = await movieRepo.findOne({
    where: { id: Number(req.params.id) }
  });

  if (!foundMovie) throw new AppError("Movie not found", 404);

  res.locals = { ...res.locals, foundMovie };

  return next();
};