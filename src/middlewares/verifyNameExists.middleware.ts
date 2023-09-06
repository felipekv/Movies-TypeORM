import { NextFunction, Request, Response } from "express";
import { movieRepo } from "../repositories";
import { Movie } from "../entities";
import { AppError } from "../errors";

export const verifyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const movieName: string | undefined = req.body.name;

  if (!movieName) return next();

  const foundMovie: boolean = await movieRepo.exist({
    where: { name: movieName },
  });

  if (foundMovie) throw new AppError("Movie already exists.", 409);

  return next();
};
